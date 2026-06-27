"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Shield, Github, Mail, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password");
      setLoading(false);
    } else {
      router.push("/dashboard/client");
      router.refresh();
    }
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
          <h1 className="font-display text-2xl font-bold">Welcome Back</h1>
          <p className="text-foreground-muted text-sm mt-2">Sign in to your account</p>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-lg bg-status-error/10 border border-status-error/20 text-status-error text-sm">
            {error}
          </div>
        )}

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
          <div>
            <label className="block text-sm font-medium text-foreground-muted mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-border text-foreground focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue/50 pr-10"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground-muted"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-foreground-muted">
              <input type="checkbox" className="rounded bg-white/5 border-border" />
              Remember me
            </label>
            <Link href="/auth/forgot-password" className="text-accent-blue hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-accent-blue to-accent-purple text-background font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-2 bg-[#0B1120] text-foreground-muted">Or continue with</span>
            </div>
          </div>
          <div className="mt-4 flex gap-3">
            <button
              onClick={() => signIn("google", { callbackUrl: "/dashboard/client" })}
              className="flex-1 py-2.5 border border-border rounded-lg flex items-center justify-center gap-2 hover:bg-white/5 transition-colors text-sm"
            >
              <Mail className="w-4 h-4" /> Google
            </button>
            <button
              onClick={() => signIn("github", { callbackUrl: "/dashboard/client" })}
              className="flex-1 py-2.5 border border-border rounded-lg flex items-center justify-center gap-2 hover:bg-white/5 transition-colors text-sm"
            >
              <Github className="w-4 h-4" /> GitHub
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-foreground-muted mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/auth/signup" className="text-accent-blue hover:underline">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
