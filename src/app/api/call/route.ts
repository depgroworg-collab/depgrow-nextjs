import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { name, phone, business } = await req.json()

  // Vapi outbound call integration
  // Replace VAPI_API_KEY and VAPI_ASSISTANT_ID in your .env.local
  const vapiKey = process.env.VAPI_API_KEY
  const assistantId = process.env.VAPI_ASSISTANT_ID

  if (!vapiKey || !assistantId) {
    return NextResponse.json({ success: false, error: 'Vapi not configured' })
  }

  try {
    const res = await fetch('https://api.vapi.ai/call/phone', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${vapiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        assistantId,
        customer: { number: phone, name },
        assistantOverrides: {
          variableValues: { name, business },
        },
      }),
    })

    const data = await res.json()
    return NextResponse.json({ success: res.ok, data })
  } catch (err) {
    return NextResponse.json({ success: false, error: String(err) })
  }
}
