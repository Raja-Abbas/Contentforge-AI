"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Wand2,
  FileText,
  History,
  Zap,
  TrendingUp,
  ArrowRight,
  Sparkles,
  PenTool,
  Mail,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

const quickActions = [
  { icon: PenTool, label: "Blog Post", description: "Generate SEO blog content", color: "bg-violet-100 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400" },
  { icon: Mail, label: "Email Draft", description: "Professional email writer", color: "bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400" },
  { icon: FileText, label: "Summarize", description: "Condense long content", color: "bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" },
  { icon: BarChart3, label: "Analyze", description: "Content analysis & scoring", color: "bg-amber-100 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400" },
];

const stats = [
  { label: "Generations", value: "0", icon: Wand2, change: "Start creating" },
  { label: "Templates", value: "0", icon: FileText, change: "Browse library" },
  { label: "Tokens Used", value: "0", icon: Zap, change: "Mock mode" },
  { label: "This Week", value: "0", icon: TrendingUp, change: "No data yet" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
        {/* Welcome */}
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Welcome to ContentForge AI</h1>
          <p className="text-muted-foreground mt-1">
            Generate content, automate workflows, and boost productivity with AI.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold mt-1">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                  </div>
                  <div className="rounded-xl bg-violet-100 dark:bg-violet-500/10 p-3">
                    <stat.icon className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Quick Actions</h2>
            <Link href="/tools">
              <Button variant="ghost" size="sm" className="gap-1">
                All Tools <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action) => (
              <Card key={action.label} className="hover:card-shadow-hover transition-all duration-300 cursor-pointer group">
                <CardContent className="p-5">
                  <div className={`rounded-xl ${action.color} p-3 w-fit mb-3 group-hover:scale-110 transition-transform`}>
                    <action.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-sm">{action.label}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{action.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Getting Started */}
        <Card className="border-violet-500/20 bg-gradient-to-br from-violet-500/5 to-transparent">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-violet-100 dark:bg-violet-500/10 p-3 shrink-0">
                <Sparkles className="h-6 w-6 text-violet-600 dark:text-violet-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Getting Started with ContentForge AI</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  This demo runs in <Badge variant="secondary" className="mx-1">mock mode</Badge> — all AI features work with simulated responses.
                  To use real AI providers, add your API keys in Settings.
                </p>
                <div className="flex gap-3">
                  <Link href="/tools">
                    <Button size="sm" className="rounded-xl gap-1">
                      Explore Tools <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </Link>
                  <Link href="/settings">
                    <Button size="sm" variant="outline" className="rounded-xl">
                      Configure API Keys
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <History className="h-10 w-10 text-muted-foreground/30 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">No generations yet</p>
              <p className="text-xs text-muted-foreground mt-1">Your AI-generated content will appear here</p>
            </div>
          </CardContent>
        </Card>
      </div>
  );
}
