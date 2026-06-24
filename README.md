# Depgrow — Next.js Website

## 🚀 Local Setup

```bash
npm install
cp .env.local.example .env.local
# Fill in your API keys in .env.local
npm run dev
```

Open http://localhost:3000

## 📦 Deploy to Vercel

1. Push this folder to a **GitHub repo**
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Add environment variables in Vercel dashboard:
   - `ANTHROPIC_API_KEY`
   - `VAPI_API_KEY`
   - `VAPI_ASSISTANT_ID`
   - `RESEND_API_KEY`
4. Click **Deploy** ✅

## 🗂️ Project Structure

```
src/
├── app/
│   ├── layout.tsx        ← SEO metadata, global imports
│   ├── template.tsx      ← Navbar + Footer + ChatWidget wrapper
│   ├── page.tsx          ← Home page
│   ├── systems/          ← Systems page
│   ├── solutions/        ← Solutions catalogue (filterable)
│   ├── case-studies/     ← Case studies
│   ├── about/            ← About page
│   ├── founder/          ← Founder page
│   ├── contact/          ← Contact + Calendly + Form
│   ├── privacy/          ← Privacy policy
│   ├── terms/            ← Terms of service
│   ├── refund/           ← Refund policy
│   └── api/
│       ├── chat/         ← Claude chat API
│       ├── call/         ← Vapi outbound call API
│       └── email/        ← Resend email API
├── components/
│   ├── Navbar.tsx        ← Sticky nav + mobile menu
│   ├── Footer.tsx        ← Footer with links
│   ├── Hero.tsx          ← Hero with particles + 3D stage
│   ├── ROICalculator.tsx ← Interactive ROI sliders
│   └── ChatWidget.tsx    ← AI chat + WhatsApp FAB
└── styles/
    └── globals.css       ← All styles
```

## ✅ Custom Domain

In Vercel dashboard → Settings → Domains → Add `depgrow.in`

Update DNS records as instructed by Vercel (usually 2 CNAME records).
