import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Revenue Systems | Depgrow',
  description: 'Three AI systems. Fixed scope. Fixed price. Live in 2 weeks.',
}

const systems = [
  {
    tag: 'System 1', title: 'Revenue capture', subtitle: 'Contact, qualify, and book leads automatically.',
    price: '₹60,000', priceNote: 'one-time build', featured: false,
    features: ['AI voice agent (24/7)','WhatsApp & SMS bot','Instant CRM sync','Lead qualification flow','Auto appointment booking','Multi-language support'],
  },
  {
    tag: 'System 2 · Flagship', title: 'Ops efficiency', subtitle: 'Eliminate 40 hours of manual work your team does every week.',
    price: '₹1,00,000', priceNote: 'one-time build', featured: true,
    features: ['Workflow process mapping','3–5 core automations','Custom n8n/Make logic','Full integration setup','Reporting dashboard','Team training included'],
  },
  {
    tag: 'System 3', title: 'Web capture', subtitle: 'Turn your website from a brochure into a lead machine.',
    price: '₹50,000', priceNote: 'one-time build', featured: false,
    features: ['High-converting landing page','Frictionless lead capture','Automated WhatsApp triggers','Analytics & tracking','A/B testing setup','SEO-optimised structure'],
  },
]

export default function SystemsPage() {
  return (
    <div className="inner-page">
      <p className="sec-label" style={{ marginBottom: '0.5rem' }}>Revenue systems</p>
      <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '-0.3px' }}>Three systems. One goal.</h1>
      <p style={{ fontSize: '16px', color: 'var(--text-sec)', marginBottom: '2.5rem' }}>Fixed scope. Fixed price. Live in 2 weeks.</p>

      {systems.map((s, i) => (
        <div key={i} className={`sys-detail${s.featured ? ' feat' : ''}`}>
          <div className="sys-dh">
            <div>
              <div className="sys-tag">{s.tag}</div>
              <h2>{s.title}</h2>
              <p>{s.subtitle}</p>
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <div style={{ fontSize: '26px', fontWeight: 700 }}>{s.price}</div>
              <div style={{ fontSize: '13px', color: 'var(--text-sec)' }}>{s.priceNote}</div>
            </div>
          </div>
          <div className="feats-full">
            {s.features.map(f => (
              <div key={f} className="feat-row"><i className="ti ti-check" />{f}</div>
            ))}
          </div>
          <Link href="/contact" className="btn-p">Get started →</Link>
        </div>
      ))}
    </div>
  )
}
