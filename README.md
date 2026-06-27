# Mosanna Tahsin - Cybersecurity Portfolio & Business Platform

A premium, full-stack personal brand website for Mosanna Tahsin — Cybersecurity Consultant, Ethical Hacker, Security Researcher, Bug Bounty Hunter, and Educator.

## 🚀 Features

### Frontend (10 Pages)
- **Home** — Hero, Stats, Trust, Expertise, Portfolio, Services, Courses, Testimonials, Blog, Contact CTA
- **About** — Mission, Vision, Values, Career Timeline
- **Portfolio** — Filterable security projects with tech stacks
- **Achievements** — Bug Bounty, Certifications, Awards, Competitions
- **Services** — 6 detailed service offerings with pricing
- **Consulting** — Booking packages with scheduling UI
- **Courses** — Course catalog with search/filter
- **Blog** — Security articles with categories
- **Resume** — Professional CV with download
- **Contact** — Contact form + info cards

### Backend
- **Authentication** — NextAuth v5 with Credentials, Google, GitHub
- **Database** — PostgreSQL with Prisma ORM
- **API Routes** — Contact, Courses, Bookings, Auth
- **Middleware** — Role-based access control
- **Security** — CSP headers, XSS protection, CSRF protection

### Dashboards
- **Student Dashboard** — Course progress, certificates
- **Client Dashboard** — Bookings, invoices, reports
- **Admin Dashboard** — Users, courses, bookings, analytics

### Payment (Ready for integration)
- Stripe setup for course purchases
- Stripe setup for consultation bookings
- Transaction history

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI | Framer Motion, Lucide Icons |
| Auth | NextAuth v5 / Auth.js |
| Database | PostgreSQL |
| ORM | Prisma |
| Payments | Stripe (ready) |
| Email | Resend (ready) |

## 📦 Installation

### Prerequisites
- Node.js 18+
- PostgreSQL database

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/mosanna-tahsin.git
cd mosanna-tahsin

# 2. Install dependencies
npm install

# 3. Setup environment variables
cp .env.example .env.local
# Edit .env.local with your values

# 4. Setup database
npx prisma generate
npx prisma db push
npx prisma db seed

# 5. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🔐 Environment Variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `NEXTAUTH_URL` | Your app URL |
| `NEXTAUTH_SECRET` | Random secret for JWT |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret |
| `GITHUB_CLIENT_ID` | GitHub OAuth client ID |
| `GITHUB_CLIENT_SECRET` | GitHub OAuth client secret |
| `STRIPE_SECRET_KEY` | Stripe secret key |
| `STRIPE_PUBLISHABLE_KEY` | Stripe publishable key |
| `RESEND_API_KEY` | Resend email API key |

## 📁 Project Structure

```
mosanna-tahsin/
├── app/
│   ├── (main)/           # Public pages
│   │   ├── page.tsx        # Home
│   │   ├── about/
│   │   ├── portfolio/
│   │   ├── achievements/
│   │   ├── services/
│   │   ├── consulting/
│   │   ├── courses/
│   │   ├── blog/
│   │   ├── resume/
│   │   └── contact/
│   ├── (dashboard)/      # Protected dashboards
│   │   └── dashboard/
│   │       ├── client/
│   │       ├── student/
│   │       └── admin/
│   ├── api/              # API routes
│   │   ├── auth/
│   │   ├── contact/
│   │   ├── courses/
│   │   └── bookings/
│   ├── auth/             # Auth pages
│   │   ├── login/
│   │   ├── signup/
│   │   ├── forgot-password/
│   │   └── error/
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/               # Reusable UI
│   ├── sections/         # Page sections
│   └── shared/           # Navbar, Footer
├── lib/
│   ├── utils.ts
│   ├── prisma.ts
│   └── auth.ts
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
├── types/
│   ├── index.ts
│   └── next-auth.d.ts
├── middleware.ts
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel --prod
```

### Self-hosted
```bash
npm run build
npm start
```

## 📝 License

Private — All rights reserved by Mosanna Tahsin.

---

Built with ❤️ for Mosanna Tahsin
