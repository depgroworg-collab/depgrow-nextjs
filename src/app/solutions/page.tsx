'use client'
import { useState } from 'react'
import Link from 'next/link'

const sols = [
  { cat: 'auto', icon: 'ti-bolt', label: 'AI & Automation', title: 'Instant lead follow-up', desc: 'Personalised WhatsApp and email the moment a lead submits a form.', price: '₹14,999' },
  { cat: 'voice', icon: 'ti-phone', label: 'AI Voice', title: 'Inbound AI receptionist', desc: 'Human-like AI answers every inbound call and schedules meetings 24/7.', price: '₹29,999' },
  { cat: 'web', icon: 'ti-rocket', label: 'Web', title: 'High-converting landing page', desc: 'Single-page funnel built to capture leads and book calls.', price: '₹19,999' },
  { cat: 'auto', icon: 'ti-calendar', label: 'AI & Automation', title: 'Appointment booking bot', desc: 'Prospects book automatically across WhatsApp, SMS, or web.', price: '₹24,999' },
  { cat: 'audit', icon: 'ti-chart-dots', label: 'Audit', title: 'Business process teardown', desc: 'Complete audit with an exact automation roadmap.', price: '₹24,999' },
  { cat: 'auto', icon: 'ti-brand-whatsapp', label: 'AI & Automation', title: 'WhatsApp follow-up sequences', desc: 'Multi-step nurture sequences from interest to booked call.', price: '₹19,999' },
  { cat: 'voice', icon: 'ti-phone-outgoing', label: 'AI Voice', title: 'Outbound AI caller', desc: 'AI calls your lead list, qualifies prospects, books meetings.', price: '₹39,999' },
  { cat: 'web', icon: 'ti-layout', label: 'Web', title: 'Multi-step lead funnel', desc: 'Qualify leads through a form that segments by budget, need, urgency.', price: '₹24,999' },
  { cat: 'auto', icon: 'ti-database', label: 'AI & Automation', title: 'CRM auto-population', desc: 'Every lead, call, and interaction auto-logged — zero data entry.', price: '₹19,999' },
  { cat: 'auto', icon: 'ti-mail', label: 'AI & Automation', title: 'Email nurture sequence', desc: '7-part email sequence that warms cold leads over 2 weeks.', price: '₹14,999' },
  { cat: 'voice', icon: 'ti-headset', label: 'AI Voice', title: 'AI appointment reminder caller', desc: 'Automated reminder calls 24h before appointments. Reduces no-shows by 60%.', price: '₹19,999' },
  { cat: 'web', icon: 'ti-device-mobile', label: 'Web', title: 'WhatsApp chat widget', desc: 'Embed a WhatsApp button on any website. Capture leads directly.', price: '₹9,999' },
  { cat: 'audit', icon: 'ti-clipboard-list', label: 'Audit', title: 'Revenue leak audit', desc: 'Deep dive into your sales process to find where money is escaping.', price: '₹14,999' },
  { cat: 'auto', icon: 'ti-repeat', label: 'AI & Automation', title: 'Lead re-engagement bot', desc: 'Automatically re-engage cold leads from your CRM with personalised messages.', price: '₹19,999' },
  { cat: 'auto', icon: 'ti-report-analytics', label: 'AI & Automation', title: 'Weekly reporting automation', desc: 'Auto-generate and send weekly performance reports to your team.', price: '₹14,999' },
  { cat: 'voice', icon: 'ti-microphone', label: 'AI Voice', title: 'Outbound survey caller', desc: 'AI calls customers post-purchase for reviews and feedback.', price: '₹24,999' },
  { cat: 'web', icon: 'ti-forms', label: 'Web', title: 'Smart lead capture form', desc: 'Multi-step form that qualifies and segments leads before CRM entry.', price: '₹14,999' },
  { cat: 'auto', icon: 'ti-arrows-transfer-up', label: 'AI & Automation', title: 'Cross-platform data sync', desc: 'Keep CRM, email, and WhatsApp contacts in perfect sync automatically.', price: '₹19,999' },
  { cat: 'audit', icon: 'ti-zoom-money', label: 'Audit', title: 'Conversion rate audit', desc: 'Analyse your website and funnel. Get a clear plan to double conversions.', price: '₹19,999' },
]

const filters = [
  { key: 'all', label: 'All' },
  { key: 'auto', label: 'AI & Automation' },
  { key: 'voice', label: 'AI Voice' },
  { key: 'web', label: 'Web' },
  { key: 'audit', label: 'Audit' },
]

export default function SolutionsPage() {
  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? sols : sols.filter(s => s.cat === active)

  return (
    <div className="inner-page">
      <p className="sec-label" style={{ marginBottom: '0.5rem' }}>Solutions catalogue</p>
      <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '0.5rem' }}>19 pre-built solutions.</h1>
      <p style={{ fontSize: '16px', color: 'var(--text-sec)', marginBottom: '1.5rem' }}>Start with what hurts most. From ₹14,999.</p>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        {filters.map(f => (
          <button key={f.key} className={`sfbtn${active === f.key ? ' active' : ''}`} onClick={() => setActive(f.key)}>
            {f.label}
          </button>
        ))}
      </div>

      <div className="sol-full">
        {filtered.map((s, i) => (
          <div key={i} className="sol-card">
            <div className={`sol-type ${s.cat}`}>
              <i className={`ti ${s.icon}`} />{s.label}
            </div>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
              <span style={{ fontSize: '17px', fontWeight: 700 }}>{s.price}</span>
              <Link href="/contact" style={{ fontSize: '13px', color: 'var(--green)', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, textDecoration: 'none' }}>Get started →</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
