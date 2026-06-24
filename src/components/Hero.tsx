'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Particles
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let w: number, h: number
    let particles: { x: number; y: number; r: number; vx: number; vy: number; a: number; hue: string }[] = []
    let animId: number

    function resize() {
      const host = canvas!.parentElement!
      w = canvas!.width = host.offsetWidth
      h = canvas!.height = host.offsetHeight
    }
    function init() {
      particles = []
      for (let i = 0; i < 46; i++) {
        particles.push({
          x: Math.random() * w, y: Math.random() * h,
          r: Math.random() * 1.5 + 0.4,
          vx: (Math.random() - 0.5) * 0.1, vy: (Math.random() - 0.5) * 0.1,
          a: Math.random() * 0.45 + 0.12,
          hue: Math.random() > 0.5 ? '26,255,156' : '63,208,255',
        })
      }
    }
    function tick() {
      if (w && h) {
        ctx.clearRect(0, 0, w, h)
        for (const p of particles) {
          p.x += p.vx; p.y += p.vy
          if (p.x < 0) p.x = w; if (p.x > w) p.x = 0
          if (p.y < 0) p.y = h; if (p.y > h) p.y = 0
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${p.hue},${p.a})`
          ctx.fill()
        }
      }
      animId = requestAnimationFrame(tick)
    }
    window.addEventListener('resize', () => { resize(); init() })
    resize(); init(); tick()

    // 3D tilt
    const stage = stageRef.current
    const inner = innerRef.current
    const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let mx = window.innerWidth / 2, my = window.innerHeight / 2
    let cx = mx, cy = my
    let rafId: number

    if (stage && inner && !rm) {
      const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }
      window.addEventListener('mousemove', onMove)
      const raf = () => {
        cx += (mx - cx) * 0.08; cy += (my - cy) * 0.08
        const rect = stage!.getBoundingClientRect()
        const rx = (cx - (rect.left + rect.width / 2)) / rect.width
        const ry = (cy - (rect.top + rect.height / 2)) / rect.height
        const cl = (v: number) => Math.max(-1, Math.min(1, v))
        inner!.style.transform = `rotateY(${cl(rx) * 4}deg) rotateX(${-cl(ry) * 4}deg) translate(${cl(rx) * 5}px,${cl(ry) * 5}px)`
        rafId = requestAnimationFrame(raf)
      }
      raf()
      return () => {
        window.removeEventListener('mousemove', onMove)
        cancelAnimationFrame(animId)
        cancelAnimationFrame(rafId)
        window.removeEventListener('resize', () => {})
      }
    }
    return () => { cancelAnimationFrame(animId) }
  }, [])

  return (
    <section className="hero2">
      <canvas id="particles2" ref={canvasRef} />
      <div className="hero2-grid">
        <div>
          <div className="hero2-eyebrow"><span className="dot" />SYSTEMS THAT OUTGROW</div>
          <h1 className="hero2-h1">
            Your business is <span className="leak">leaking revenue.</span><br />We grow it deeper.
          </h1>
          <p className="hero2-sub">AI automations, voice agents, and web systems — engineered around your outcomes, not our deliverables.</p>
          <div className="hero2-actions">
            <Link href="/contact" className="hero2-btn-p">📞 Book free strategy call</Link>
            <Link href="/systems" className="hero2-btn-s">Explore systems →</Link>
          </div>
          <div className="hero2-trust">
            <span className="hero2-trust-item"><i className="ti ti-shield-check" />30-day results guaranteed</span>
            <span className="hero2-trust-item"><i className="ti ti-clock" />Live in 2 weeks</span>
            <span className="hero2-trust-item"><i className="ti ti-lock" />Fixed price</span>
          </div>
        </div>
        <div className="stage2" ref={stageRef}>
          <div className="guide-ring2" style={{ width: '80%', height: '80%' }} />
          <div className="guide-ring2" style={{ width: '110%', height: '110%' }} />
          <svg className="connections2" viewBox="0 0 480 460" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1aff9c" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#3fd0ff" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <path className="conn-line2" d="M 70 52 L 240 230" />
            <path className="conn-line2" d="M 410 52 L 240 230" />
            <path className="conn-line2" d="M 32 230 L 240 230" />
            <path className="conn-line2" d="M 448 230 L 240 230" />
            <path className="conn-line2" d="M 240 368 L 240 230" />
          </svg>
          <div className="stage2-inner" ref={innerRef}>
            <div className="hub2">
              <div className="hub2-ring r1" /><div className="hub2-ring r2" /><div className="hub2-ring r3" />
              <div className="hub2-core">
                <h2>YOUR<span>BUSINESS</span></h2>
                <p>Deep Growth.</p>
              </div>
            </div>
            <div className="chip2">DEEP SYSTEMS. <span>REAL GROWTH.</span></div>
            {[
              { cls: 'n2-leads', label: 'Leads', delay: '0s', icon: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>, extra: <><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></> },
              { cls: 'n2-followup', label: 'Follow-Up', delay: '0.8s', icon: <><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></> },
              { cls: 'n2-bookings', label: 'Bookings', delay: '1.6s', icon: <><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></> },
              { cls: 'n2-calls', label: '24/7 Calls', delay: '3.2s', icon: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/> },
            ].map(node => (
              <div key={node.cls} className={`node2 node2-float ${node.cls}`} style={{ animationDelay: node.delay }}>
                <div className="node2-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {node.icon}{node.extra}
                  </svg>
                </div>
                <div className="node2-label">{node.label}</div>
              </div>
            ))}
            {/* WhatsApp node separately (fill not stroke) */}
            <div className="node2 node2-float n2-whatsapp" style={{ animationDelay: '2.4s' }}>
              <div className="node2-circle">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.51 2 12.04 2zm0 18.13h-.01c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.36c0-4.53 3.69-8.22 8.27-8.22 2.21 0 4.28.86 5.84 2.42a8.2 8.2 0 0 1 2.42 5.83c0 4.53-3.7 8.19-8.27 8.19zm4.52-6.15c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.99-1.22-.73-.66-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.16-.25.25-.42c.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08 0 1.23.89 2.41 1.02 2.58.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29z"/>
                </svg>
              </div>
              <div className="node2-label">WhatsApp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
