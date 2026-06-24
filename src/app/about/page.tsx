import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'About | Depgrow' }

const values = [
  { title: 'Outcome-driven', desc: 'We measure success by your revenue, not our deliverables.' },
  { title: 'Transparent pricing', desc: 'Fixed price. No surprises. Ever.' },
  { title: 'Fast delivery', desc: 'Live in 2 weeks — not 2 months.' },
  { title: 'Zero dependency', desc: 'You own everything we build. No lock-in.' },
]

export default function AboutPage() {
  return (
    <div className="inner-page" style={{ maxWidth: '680px' }}>
      <p className="sec-label" style={{ marginBottom: '0.5rem' }}>About</p>
      <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '1rem' }}>Deep systems. Real growth.</h1>
      <p style={{ fontSize: '16px', color: 'var(--text-sec)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
        Depgrow builds AI automations, voice agents, and web systems engineered around your outcomes — not our deliverables.
      </p>
      <p style={{ fontSize: '16px', color: 'var(--text-sec)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
        We go deep first — understanding your root business problems. Then we build the precise system that drives real, measurable growth. Every system is measured by hours saved and revenue generated.
      </p>
      <div className="val-grid">
        {values.map(v => (
          <div key={v.title} className="val-card">
            <h4>{v.title}</h4>
            <p>{v.desc}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <Link href="/founder" className="btn-p">Meet the founder →</Link>
      </div>
    </div>
  )
}
