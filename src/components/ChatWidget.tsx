'use client'
import { useState, useRef, useEffect } from 'react'

interface Message { role: 'bot' | 'user' | 'typing'; text: string }

const quickQuestions = [
  { label: 'Services', text: 'What services do you offer?' },
  { label: 'Pricing', text: 'How much does it cost?' },
  { label: 'Timeline', text: 'How fast can you go live?' },
  { label: 'Guarantee', text: 'Do you offer a guarantee?' },
]

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [showQuick, setShowQuick] = useState(true)
  const [opened, setOpened] = useState(false)
  const msgsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (msgsRef.current) msgsRef.current.scrollTop = msgsRef.current.scrollHeight
  }, [msgs])

  const openChat = () => {
    setOpen(true)
    if (!opened) {
      setOpened(true)
      setTimeout(() => {
        setMsgs([{ role: 'bot', text: "👋 Hi! I'm Depgrow's AI assistant.\n\nI can answer questions about our services, pricing, timeline, and guarantee. What would you like to know?" }])
      }, 300)
    }
  }

  const addMsg = (role: 'bot' | 'user' | 'typing', text: string) => {
    setMsgs(prev => [...prev, { role, text }])
  }

  const send = async (text: string) => {
    if (!text.trim() || loading) return
    setShowQuick(false)
    addMsg('user', text)
    setInput('')
    setLoading(true)
    addMsg('typing', 'Typing…')

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      })
      const data = await res.json()
      setMsgs(prev => prev.filter(m => m.role !== 'typing'))
      if (data.content?.[0]?.text) {
        addMsg('bot', data.content[0].text)
      } else {
        addMsg('bot', 'Sorry, something went wrong. Please try again or book a call directly!')
      }
    } catch {
      setMsgs(prev => prev.filter(m => m.role !== 'typing'))
      addMsg('bot', 'Connection error. Please WhatsApp us or book a free call!')
    }
    setLoading(false)
  }

  return (
    <>
      {/* WhatsApp FAB */}
      <a
        className="wa-fab"
        href="https://wa.me/918309553962?text=Hi%20Depgrow%2C%20I%27d%20like%20to%20know%20more"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        style={{
          position: 'fixed', bottom: '96px', right: '28px', zIndex: 999,
          width: '48px', height: '48px', borderRadius: '50%',
          background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(37,211,102,0.4)', textDecoration: 'none',
        }}
      >
        <i className="ti ti-brand-whatsapp" style={{ fontSize: '22px', color: '#fff' }} />
      </a>

      {/* Chat FAB */}
      <button
        onClick={() => open ? setOpen(false) : openChat()}
        title="Chat with us"
        style={{
          position: 'fixed', bottom: '28px', right: '28px', zIndex: 999,
          width: '54px', height: '54px', borderRadius: '50%',
          background: 'var(--green)', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 6px 24px rgba(14,122,90,0.45)',
        }}
      >
        <i className={`ti ${open ? 'ti-x' : 'ti-message-circle'}`} style={{ fontSize: '22px', color: '#fff' }} />
        {!open && !opened && (
          <span style={{
            position: 'absolute', top: 0, right: 0, width: '16px', height: '16px',
            borderRadius: '50%', background: '#EF4444', border: '2px solid #fff',
          }} />
        )}
      </button>

      {/* Chat Window */}
      {open && (
        <div style={{
          position: 'fixed', bottom: '94px', right: '28px', zIndex: 998,
          width: '340px', background: '#fff', border: '1px solid var(--border)',
          borderRadius: '16px', boxShadow: '0 16px 48px rgba(0,0,0,0.14)',
          display: 'flex', flexDirection: 'column', overflow: 'hidden',
        }}>
          {/* Header */}
          <div style={{ background: 'var(--green)', padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>🤖</div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>Depgrow AI</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.75)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#1aff9c', display: 'inline-block' }} />
                Ask me anything · Always online
              </div>
            </div>
          </div>

          {/* Messages */}
          <div ref={msgsRef} className="chat-msgs">
            {msgs.map((m, i) => (
              <div key={i} className={`msg ${m.role}`}>{m.text}</div>
            ))}
          </div>

          {/* Quick Buttons */}
          {showQuick && opened && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '0 1rem 0.5rem' }}>
              {quickQuestions.map(q => (
                <button key={q.label} className="quick-btn" onClick={() => send(q.text)}>{q.label}</button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="chat-input-row">
            <input
              type="text"
              placeholder="Ask about services, pricing, timeline…"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send(input)}
            />
            <button className="chat-send" onClick={() => send(input)}>
              <i className="ti ti-send" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
