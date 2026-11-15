import { NextResponse } from 'next/server'
import { runChatbotEngine } from '@/lib/chatbot/engine'
import { type ChatMessageInput } from '@/lib/chatbot/knowledge-graph'
import { type Language } from '@/lib/portfolio-data'

interface RawChatBody {
  messages?: unknown
  language?: unknown
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as RawChatBody
    const rawMessages = body?.messages
    const lang: Language = body?.language === 'en' ? 'en' : 'fr'

    if (!Array.isArray(rawMessages) || rawMessages.length === 0) {
      return NextResponse.json(
        { error: 'Messages array is required and must not be empty' },
        { status: 400 }
      )
    }

    const sanitizedMessages: ChatMessageInput[] = rawMessages
      .filter(
        (m): m is { role?: unknown; content?: unknown } =>
          typeof m === 'object' && m !== null
      )
      .map((m) => ({
        role: m.role === 'assistant' ? ('assistant' as const) : ('user' as const),
        content: typeof m.content === 'string' ? m.content.slice(0, 4000) : '',
      }))
      .filter((m) => m.content.trim().length > 0)

    if (sanitizedMessages.length === 0) {
      return NextResponse.json(
        { error: 'At least one non-empty message is required' },
        { status: 400 }
      )
    }

    // Moteur conversationnel autonome déterministe (0 EUR, 0 appel API externe, 0 hallucination)
    const result = runChatbotEngine({
      messages: sanitizedMessages,
      language: lang,
    })

    return NextResponse.json({
      reply: result.reply,
      intent: result.intent,
      confidence: result.confidence,
      confidenceLevel: result.confidenceLevel,
      entities: result.entities,
      actions: result.actions,
      followUpSuggestions: result.followUpSuggestions,
      ...(result.resolvedEntities ? { resolvedEntities: result.resolvedEntities } : {}),
    })
  } catch (error) {
    console.error('Error in Autonomous Chatbot API route:', error)
    return NextResponse.json(
      { error: 'Invalid request payload or internal engine error' },
      { status: 500 }
    )
  }
}
