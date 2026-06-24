import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies | Depgrow',
  description: 'Real results from real Indian businesses using Depgrow AI systems.',
}

const cases = [
  {
    tag: 'System 1 — Revenue Capture', industry: 'Healthcare · Hyderabad', title: 'Mehta Multi-Specialty Clinic',
    desc: 'A busy clinic missing 15+ inbound calls daily. Receptionists overwhelmed. Patients booking with competitors instead.',
    stats: [{ num: '3×', lbl: 'More appointments' }, { num: '0', lbl: 'Missed calls now' }, { num: '14 days', lbl: 'To go live' }, { num: '₹80K', lbl: 'Monthly revenue recovered' }],
    timeline: [
      { sl: 'Problem', sv: '15+ missed calls/day. No system to handle volume.' },
      { sl: 'What we built', sv: 'AI voice receptionist + WhatsApp bot + CRM sync' },
      { sl: 'Week 1', sv: 'AI handling 80% of inbound. Zero missed appointments.' },
      { sl: 'Month 1', sv: '3× appointments. ₹80K additional monthly revenue.' },
    ],
    quote: '"Depgrow built us an AI receptionist that now handles 80% of our inbound calls. We went from missing 15 calls a day to zero." — Dr. Rajesh Kumar',
  },
  {
    tag: 'System 1 — Revenue Capture', industry: 'Real Estate · Bangalore', title: 'Skyline Realty',
    desc: 'Sales team spending 30 hours/week on manual follow-up calls. Leads going cold. Deals slipping to competitors.',
    stats: [{ num: '₹18L', lbl: 'Deals closed in month 1' }, { num: '30h', lbl: 'Weekly time saved' }, { num: '60s', lbl: 'Lead response time' }, { num: '2 weeks', lbl: 'To go live' }],
    timeline: [
      { sl: 'Problem', sv: '30h/week manual follow-up. Cold leads. Lost deals.' },
      { sl: 'What we built', sv: 'WhatsApp follow-up bot + lead scoring + CRM automation' },
      { sl: 'Week 2', sv: 'Every lead followed up in 60 seconds automatically.' },
      { sl: 'Month 1', sv: '2 properties closed that would have been lost. ₹18L recovered.' },
    ],
    quote: '"Our sales team was spending 30 hours a week on follow-up calls. Now the WhatsApp bot does it automatically." — Priya Sharma',
  },
  {
    tag: 'System 3 — Web Capture', industry: 'Education · Pune', title: 'GrowthEdge Academy',
    desc: 'Good traffic but near-zero conversions. Visitors leaving without enrolling. Manual enrollment process losing warm leads.',
    stats: [{ num: '40%', lbl: 'More enrollments' }, { num: 'Week 1', lbl: 'First results visible' }, { num: '₹50K', lbl: 'Investment (one-time)' }, { num: '14 days', lbl: 'To go live' }],
    timeline: [
      { sl: 'Problem', sv: 'Good traffic. Near-zero conversions. Manual enrollment.' },
      { sl: 'What we built', sv: 'Landing page + WhatsApp trigger + automated nurture' },
      { sl: 'Week 1', sv: '40% jump in enrollments right after launch.' },
      { sl: 'Month 1', sv: 'ROI clearly visible. Scaling with paid ads on same funnel.' },
    ],
    quote: '"Within 2 weeks, our enrollments jumped 40%. The ROI was obvious from week 1." — Arjun Mehta',
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="inner-page">
      <p className="sec-label" style={{ marginBottom: '0.5rem' }}>Case studies</p>
      <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '0.5rem' }}>Real results. Real businesses.</h1>
      <p style={{ fontSize: '16px', color: 'var(--text-sec)', marginBottom: '2.5rem' }}>Here's what happened when our clients stopped leaking revenue.</p>

      {cases.map((c, i) => (
        <div key={i} className="case-full-card">
          <span className="case-system-tag">{c.tag}</span>
          <div className="case-industry">{c.industry}</div>
          <div className="case-title">{c.title}</div>
          <div className="case-desc">{c.desc}</div>
          <div className="case-stats-row">
            {c.stats.map(s => (
              <div key={s.lbl} className="case-big-stat">
                <div className="case-big-num">{s.num}</div>
                <div className="case-big-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
          <div className="case-timeline">
            {c.timeline.map(t => (
              <div key={t.sl} className="cstep">
                <div className="sl">{t.sl}</div>
                <div className="sv">{t.sv}</div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '1.5rem', fontSize: '14px', color: 'var(--text-sec)', fontStyle: 'italic' }}>{c.quote}</p>
        </div>
      ))}

      <div style={{ textAlign: 'center', marginTop: '2rem', padding: '2rem', background: 'var(--green-tint)', borderRadius: '16px', border: '1px solid var(--green)' }}>
        <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '0.5rem' }}>Want results like these?</h3>
        <p style={{ fontSize: '14px', color: 'var(--text-sec)', marginBottom: '1.25rem' }}>Book a free 30-minute call. We'll identify your exact revenue leak and show you how to fix it.</p>
        <Link href="/contact" className="btn-p">Book your free audit call →</Link>
      </div>
    </div>
  )
}
