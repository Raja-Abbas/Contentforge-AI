# ContentForge AI — AI Business Automation & Content Workspace

> **Status:** MVP 1 — Feature-complete prototype. All core features implemented and working. Login removed for public testing — all pages freely accessible.

> AI-powered workspace for content generation, summarization, email drafting, and business automation with multi-provider support.

**Live Demo:** [contentforge-ai-next.netlify.app](https://contentforge-ai-next.netlify.app)

> **Note:** Authentication has been removed for this MVP to allow free access to all features. No login or signup required.

---

## What It Does

ContentForge AI is a SaaS platform that connects to multiple AI providers (OpenAI, Gemini, Claude) through a unified interface, offering specialized tools for content creation, summarization, email drafting, and analysis. It features prompt templates, generation history, usage tracking, and a mock mode for demos.

## Key Features

- **Multi-Provider AI** — Switch between OpenAI, Gemini, and Claude with automatic fallback
- **6 AI Tools** — Blog Post Generator, Email Drafter, Content Summarizer, Content Analyzer, Social Media Post, Ad Copy Generator
- **Prompt Templates** — Reusable templates with variable interpolation (`{{topic}}`, `{{audience}}`)
- **Generation History** — Track all AI outputs with token usage and duration metrics
- **Usage Analytics** — Monitor API consumption, provider breakdown, and cost tracking
- **API Key Management** — Store and configure provider keys per workspace
- **Multi-Tenant Workspaces** — Workspace isolation with role-based membership
- **Mock Mode** — Full demo without API keys using simulated AI responses
- **Split-Screen Auth** — Premium login/register with branded gradient panel
- **Collapsible Sidebar** — Responsive navigation with mobile sheet overlay

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Database | SQLite + Prisma 7 (`@prisma/adapter-libsql`) |
| Auth | NextAuth.js v5 (JWT + credentials) |
| Styling | Tailwind CSS v4 + custom violet/purple design system |
| Icons | Lucide React |
| Fonts | Plus Jakarta Sans + IBM Plex Mono |
| Notifications | react-hot-toast |
| Validation | Zod |
| Charts | Recharts |
| Markdown | React Markdown + remark-gfm |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/contentforge-ai.git
cd contentforge-ai

# Install dependencies
npm install

# Set up environment
cp .env.example .env

# Push database schema
npx prisma db push

# Generate Prisma client
npx prisma generate

# Seed demo data
npx tsx prisma/seed.ts

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | Yes | SQLite file path (default: `file:prisma/dev.db`) |
| `AUTH_SECRET` | Yes | Random string for NextAuth JWT signing |
| `NEXTAUTH_URL` | Yes | App URL (e.g., `http://localhost:3000`) |
| `OPENAI_API_KEY` | No | OpenAI API key (falls back to mock mode) |
| `GEMINI_API_KEY` | No | Google Gemini API key (falls back to mock mode) |
| `ANTHROPIC_API_KEY` | No | Anthropic Claude API key (falls back to mock mode) |

## Project Structure

```
contentforge-ai/
├── prisma/
│   ├── schema.prisma        # Database schema (8 models)
│   ├── seed.ts              # Demo data seeder
│   └── dev.db               # SQLite database
├── src/
│   ├── app/
│   │   ├── (auth)/          # Login, Register, Auth Error
│   │   ├── (dashboard)/     # Dashboard, Tools, Templates, History, Usage, Settings
│   │   ├── api/             # REST API (auth, register)
│   │   ├── privacy/         # Privacy policy
│   │   ├── terms/           # Terms of service
│   │   └── contact/         # Contact page
│   ├── components/
│   │   ├── ui/              # 8 shadcn/ui components
│   │   └── layout/          # Sidebar, Header, Dashboard Layout
│   └── lib/
│       ├── auth.ts          # NextAuth v5 configuration
│       ├── prisma.ts        # Prisma client (LibSQL adapter)
│       └── utils.ts         # Shared utilities
├── public/
│   ├── favicon.svg          # Violet gradient logo
│   └── og-image.svg         # Social share card
├── netlify.toml             # Netlify build config
├── .env.example             # Environment template
└── package.json
```

## Database Schema

- **User** — Auth credentials, profile
- **Workspace** — Multi-tenant container
- **WorkspaceMember** — User-workspace association with roles (OWNER, ADMIN, MEMBER)
- **Tool** — AI tool configuration (name, category, config)
- **PromptTemplate** — Reusable prompts with variable slots
- **Generation** — Saved AI outputs with provider, tokens, duration
- **UsageRecord** — API usage tracking per provider/model
- **APIKeyConfig** — Encrypted provider API key storage

## Design System

- **Primary:** Violet `#7c3aed` (light) / `#a78bfa` (dark)
- **Dark Mode:** Deep purple `#0f0720` with violet-tinted surfaces
- **Effects:** Noise texture overlay, glass morphism, gradient text, card shadows
- **Typography:** Plus Jakarta Sans (headings) + IBM Plex Mono (code)
- **Components:** `rounded-xl/2xl`, scale micro-interactions, translucent badge fills

## Roadmap

- [x] M1 — Foundation, schema, auth, layout
- [ ] M2 — AI provider abstraction layer
- [ ] M3 — Chat interface with streaming
- [ ] M4 — AI tools (summarize, generate, email, analyze)
- [ ] M5 — Prompt templates, saved generations, history
- [ ] M6 — Dashboard, usage tracking, settings
- [ ] M7 — Polish, README, build

## License

MIT
