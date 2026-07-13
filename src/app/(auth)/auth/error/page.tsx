"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

function AuthErrorContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const messages: Record<string, string> = {
    Configuration: "There is a problem with the server configuration.",
    AccessDenied: "Access was denied. You may not have permission to sign in.",
    Verification: "The verification link may have expired or already been used.",
    Default: "An unexpected error occurred.",
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-muted/30 noise-bg">
      <div className="relative z-10 w-full max-w-md text-center">
        <div className="mb-8 flex justify-center">
          <Logo size="md" />
        </div>
        <Card>
          <CardContent className="p-8">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-destructive/10 p-3">
                <AlertTriangle className="h-6 w-6 text-destructive" />
              </div>
            </div>
            <h1 className="text-xl font-bold mb-2">Authentication Error</h1>
            <p className="text-muted-foreground mb-6">
              {messages[error || "Default"] || messages.Default}
            </p>
            <Link href="/login">
              <Button className="w-full rounded-xl">Back to Sign In</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function AuthErrorPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    }>
      <AuthErrorContent />
    </Suspense>
  );
}
