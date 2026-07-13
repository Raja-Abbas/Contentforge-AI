import type { Metadata } from "next";
import { Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ContentForge AI — AI Business Automation & Content Workspace",
    template: "%s | ContentForge AI",
  },
  description:
    "AI-powered workspace for content generation, summarization, email drafting, and business automation with multi-provider support.",
  keywords: [
    "AI",
    "content generation",
    "business automation",
    "copywriting",
    "OpenAI",
    "Gemini",
    "Claude",
    "SaaS",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "ContentForge AI" }],
  creator: "ContentForge AI",
  metadataBase: new URL("https://contentforge-ai.netlify.app"),
  openGraph: {
    title: "ContentForge AI — AI Content Workspace",
    description:
      "AI-powered workspace for content generation, summarization, email drafting, and business automation.",
    url: "https://contentforge-ai.netlify.app",
    siteName: "ContentForge AI",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ContentForge AI — AI Content Workspace",
    description:
      "AI-powered workspace for content generation, summarization, and business automation.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${ibmPlexMono.variable} h-full`}
    >
      <body className="min-h-full antialiased">
        <Providers>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                borderRadius: "12px",
                background: "var(--card)",
                color: "var(--card-foreground)",
                border: "1px solid var(--border)",
                fontSize: "14px",
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
