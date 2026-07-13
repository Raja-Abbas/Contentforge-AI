"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  PenTool,
  Mail,
  FileText,
  BarChart3,
  Share2,
  Megaphone,
  Sparkles,
} from "lucide-react";

const tools = [
  {
    title: "Blog Post Generator",
    description: "Generate SEO-optimized blog posts with engaging content and structured formatting.",
    icon: PenTool,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    badge: "Popular",
  },
  {
    title: "Email Drafter",
    description: "Craft professional email drafts with customizable tone and style.",
    icon: Mail,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    badge: null,
  },
  {
    title: "Content Summarizer",
    description: "Condense long-form content into concise, meaningful summaries.",
    icon: FileText,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    badge: null,
  },
  {
    title: "Content Analyzer",
    description: "Analyze content quality, readability, and SEO performance metrics.",
    icon: BarChart3,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    badge: null,
  },
  {
    title: "Social Media Post",
    description: "Create engaging social media posts tailored for each platform.",
    icon: Share2,
    color: "text-pink-500",
    bg: "bg-pink-500/10",
    badge: null,
  },
  {
    title: "Ad Copy Generator",
    description: "Write compelling ad copy that drives conversions and engagement.",
    icon: Megaphone,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    badge: null,
  },
];

export default function ToolsPage() {
  return (
    <div className="space-y-8">
        <div className="rounded-2xl bg-gradient-to-br from-violet-600 to-purple-700 p-8 text-white">
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="h-6 w-6" />
            <h1 className="text-2xl font-bold">AI Tools</h1>
          </div>
          <p className="text-violet-100 max-w-xl">
            Choose from our suite of AI-powered tools to create, analyze, and optimize your content.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Card key={tool.title} className="rounded-xl border-border/50 transition-all hover:shadow-lg hover:border-violet-500/30">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${tool.bg}`}>
                      <Icon className={`h-6 w-6 ${tool.color}`} />
                    </div>
                    {tool.badge && (
                      <Badge variant="secondary" className="bg-violet-500/10 text-violet-400">
                        {tool.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg mt-4">{tool.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>
                  <Button className="w-full rounded-xl bg-violet-600 hover:bg-violet-700 text-white">
                    Launch
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
  );
}
