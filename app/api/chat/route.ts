import { NextResponse } from 'next/server'
import { queryAndelsonKnowledge, ANDELSON_KNOWLEDGE } from '@/lib/ai-knowledge'

export async function POST(req: Request) {
  try {
    const { messages, language = 'fr' } = await req.json()

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Messages array is required' }, { status: 400 })
    }

    const lastMessage = messages[messages.length - 1]
    const userQuery = lastMessage.content || ''

    const apiKey = process.env.GEMINI_API_KEY

    // If Gemini API key is configured, invoke Gemini 2.5 Flash / 1.5 API
    if (apiKey) {
      try {
        const systemPrompt = `You are the official AI Assistant of TEUFACK SONTSA Andelson (Andelson Teufack), an Ingénieur des Travaux Informatiques (Software & IT Engineer) and Full-Stack & Mobile Developer based in Douala, Cameroon. He currently leads inspection digitalization at Kamer Engineering Solution and is completing a Professional Master's Degree in Software Engineering at ENSPD.

STRICT MANDATE & SAFETY RULES:
1. You ONLY answer questions regarding Andelson Teufack: his career, engineering skills (Flutter Offline-First, Gemini LLM, BluetoothSockets, Spring Boot, Python FastAPI/Django/Flask, React/Next.js, Odoo ERP, PostgreSQL/PostGIS), experiences (Kamer Engineering Solution, Green Power Cameroon, IAI Centre de Douala instructor, Credix.Cam SA), projects (KES Inspection Ecosystem, KES Internal ERP, MULEMA & Shikaku published on Google Play Store, Momokash financial reconciliation, KoboCollect/ESRI GIS), education, certifications, languages (Français Courant, Anglais Niveau C1, Yemba), and contact details.
2. Never invent dates, roles, links, or metrics outside ANDELSON_KNOWLEDGE.
3. If asked about ANY unrelated topic (e.g. general recipes, politics, random homework unrelated to Andelson), politely decline in ONE short sentence and suggest asking about Andelson's engineering profile or projects.
4. Be concise, structured, accurate, and professional.
5. Language of response must match requested language: ${language.toUpperCase()}.

ANDELSON KNOWLEDGE DATA:
${JSON.stringify(ANDELSON_KNOWLEDGE, null, 2)}`

        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [
                { role: 'user', parts: [{ text: systemPrompt }] },
                ...messages.map((m: { role: string; content: string }) => ({
                  role: m.role === 'assistant' ? 'model' : 'user',
                  parts: [{ text: m.content }],
                })),
              ],
            }),
          }
        )

        if (geminiRes.ok) {
          const data = await geminiRes.json()
          const text = data?.candidates?.[0]?.content?.parts?.[0]?.text
          if (text) {
            return NextResponse.json({ reply: text })
          }
        }
      } catch (geminiError) {
        console.warn('Gemini API call failed, falling back to Knowledge Engine RAG:', geminiError)
      }
    }

    // High-performance fallback: Local RAG Knowledge Engine
    const reply = queryAndelsonKnowledge(userQuery, language as 'fr' | 'en')
    return NextResponse.json({ reply })
  } catch (error) {
    console.error('Error in AI Chat API route:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
