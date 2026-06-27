"use client";

import { useState } from "react";
import Link from "next/link";
import { Shield, ArrowLeft, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-card p-8 md:p-12 rounded-2xl w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center mx-auto mb-4">
            <Shield className="w-7 h-7 text-accent-blue" />
          </div>
          <h1 className="font-display text-2xl font-bold">Reset Password</h1>
          <p className="text-foreground-muted text-sm mt-2">
            Enter your email and we&apos;ll send you a reset link
          </p>
        </div>

        {submitted ? (
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-accent-green/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-accent-green" />
            </div>
            <h2 className="font-semibold text-lg mb-2">Check your email</h2>
            <p className="text-foreground-muted text-sm mb-6">
              We&apos;ve sent a password reset link to {email}
            </p>
            <Link
              href="/auth/login"
              className="inline-flex items-center gap-2 text-accent-blue hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to login
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground-muted mb-2">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-border text-foreground focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue/50"
                placeholder="you@example.com"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-accent-blue to-accent-purple text-background font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Send Reset Link
            </button>
          </form>
        )}

        <p className="text-center text-sm text-foreground-muted mt-6">
          <Link href="/auth/login" className="text-accent-blue hover:underline inline-flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" />
            Back to login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
