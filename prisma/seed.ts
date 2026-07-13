import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const adapter = new PrismaLibSql({ url: "file:prisma/dev.db" });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding ContentForge AI...");
  
  const passwordHash = await bcrypt.hash("password123", 12);
  
  const user = await prisma.user.create({
    data: { email: "demo@contentforge.ai", name: "Demo User", passwordHash },
  });
  
  const workspace = await prisma.workspace.create({
    data: { name: "Demo Workspace", slug: "demo-workspace", description: "Default workspace for demo" },
  });
  
  await prisma.workspaceMember.create({
    data: { userId: user.id, workspaceId: workspace.id, role: "OWNER" },
  });

  await prisma.tool.createMany({
    data: [
      { name: "Blog Post Generator", slug: "blog-post", description: "Generate SEO-optimized blog posts", category: "content", workspaceId: workspace.id },
      { name: "Email Drafter", slug: "email-draft", description: "Professional email drafts with tone control", category: "email", workspaceId: workspace.id },
      { name: "Content Summarizer", slug: "summarize", description: "Condense long content into summaries", category: "summarize", workspaceId: workspace.id },
      { name: "Content Analyzer", slug: "analyze", description: "Analyze content for quality and SEO", category: "analysis", workspaceId: workspace.id },
    ],
  });

  await prisma.promptTemplate.createMany({
    data: [
      { name: "Blog Introduction", description: "Engaging intro for blog posts", prompt: "Write an engaging introduction for a blog post about: {{topic}}. Target audience: {{audience}}.", category: "blog", workspaceId: workspace.id, variables: '["topic", "audience"]' },
      { name: "Product Launch Email", description: "Email template for product launches", prompt: "Write a product launch email for {{product_name}}. Key features: {{features}}. Tone: {{tone}}.", category: "email", workspaceId: workspace.id, variables: '["product_name", "features", "tone"]' },
      { name: "LinkedIn Post", description: "Professional LinkedIn post", prompt: "Write a LinkedIn post about {{topic}}. Make it engaging and professional. Include a call to action.", category: "social", workspaceId: workspace.id, variables: '["topic"]' },
      { name: "SEO Meta Description", description: "Meta description for SEO", prompt: "Write a compelling SEO meta description (max 160 chars) for a page about: {{topic}}. Target keyword: {{keyword}}.", category: "custom", workspaceId: workspace.id, variables: '["topic", "keyword"]' },
    ],
  });

  await prisma.generation.createMany({
    data: [
      { title: "Blog Post: AI Trends", input: "Write about AI trends in 2025", output: "Artificial intelligence continues to evolve rapidly...", provider: "mock", model: "mock-gpt-4", toolSlug: "blog-post", tokensUsed: 450, duration: 1200, workspaceId: workspace.id, userId: user.id },
      { title: "Welcome Email Draft", input: "Draft a welcome email for new users", output: "Welcome to ContentForge AI! We're thrilled to have you...", provider: "mock", model: "mock-gpt-4", toolSlug: "email-draft", tokensUsed: 280, duration: 800, workspaceId: workspace.id, userId: user.id },
    ],
  });

  console.log("Seed complete: demo@contentforge.ai / password123");
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => { console.error(e); prisma.$disconnect(); process.exit(1); });
