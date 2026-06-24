import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Founder | Depgrow' }

export default function FounderPage() {
  return (
    <div className="inner-page" style={{ maxWidth: '760px' }}>
      <div className="founder-section">
        <div className="founder-inner">
          <div className="founder-avatar">V</div>
          <div>
            <div className="founder-name">Valluri Satyannarayana</div>
            <div className="founder-title">Founder &amp; CEO, Depgrow</div>
            <p className="founder-bio">
              I started Depgrow after watching too many great businesses fail — not because of bad products or bad people, but because of broken systems. Leads going cold. Hours wasted on manual work. Websites that looked good but converted nobody.
              <br /><br />
              I spent 4 years building automations and AI systems for businesses across India. The same problems kept showing up. So I built Depgrow to fix them — systematically, affordably, and fast.
              <br /><br />
              Every business deserves systems that actually grow with them. That&apos;s what we build.
            </p>
            <div className="founder-badges">
              {[
                { icon: 'ti-calendar', text: '4+ years experience' },
                { icon: 'ti-building', text: '20+ businesses automated' },
                { icon: 'ti-map-pin', text: 'Hyderabad, India' },
                { icon: 'ti-brand-whatsapp', text: 'Directly reachable' },
              ].map(b => (
                <span key={b.text} className="founder-badge">
                  <i className={`ti ${b.icon}`} />{b.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <p style={{ fontSize: '15px', color: 'var(--text-sec)', marginBottom: '1rem' }}>I&apos;m directly reachable on WhatsApp.</p>
        <a className="btn-wa-cta" href="https://wa.me/918309553962?text=Hi%20Valluri%2C%20I%27d%20like%20to%20chat%20about%20Depgrow" target="_blank" rel="noopener noreferrer">
          <i className="ti ti-brand-whatsapp" />Message me directly
        </a>
      </div>
    </div>
  )
}
