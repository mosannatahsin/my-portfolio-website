"use client";

import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function AuthErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="glass-card p-8 md:p-12 rounded-2xl w-full max-w-md text-center">
        <div className="w-14 h-14 rounded-xl bg-status-error/10 flex items-center justify-center mx-auto mb-4">
          <Shield className="w-7 h-7 text-status-error" />
        </div>
        <h1 className="font-display text-2xl font-bold mb-2">Authentication Error</h1>
        <p className="text-foreground-muted text-sm mb-6">
          {error === "CredentialsSignin"
            ? "Invalid email or password. Please try again."
            : "Something went wrong during authentication."}
        </p>
        <Link
          href="/auth/login"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-blue to-accent-purple text-background font-medium rounded-lg hover:opacity-90 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Login
        </Link>
      </div>
    </div>
  );
}
