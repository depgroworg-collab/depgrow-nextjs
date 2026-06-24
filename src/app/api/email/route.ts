import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()

  // Email via Resend (or replace with your email provider)
  // Set RESEND_API_KEY in .env.local
  const resendKey = process.env.RESEND_API_KEY
  if (!resendKey) {
    return NextResponse.json({ success: false, error: 'Email not configured' })
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Depgrow <onboarding@resend.dev>',
        to: ['hello@depgrow.in'],
        subject: `New Audit Request — ${body.name} | ${body.business}`,
        text: `New Revenue Audit Request\n\nName: ${body.name}\nBusiness: ${body.business}\nEmail: ${body.email}\nPhone: ${body.phone}\nType: ${body.type}\nSize: ${body.size}\nChallenge: ${body.challenge}`,
      }),
    })

    return NextResponse.json({ success: res.ok })
  } catch (err) {
    return NextResponse.json({ success: false, error: String(err) })
  }
}
