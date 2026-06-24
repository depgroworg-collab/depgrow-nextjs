'use client'
import { useState } from 'react'
import Link from 'next/link'

const Logo = () => (
  <svg width="24" height="24" viewBox="0 0 22 22" fill="none">
    <path d="M4 16 C4 16 7 6 11 6 C15 6 18 16 18 16" stroke="#0E7A5A" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M8 11 C8 11 9.5 14 11 14 C12.5 14 14 11 14 11" stroke="#16A97D" strokeWidth="1.6" strokeLinecap="round"/>
    <circle cx="11" cy="6" r="1.8" fill="#0E7A5A"/>
  </svg>
)

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Systems', href: '/systems' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav id="main-nav">
        <Link href="/" className="nav-brand">
          <Logo />
          <span><span className="dep">Dep</span><span className="grow">grow</span></span>
        </Link>
        <div className="nav-links">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} className="nav-btn">{l.label}</Link>
          ))}
        </div>
        <Link href="/contact" className="nav-cta">Book a call</Link>
        <button
          className={`hamburger${open ? ' open' : ''}`}
          id="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {navLinks.map(l => (
          <Link key={l.href} href={l.href} className="mobile-menu-btn" onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
        <Link href="/contact" className="mobile-cta" onClick={() => setOpen(false)}>📞 Book Free Call</Link>
      </div>
    </>
  )
}
