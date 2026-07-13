import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Wand2,
  PenTool,
  Mail,
  FileText,
  BarChart3,
  Zap,
  Shield,
  Globe,
  ArrowRight,
  Star,
  Sparkles,
  Cpu,
} from "lucide-react";

const features = [
  {
    icon: Wand2,
    title: "Multi-Provider AI",
    description: "Switch between OpenAI, Gemini, and Claude with a unified interface and smart fallbacks.",
  },
  {
    icon: PenTool,
    title: "Content Generation",
    description: "Generate blog posts, articles, product descriptions, and social media content.",
  },
  {
    icon: Mail,
    title: "Email Drafting",
    description: "Professional email templates with tone control and context-aware generation.",
  },
  {
    icon: FileText,
    title: "Summarization",
    description: "Condense long documents, articles, and reports into concise summaries.",
  },
  {
    icon: BarChart3,
    title: "Content Analysis",
    description: "Score and analyze content for readability, SEO, tone, and engagement potential.",
  },
  {
    icon: Zap,
    title: "Streaming Responses",
    description: "Real-time streaming output with token-by-token rendering for instant feedback.",
  },
];

const providers = [
  { name: "OpenAI", model: "GPT-4o, GPT-4o-mini" },
  { name: "Google Gemini", model: "Gemini 2.0 Flash, Pro" },
  { name: "Anthropic Claude", model: "Claude 3.5 Sonnet, Haiku" },
  { name: "Mock Mode", model: "Free demo fallback" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b bg-background/80 glass">
        <div className="mx-auto max-w-6xl flex items-center justify-between h-16 px-6">
          <Logo size="sm" />
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" size="sm">Sign in</Button>
            </Link>
            <Link href="/register">
              <Button size="sm" className="rounded-xl">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden noise-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-purple-500/5" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 lg:py-32 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 dark:bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-700 dark:text-violet-400 mb-6">
            <Star className="h-3.5 w-3.5" />
            Powered by multi-provider AI
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 max-w-3xl mx-auto">
            AI workspace for<br />
            <span className="gradient-text">content &amp; automation</span>
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Generate blog posts, marketing copy, emails, and summaries with OpenAI, Gemini, and Claude — all in one workspace.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/register">
              <Button size="lg" className="rounded-xl text-base px-8 gap-2">
                Start for free <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline" size="lg" className="rounded-xl text-base px-8">
                View Demo
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-8 mt-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" /> Multi-provider
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" /> Streaming output
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="h-4 w-4" /> Mock fallback
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 border-t">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              Everything you need to create with AI
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              A complete AI content workspace designed for marketers, writers, and teams.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="hover:card-shadow-hover transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="rounded-xl bg-violet-100 dark:bg-violet-500/10 p-3 w-fit mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Providers */}
      <section className="py-24 border-t bg-muted/30 noise-bg">
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              Multi-provider AI support
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Connect your preferred AI provider or use the built-in mock mode for demos.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {providers.map((p) => (
              <Card key={p.name}>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-lg mb-1">{p.name}</h3>
                  <p className="text-sm text-muted-foreground">{p.model}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-24 border-t">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { value: "10K+", label: "Content pieces" },
              { value: "3", label: "AI providers" },
              { value: "<2s", label: "First token" },
              { value: "99.9%", label: "Uptime" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-violet-600 dark:text-violet-400">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
          <blockquote className="max-w-2xl mx-auto">
            <p className="text-xl text-muted-foreground italic leading-relaxed">
              &ldquo;ContentForge AI cut our content production time by 70%. The multi-provider support means we never have downtime.&rdquo;
            </p>
            <footer className="mt-4">
              <p className="font-semibold">Alex Rivera</p>
              <p className="text-sm text-muted-foreground">Head of Marketing, TechCo</p>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            Ready to automate your content?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Start generating AI-powered content in minutes. Free tier included.
          </p>
          <Link href="/register">
            <Button size="lg" className="rounded-xl text-base px-8 gap-2">
              Get started for free <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo size="sm" showText={false} />
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ContentForge AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
