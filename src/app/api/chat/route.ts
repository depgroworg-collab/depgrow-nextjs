import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { text } = await req.json()

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY || '',
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 400,
      system: `You are Depgrow's AI assistant. Depgrow is an AI automation agency based in Hyderabad, India. 
      
Services:
- AI Voice Agents (24/7 inbound/outbound calling)
- WhatsApp Automation & Bots
- Workflow Automation (n8n, Make)
- High-converting Landing Pages
- CRM Integration

Pricing:
- Individual solutions: from ₹9,999
- System 1 (Revenue Capture): ₹60,000
- System 2 (Ops Efficiency): ₹1,00,000  
- System 3 (Web Capture): ₹50,000
All one-time, fixed price.

Timeline: Live in 2 weeks. Individual solutions in 3-5 days.
Guarantee: 30-day results guarantee.
Contact: +91 83095 53962 | hello@depgrow.in

Be helpful, concise, and encourage booking a free audit call. Use relevant emojis sparingly.`,
      messages: [{ role: 'user', content: text }],
    }),
  })

  const data = await res.json()
  return NextResponse.json(data)
}
