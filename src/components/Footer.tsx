import Link from 'next/link'

const Logo = () => (
  <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
    <path d="M4 16 C4 16 7 6 11 6 C15 6 18 16 18 16" stroke="#1aff9c" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M8 11 C8 11 9.5 14 11 14 C12.5 14 14 11 14 11" stroke="#3fd0ff" strokeWidth="1.6" strokeLinecap="round"/>
    <circle cx="11" cy="6" r="1.8" fill="#1aff9c"/>
  </svg>
)

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-brand">
            <Logo />
            <span style={{color:'#fff'}}><span style={{color:'#1aff9c'}}>Dep</span><span style={{color:'#3fd0ff'}}>grow</span></span>
          </div>
          <p className="footer-tagline">AI automations, voice agents &amp; web systems engineered around your outcomes.</p>
          <div className="footer-social">
            <a href="https://www.instagram.com/depgrow" target="_blank" rel="noopener noreferrer"><i className="ti ti-brand-instagram" /></a>
            <a href="https://www.linkedin.com/in/valluri-satyannarayana-247463418" target="_blank" rel="noopener noreferrer"><i className="ti ti-brand-linkedin" /></a>
            <a href="https://wa.me/918309553962" target="_blank" rel="noopener noreferrer"><i className="ti ti-brand-whatsapp" /></a>
          </div>
        </div>
        <div>
          <div className="footer-col-title">Services</div>
          <ul className="footer-col-links">
            <li><Link href="/systems">Revenue Systems</Link></li>
            <li><Link href="/solutions">All Solutions</Link></li>
            <li><Link href="/case-studies">Case Studies</Link></li>
            <li><Link href="/contact">Free Audit</Link></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Company</div>
          <ul className="footer-col-links">
            <li><Link href="/about">About us</Link></li>
            <li><Link href="/founder">Our founder</Link></li>
            <li><a href="https://wa.me/918309553962" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Legal</div>
          <ul className="footer-col-links">
            <li><Link href="/privacy">Privacy policy</Link></li>
            <li><Link href="/terms">Terms of service</Link></li>
            <li><Link href="/refund">Refund policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">© 2026 Depgrow. All rights reserved. Hyderabad, India.</div>
        <div className="footer-legal">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/refund">Refund</Link>
        </div>
      </div>
    </footer>
  )
}
