import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Depgrow | AI Automation Agency Hyderabad — Voice Agents, WhatsApp Bots, Lead Systems',
  description: 'Depgrow builds AI automations, voice agents, and WhatsApp bots for Indian businesses. Save 40+ hours/week, respond to leads in 60 seconds. Live in 2 weeks. Book a free strategy call.',
  keywords: 'AI automation agency Hyderabad, WhatsApp bot India, voice agent India, lead automation, CRM automation, AI agency India, business automation Hyderabad, AI systems SMB India',
  authors: [{ name: 'Valluri Satyannarayana' }],
  robots: 'index, follow',
  metadataBase: new URL('https://depgrow.in'),
  alternates: { canonical: 'https://depgrow.in/' },
  openGraph: {
    type: 'website',
    url: 'https://depgrow.in/',
    title: 'Depgrow | AI Automation Agency — Hyderabad, India',
    description: 'AI automations, voice agents & WhatsApp bots for Indian SMBs. Save 40+ hours/week. Live in 2 weeks. Book a free strategy call.',
    images: [{ url: '/og-image.png' }],
    siteName: 'Depgrow',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Depgrow | AI Automation Agency — Hyderabad, India',
    description: 'AI automations, voice agents & WhatsApp bots for Indian SMBs. Save 40+ hours/week. Live in 2 weeks.',
    images: ['/og-image.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Depgrow',
  description: 'AI automation agency building voice agents, WhatsApp bots, and lead systems for Indian SMBs.',
  url: 'https://depgrow.in',
  telephone: '+918309553962',
  email: 'hello@depgrow.in',
  founder: { '@type': 'Person', name: 'Valluri Satyannarayana' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    addressCountry: 'IN',
  },
  areaServed: 'India',
  serviceType: ['AI Automation', 'Voice Agent', 'WhatsApp Bot', 'Lead Generation System', 'CRM Automation'],
  priceRange: '₹₹',
  sameAs: [
    'https://www.instagram.com/depgrow',
    'https://www.linkedin.com/in/valluri-satyannarayana-247463418',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
