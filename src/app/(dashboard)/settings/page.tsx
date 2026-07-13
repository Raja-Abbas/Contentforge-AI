"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Building2, Key, Bell } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "workspace", label: "Workspace", icon: Building2 },
  { id: "api-keys", label: "API Keys", icon: Key },
  { id: "notifications", label: "Notifications", icon: Bell },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<TabId>("profile");

  return (
    <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account, workspace, and preferences.
          </p>
        </div>

        <div className="flex gap-1 rounded-xl bg-muted p-1 w-fit">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                  activeTab === tab.id
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {activeTab === "profile" && (
          <Card className="rounded-xl border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-violet-500/10 text-2xl font-bold text-violet-400">
                  DU
                </div>
                <div>
                  <p className="font-medium">Demo User</p>
                  <p className="text-sm text-muted-foreground">demo@contentforge.ai</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <input
                    type="text"
                    defaultValue="Demo User"
                    className="w-full rounded-xl border border-border/50 bg-background px-4 py-2.5 text-sm outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    defaultValue="demo@contentforge.ai"
                    className="w-full rounded-xl border border-border/50 bg-background px-4 py-2.5 text-sm outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50"
                  />
                </div>
              </div>
              <Button className="rounded-xl bg-violet-600 hover:bg-violet-700 text-white">
                Save Changes
              </Button>
            </CardContent>
          </Card>
        )}

        {activeTab === "workspace" && (
          <Card className="rounded-xl border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Workspace</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Workspace Name</label>
                <input
                  type="text"
                  defaultValue="Demo Workspace"
                  className="w-full rounded-xl border border-border/50 bg-background px-4 py-2.5 text-sm outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Slug</label>
                <input
                  type="text"
                  defaultValue="demo-workspace"
                  className="w-full rounded-xl border border-border/50 bg-background px-4 py-2.5 text-sm outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Description</label>
                <textarea
                  defaultValue="Default workspace for demo"
                  rows={3}
                  className="w-full rounded-xl border border-border/50 bg-background px-4 py-2.5 text-sm outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 resize-none"
                />
              </div>
              <Button className="rounded-xl bg-violet-600 hover:bg-violet-700 text-white">
                Save Changes
              </Button>
            </CardContent>
          </Card>
        )}

        {activeTab === "api-keys" && (
          <div className="space-y-4">
            {[
              { name: "OpenAI", placeholder: "sk-...", connected: false },
              { name: "Gemini", placeholder: "AIza...", connected: false },
              { name: "Claude", placeholder: "sk-ant-...", connected: false },
            ].map((provider) => (
              <Card key={provider.name} className="rounded-xl border-border/50">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{provider.name}</h3>
                      <Badge
                        variant="secondary"
                        className="bg-muted text-muted-foreground text-xs"
                      >
                        Not configured
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="password"
                      placeholder={provider.placeholder}
                      className="flex-1 rounded-xl border border-border/50 bg-background px-4 py-2.5 text-sm outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50"
                    />
                    <Button variant="outline" className="rounded-xl border-border/50">
                      Save
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "notifications" && (
          <Card className="rounded-xl border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Notifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { label: "Generation Complete", description: "Get notified when content generation finishes" },
                { label: "Weekly Usage Summary", description: "Receive a weekly summary of your usage" },
                { label: "New Features", description: "Stay updated on new tools and features" },
                { label: "Usage Alerts", description: "Alert when approaching token limits" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-xl border border-border/50 p-4"
                >
                  <div>
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                  <button className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:ring-offset-2">
                    <span className="pointer-events-none inline-block h-5 w-5 rounded-full bg-foreground shadow-lg ring-0 translate-x-0" />
                  </button>
                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
  );
}
