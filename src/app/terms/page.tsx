export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Last updated: January 1, 2025
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing or using ContentForge AI, you agree to be bound by these Terms of Service.
              If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Description of Service</h2>
            <p className="text-muted-foreground">
              ContentForge AI provides AI-powered content generation tools including blog post
              generators, email drafters, content summarizers, and other writing assistants. We
              reserve the right to modify or discontinue any part of the service at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. User Responsibilities</h2>
            <p className="text-muted-foreground">
              You are responsible for maintaining the confidentiality of your account credentials.
              You agree to use the service only for lawful purposes and in accordance with these
              terms. You are responsible for all content generated using your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Intellectual Property</h2>
            <p className="text-muted-foreground">
              Content generated through our platform is owned by you. We claim no rights over the
              output produced by our AI tools. However, you acknowledge that AI-generated content
              may not be eligible for copyright protection in all jurisdictions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              ContentForge AI is provided &quot;as is&quot; without warranties of any kind. We shall not be
              liable for any indirect, incidental, special, consequential, or punitive damages
              resulting from your use of the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Termination</h2>
            <p className="text-muted-foreground">
              We may terminate or suspend your account at any time for conduct that we determine
              violates these terms or is harmful to other users, us, or third parties, or for any
              other reason.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Contact</h2>
            <p className="text-muted-foreground">
              For questions about these Terms of Service, contact us at legal@contentforge.ai.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
