"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Hash,
  FileText,
  Clock,
  ChartBar,
} from "lucide-react";

const stats = [
  {
    label: "Total Generations",
    value: "0",
    icon: Zap,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    label: "Total Tokens",
    value: "0",
    icon: Hash,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    label: "Active Templates",
    value: "0",
    icon: FileText,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    label: "Avg Duration",
    value: "—",
    icon: Clock,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
];

const providers = [
  { name: "OpenAI", enabled: false },
  { name: "Gemini", enabled: false },
  { name: "Claude", enabled: false },
];

export default function UsagePage() {
  return (
    <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Usage & Analytics</h1>
          <p className="text-muted-foreground">
            Monitor your usage patterns and API consumption.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="rounded-xl border-border/50">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.bg}`}>
                      <Icon className={`h-5 w-5 ${stat.color}`} />
                    </div>
                  </div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="rounded-xl border-border/50 lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg">Usage Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10 mb-4">
                  <ChartBar className="h-8 w-8 text-violet-400" />
                </div>
                <p className="text-sm text-muted-foreground">
                  No usage data yet. Start generating content to see your analytics.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Provider Breakdown</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {providers.map((provider) => (
                <div
                  key={provider.name}
                  className="flex items-center justify-between rounded-xl border border-border/50 p-3"
                >
                  <span className="text-sm font-medium">{provider.name}</span>
                  <Badge
                    variant="secondary"
                    className={
                      provider.enabled
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-muted text-muted-foreground"
                    }
                  >
                    {provider.enabled ? "Connected" : "Not configured"}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
  );
}
