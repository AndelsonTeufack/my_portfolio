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
        const systemPrompt = `You are the official AI Assistant & Digital Avatar of TEUFACK SONTSA Andelson (Andelson Teufack), a 22-year-old Full-Stack Developer & IT Solutions Analyst based in Douala, Cameroon.

STRICT MANDATE & SAFETY RULES:
1. You ONLY answer questions regarding Andelson Teufack: his career, skills (Spring Boot, Flutter, Python, React, Next.js, Odoo, GIS), experiences (KES IP, Green Power, Credix, IAI teaching), projects (MomoKash, TaillorPro, MULEMA, etc.), education, and contact details.
2. If asked about ANY unrelated topic (e.g. general recipes, quantum physics, politics, random code homework unrelated to Andelson), politely decline in ONE short sentence and suggest asking about Andelson's engineering profile or projects!
3. Be professional, warm, enthusiastic, and sophisticated.
4. Language of response must match requested language: ${language.toUpperCase()}.

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
