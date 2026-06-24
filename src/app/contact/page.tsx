'use client'
import { useState } from 'react'
import type { Metadata } from 'next'

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = {
      name: (form.querySelector('#af-name') as HTMLInputElement).value.trim(),
      business: (form.querySelector('#af-business') as HTMLInputElement).value.trim(),
      email: (form.querySelector('#af-email') as HTMLInputElement).value.trim(),
      phone: (form.querySelector('#af-phone') as HTMLInputElement).value.trim(),
      type: (form.querySelector('#af-type') as HTMLSelectElement).value,
      size: (form.querySelector('#af-size') as HTMLSelectElement).value,
      challenge: (form.querySelector('#af-challenge') as HTMLTextAreaElement).value.trim(),
    }

    setLoading(true)
    const msg = `Hi Depgrow, I'd like to book a Free Revenue Audit.\n\nName: ${data.name}\nBusiness: ${data.business}\nEmail: ${data.email}\nPhone: ${data.phone}\nBusiness Type: ${data.type}\nTeam Size: ${data.size}\nBiggest Challenge: ${data.challenge}`

    // Trigger call
    try {
      await fetch('/api/call', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: data.name, phone: data.phone, business: data.business }) })
    } catch {}

    // Email (background)
    fetch('/api/email', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }).catch(() => {})

    // WhatsApp
    window.open('https://wa.me/918309553962?text=' + encodeURIComponent(msg), '_blank')
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="inner-page" style={{ maxWidth: '600px' }}>
      <div className="audit-card">
        <h2 className="audit-h2">Book Your <span>Free Revenue Audit</span></h2>
        <p className="audit-sub">Let's uncover what's leaking and build your growth system.</p>

        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <i className="ti ti-calendar" style={{ color: 'var(--green)' }} /> Pick a time that suits you
          </div>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/depgrow-org/free-strategy-call-depgrow?hide_gdpr_banner=1&primary_color=0E7A5A"
            style={{ minWidth: '280px', height: '680px', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--green)' }}
          />
          {/* Load Calendly script */}
          <script src="https://assets.calendly.com/assets/external/widget.js" async />
        </div>

        <div style={{ textAlign: 'center', fontSize: '13px', color: 'var(--text-sec)', marginBottom: '1.5rem' }}>— or fill in the form below —</div>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem', background: 'var(--green-tint)', borderRadius: '12px', border: '1px solid var(--green)' }}>
            <div style={{ fontSize: '32px', marginBottom: '0.75rem' }}>✅</div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '0.5rem' }}>Call incoming! Check your phone.</h3>
            <p style={{ fontSize: '14px', color: 'var(--text-sec)' }}>We&apos;ve also opened WhatsApp so you can message us directly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="af-field">
              <label>Name *</label>
              <div className="af-input"><i className="ti ti-user" /><input type="text" id="af-name" placeholder="Your full name" required /></div>
            </div>
            <div className="af-field">
              <label>Business Name *</label>
              <div className="af-input"><i className="ti ti-building" /><input type="text" id="af-business" placeholder="Your company name" required /></div>
            </div>
            <div className="af-field">
              <label>Email *</label>
              <div className="af-input"><i className="ti ti-mail" /><input type="email" id="af-email" placeholder="you@company.com" required /></div>
            </div>
            <div className="af-field">
              <label>Phone (WhatsApp) *</label>
              <div className="af-input"><i className="ti ti-phone" /><input type="tel" id="af-phone" placeholder="+91 98765 43210" required /></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div className="af-field">
                <label>Business Type *</label>
                <div className="af-input">
                  <i className="ti ti-briefcase" />
                  <select id="af-type" required>
                    <option value="" disabled>Select</option>
                    {['Real Estate','Clinic','Coaching','D2C','Legal','SaaS','E-commerce','Other'].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
              </div>
              <div className="af-field">
                <label>Team Size *</label>
                <div className="af-input">
                  <i className="ti ti-users" />
                  <select id="af-size" required>
                    <option value="" disabled>Select</option>
                    {['Solo','2-10','11-50','51-200','200+'].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
              </div>
            </div>
            <div className="af-field">
              <label>Biggest Challenge *</label>
              <div className="af-input af-textarea">
                <i className="ti ti-pencil" />
                <textarea id="af-challenge" rows={3} placeholder="What is the biggest operational or growth challenge your business faces right now?" required />
              </div>
            </div>
            <button type="submit" className="af-submit" disabled={loading}>
              {loading ? '⏳ Connecting you now…' : 'Book My Free Audit →'}
            </button>
            <p className="af-secure"><i className="ti ti-shield-check" style={{ color: 'var(--green)' }} />Your information is 100% secure and private.</p>
          </form>
        )}
      </div>
    </div>
  )
}
