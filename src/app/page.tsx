import Link from 'next/link'
import Hero from '@/components/Hero'
import ROICalculator from '@/components/ROICalculator'

const tickerItems = ['AI Voice Agents','Lead Follow-Up','WhatsApp Automation','CRM Sync','Appointment Booking','Landing Pages','Workflow Automation']
const tickerIcons = ['ti-phone','ti-bolt','ti-brand-whatsapp','ti-chart-bar','ti-calendar','ti-rocket','ti-settings-automation']

const clients = [
  { icon: 'ti-building', name: 'Mehta Clinics' },
  { icon: 'ti-home', name: 'Skyline Realty' },
  { icon: 'ti-school', name: 'GrowthEdge Academy' },
  { icon: 'ti-truck', name: 'SwiftLogix' },
  { icon: 'ti-heart', name: 'WellCare Health' },
  { icon: 'ti-device-laptop', name: 'TechSphere SaaS' },
  { icon: 'ti-building-store', name: 'RetailPro India' },
  { icon: 'ti-stethoscope', name: 'CareFirst Clinics' },
]

const problems = [
  { num: '01', title: 'Leads going cold', desc: '78% of customers buy from whoever responds first. By the time you call back, the deal\'s already gone.' },
  { num: '02', title: 'Too much manual work', desc: 'Your team burns 20–40 hours a week on data entry, scheduling, and reports — not on growing revenue.' },
  { num: '03', title: 'Websites that don\'t convert', desc: 'Traffic lands, looks around, and leaves. Without a capture system, you\'re handing revenue to competitors.' },
]

const beforeItems = ['Leads go cold — no one follows up in time','Team wastes 30+ hrs/week on manual tasks','Website gets traffic but zero conversions','Missed calls = missed revenue, every day','No visibility — you don\'t know what\'s working','Owner stuck in operations, not growth','Paying for tools that don\'t talk to each other']
const afterItems = ['AI responds to every lead in under 60 seconds','40+ hours saved weekly — team focuses on closing','Website captures and qualifies leads automatically','AI voice agent handles calls 24/7 — zero missed','Live dashboard — see revenue, leads, bookings','Systems run the business — you focus on scaling','One connected system — WhatsApp, CRM, web, calls']

const testimonials = [
  { initials: 'RK', bg: '#0E7A5A', quote: '"Depgrow built us an AI receptionist that now handles 80% of our inbound calls. We went from missing 15 calls a day to zero. Our appointment book is full for the first time."', name: 'Dr. Rajesh Kumar', role: 'Clinic Owner, Hyderabad', result: '↑ 3× more appointments in 30 days', placeholder: true },
  { initials: 'PS', bg: '#1565C0', quote: '"Our sales team was spending 30 hours a week on follow-up calls. Now the WhatsApp bot does it automatically. We closed 2 deals last month that we would have lost before."', name: 'Priya S.', role: 'Real Estate Agency, Bangalore', result: '₹18L in recovered deals in month 1', placeholder: true },
  { initials: 'AM', bg: '#6A1B9A', quote: '"Within 2 weeks of launching the lead capture system, our enrollments jumped 40%. The ROI was obvious from week 1. I wish I had done this 2 years ago."', name: 'Arjun M.', role: 'Coaching Academy, Pune', result: '↑ 40% enrollment increase', placeholder: true },
]

const systems = [
  { tag: 'System 1', title: 'Revenue capture', desc: 'Contact, qualify, and book leads in seconds — automatically.', features: ['AI voice agent (24/7)', 'WhatsApp & SMS bot', 'Instant CRM sync', 'Lead qualification flow'], price: 'From ₹60,000', priceNote: 'one-time', featured: false },
  { tag: 'System 2 · Flagship', title: 'Ops efficiency', desc: 'Eliminate 20–40 hours of manual tasks weekly with intelligent automation.', features: ['Workflow process mapping', '3–5 core automations', 'Custom n8n/Make logic', 'Full integration setup'], price: 'From ₹1,00,000', priceNote: 'one-time', featured: true },
  { tag: 'System 3', title: 'Web capture', desc: 'Turn your website from a brochure into a revenue-generating machine.', features: ['High-converting landing page', 'Frictionless lead capture', 'Automated WhatsApp triggers', 'Analytics & tracking'], price: 'From ₹50,000', priceNote: 'one-time', featured: false },
]

const process = [
  { num: '01', title: 'Free audit call', desc: 'We map your exact revenue leaks in a 30-min call. No fluff, no pitch.' },
  { num: '02', title: 'Scope & price', desc: 'Fixed scope, fixed price document. No surprises, no scope creep.' },
  { num: '03', title: 'Build (2 weeks)', desc: 'We build, integrate, and test everything. You see demos throughout.' },
  { num: '04', title: 'Go live + results', desc: '30-day guarantee kicks in from day 1. We track results together.' },
]

const whyCards = [
  { icon: 'ti-target', title: 'Outcome-focused', desc: 'We measure success by revenue generated and hours saved — not by deliverables shipped.' },
  { icon: 'ti-clock', title: 'Live in 2 weeks', desc: 'Not 2 months. We scope precisely, build fast, and get you results while competitors are still in meetings.' },
  { icon: 'ti-lock', title: 'Fixed price', desc: 'You know the cost before we start. No change orders, no retainers, no hidden fees.' },
  { icon: 'ti-shield-check', title: '30-day guarantee', desc: 'If you don\'t see measurable improvement in 30 days, we keep working at no extra charge.' },
]

const faqs = [
  { q: 'How quickly can you go live?', a: 'Most full systems go live within 2 weeks. Individual solutions (a WhatsApp bot, a booking system) can be live in 3–5 business days. We move fast because your revenue leak starts on day 1.' },
  { q: 'What if I don\'t see results?', a: 'We offer a 30-day results guarantee. If you don\'t see measurable improvement within 30 days of going live — whether that\'s more appointments, more conversions, or hours saved — we keep working at no extra charge until you do.' },
  { q: 'Do I need to be technical?', a: 'Not at all. We handle everything: scoping, building, integrating, and training your team. You just tell us the problem and we deliver the solution.' },
  { q: 'What tools do you use?', a: 'We use n8n, Make, Vapi (voice), Twilio (SMS), WhatsApp Business API, and custom integrations. We\'re tool-agnostic and choose what\'s best for your specific situation.' },
  { q: 'Who owns what we build?', a: 'You do. Upon full payment, all deliverables are 100% yours. No lock-in, no monthly fees to us. We retain the right to show it as a portfolio case study unless you prefer otherwise.' },
  { q: 'What\'s the investment?', a: 'Individual solutions start from ₹9,999. Full systems start from ₹50,000–₹1,00,000 (one-time). We\'ll give you an exact quote after a free audit call — no obligation.' },
]

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Ticker */}
      <div className="ticker-wrap">
        <div className="ticker-inner">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="ticker-item">
              <i className={`ti ${tickerIcons[i % tickerIcons.length]}`} />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Logo Strip */}
      <div className="logo-strip">
        <div className="logo-strip-inner">
          <p className="logo-strip-label">Trusted by businesses across India</p>
          <div className="logo-marquee-wrap">
            <div className="logo-marquee-track">
              {[...clients, ...clients].map((c, i) => (
                <div key={i} className="logo-pill">
                  <i className={`ti ${c.icon}`} />
                  {c.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="section" style={{ marginTop: '5rem' }}>
        <p className="sec-label">The problem</p>
        <h2 className="sec-h">You're doing everything right. But still losing.</h2>
        <p className="sec-sub">Most businesses lose revenue in the same three places.</p>
        <div className="leak-grid">
          {problems.map(p => (
            <div key={p.num} className="leak-card">
              <div className="leak-num">{p.num}</div>
              <div className="leak-title">{p.title}</div>
              <p className="leak-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Before / After */}
      <div className="section">
        <p className="sec-label">The transformation</p>
        <h2 className="sec-h">Before Depgrow vs After Depgrow</h2>
        <p className="sec-sub">This is what changes when your business runs on systems — not luck.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border)', marginTop: '1.5rem' }} className="ba-grid">
          <div style={{ background: '#1a0a0a', padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#7f1d1d', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>✕</div>
              <span style={{ fontSize: '16px', fontWeight: 700, color: '#f87171' }}>Before Depgrow</span>
            </div>
            {beforeItems.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}>
                <span style={{ color: '#ef4444', fontSize: '14px', marginTop: '2px', flexShrink: 0 }}>✕</span>
                <span style={{ fontSize: '14px', color: '#fca5a5' }}>{item}</span>
              </div>
            ))}
          </div>
          <div style={{ background: '#051a0f', padding: '2rem', borderLeft: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#14532d', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>✓</div>
              <span style={{ fontSize: '16px', fontWeight: 700, color: '#4ade80' }}>After Depgrow</span>
            </div>
            {afterItems.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}>
                <span style={{ color: '#22c55e', fontSize: '14px', marginTop: '2px', flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: '14px', color: '#86efac' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '12px', marginTop: '16px' }}>
          {[{ val: '60s', label: 'Average lead response time' }, { val: '40h', label: 'Saved per week per business' }, { val: '2×', label: 'Average conversion increase' }].map(s => (
            <div key={s.val} style={{ background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.25rem', textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--green)' }}>{s.val}</div>
              <div style={{ fontSize: '13px', color: 'var(--text-sec)' }}>{s.label}</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <Link href="/contact" className="btn-p">Get this transformation →</Link>
        </div>
      </div>

      {/* Testimonials */}
      <div className="section">
        <p className="sec-label">Client results</p>
        <h2 className="sec-h">Real businesses. Real numbers.</h2>
        <p className="sec-sub">Don't take our word for it — here's what our clients say.</p>
        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testi-card" style={{ position: 'relative' }}>
              {t.placeholder && (
                <span style={{ position: 'absolute', top: '12px', right: '12px', background: '#FEF3C7', color: '#92400E', fontSize: '10px', padding: '2px 8px', borderRadius: '20px', fontWeight: 600 }}>PLACEHOLDER</span>
              )}
              <div className="testi-stars">★★★★★</div>
              <p className="testi-quote">{t.quote}</p>
              <div className="testi-author">
                <div className="testi-avatar" style={{ background: t.bg }}>{t.initials}</div>
                <div><div className="testi-name">{t.name}</div><div className="testi-role">{t.role}</div></div>
              </div>
              <span className="testi-result">{t.result}</span>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <Link href="/case-studies" className="btn-s">View detailed case studies →</Link>
        </div>
      </div>

      {/* Systems */}
      <div className="section">
        <p className="sec-label">Revenue systems</p>
        <h2 className="sec-h">Three systems. Each solves one expensive problem.</h2>
        <p className="sec-sub">Fixed scope. Fixed price. Live in 2 weeks.</p>
        <div className="sys-grid">
          {systems.map((s, i) => (
            <div key={i} className={`sys-card${s.featured ? ' feat' : ''}`}>
              <div className="sys-tag">{s.tag}</div>
              <h3>{s.title}</h3>
              <p className="sys-desc">{s.desc}</p>
              <ul className="sys-feats">
                {s.features.map(f => <li key={f}><i className="ti ti-check" />{f}</li>)}
              </ul>
              <div className="sys-price">{s.price} <span>{s.priceNote}</span></div>
              <Link href="/systems" className={`exp-btn${s.featured ? ' f' : ''}`}>Explore →</Link>
            </div>
          ))}
        </div>
      </div>

      {/* Metrics */}
      <div className="metrics">
        <div className="metrics-inner">
          {[
            { val: '60s', label: 'Lead response time' },
            { val: '40h', label: 'Hours saved per week' },
            { val: '2×', label: 'Avg conversion increase' },
            { val: '100%', label: 'You own everything built' },
          ].map(m => (
            <div key={m.label} className="metric">
              <div className="metric-val">{m.val}</div>
              <div className="metric-lbl">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="section">
        <p className="sec-label">How it works</p>
        <h2 className="sec-h">From problem to live system in 2 weeks.</h2>
        <p className="sec-sub">A clear, simple process with no ambiguity.</p>
        <div className="proc-steps">
          {process.map(p => (
            <div key={p.num} className="proc-step">
              <div className="proc-num">{p.num}</div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ROI Calculator */}
      <ROICalculator />

      {/* Why Depgrow */}
      <div className="section">
        <p className="sec-label">Why us</p>
        <h2 className="sec-h">Why businesses choose Depgrow.</h2>
        <p className="sec-sub">There are many agencies. Here's what makes us different.</p>
        <div className="why-grid">
          {whyCards.map(w => (
            <div key={w.title} className="why-card">
              <i className={`ti ${w.icon}`} />
              <h4>{w.title}</h4>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Guarantee */}
      <div className="guarantee-strip">
        <div className="guarantee-inner">
          <div className="guarantee-badge">🛡️</div>
          <h2>30-Day Results Guarantee</h2>
          <p>If you don't see measurable improvement within 30 days of going live, we keep working at no extra charge until you do. No small print. No escape clauses.</p>
        </div>
      </div>

      {/* Solutions Teaser */}
      <div className="section">
        <p className="sec-label">Solutions</p>
        <h2 className="sec-h">19 pre-built solutions. Start with what hurts most.</h2>
        <p className="sec-sub">From individual automations to full systems. From ₹14,999.</p>
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <Link href="/solutions" className="btn-p">View all solutions →</Link>
        </div>
      </div>

      {/* FAQ */}
      <div className="section">
        <p className="sec-label">FAQ</p>
        <h2 className="sec-h">Common questions, answered.</h2>
        <div style={{ marginTop: '1.5rem' }}>
          {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
        </div>
      </div>

      {/* CTA Band */}
      <div className="cta-band">
        <h2>Ready to stop leaking revenue?</h2>
        <p>Book a free 30-minute audit call. We'll identify your exact revenue leak and show you exactly how to fix it — no obligation.</p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn-white">📞 Book free audit call</Link>
          <a className="btn-wa-cta" href="https://wa.me/918309553962?text=Hi%20Depgrow%2C%20I%27d%20like%20to%20know%20more" target="_blank" rel="noopener noreferrer">
            <i className="ti ti-brand-whatsapp" />WhatsApp us
          </a>
        </div>
        <p className="cta-note">No commitment. No pitch. Just clarity.</p>
      </div>
    </>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="faq-item" style={{ borderBottom: '1px solid var(--border)' }}>
      <summary className="faq-q" style={{ listStyle: 'none', cursor: 'pointer', padding: '1rem 0', fontSize: '15px', fontWeight: 500, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
        {q}
        <i className="ti ti-chevron-down" style={{ color: 'var(--text-sec)', fontSize: '16px', flexShrink: 0 }} />
      </summary>
      <p style={{ paddingBottom: '1rem', fontSize: '14px', color: 'var(--text-sec)', lineHeight: 1.7 }}>{a}</p>
    </details>
  )
}
