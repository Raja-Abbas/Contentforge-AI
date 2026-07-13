"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, FileText, Mail, Share2, Settings } from "lucide-react";

const categoryConfig: Record<string, { label: string; color: string; icon: typeof FileText }> = {
  blog: { label: "Blog", color: "bg-violet-500/10 text-violet-400", icon: FileText },
  email: { label: "Email", color: "bg-blue-500/10 text-blue-400", icon: Mail },
  social: { label: "Social", color: "bg-pink-500/10 text-pink-400", icon: Share2 },
  custom: { label: "Custom", color: "bg-amber-500/10 text-amber-400", icon: Settings },
};

const templates = [
  {
    name: "Blog Introduction",
    description: "Generate an engaging introduction paragraph for blog posts with a hook and thesis.",
    category: "blog",
    prompt: "Write an engaging introduction for a blog post about: {{topic}}. Target audience: {{audience}}.",
    variables: ["topic", "audience"],
  },
  {
    name: "Product Launch Email",
    description: "Craft a compelling product launch email highlighting key features and benefits.",
    category: "email",
    prompt: "Write a product launch email for {{product_name}}. Key features: {{features}}. Tone: {{tone}}.",
    variables: ["product_name", "features", "tone"],
  },
  {
    name: "LinkedIn Post",
    description: "Create a professional LinkedIn post that drives engagement and conversation.",
    category: "social",
    prompt: "Write a LinkedIn post about {{topic}}. Make it engaging and professional. Include a call to action.",
    variables: ["topic"],
  },
  {
    name: "SEO Meta Description",
    description: "Write a compelling meta description optimized for search engines within 160 characters.",
    category: "custom",
    prompt: "Write a compelling SEO meta description (max 160 chars) for a page about: {{topic}}. Target keyword: {{keyword}}.",
    variables: ["topic", "keyword"],
  },
];

export default function TemplatesPage() {
  return (
    <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Prompt Templates</h1>
            <p className="text-muted-foreground">
              Reusable templates to streamline your content creation workflow.
            </p>
          </div>
          <Button className="rounded-xl bg-violet-600 hover:bg-violet-700 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Create Template
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {templates.map((template) => {
            const cat = categoryConfig[template.category];
            const Icon = cat.icon;
            return (
              <Card key={template.name} className="rounded-xl border-border/50 transition-all hover:shadow-lg hover:border-violet-500/30">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${cat.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-base">{template.name}</CardTitle>
                        <Badge variant="secondary" className={`mt-1 text-xs ${cat.color}`}>
                          {cat.label}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{template.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {template.variables.map((v) => (
                      <span
                        key={v}
                        className="inline-flex items-center rounded-md bg-violet-500/10 px-2 py-0.5 text-xs text-violet-400"
                      >
                        {`{{${v}}}`}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full rounded-xl border-violet-500/30 text-violet-400 hover:bg-violet-500/10">
                    Use Template
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
  );
}
