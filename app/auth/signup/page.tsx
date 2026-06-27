"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Shield, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Registration failed");
        setLoading(false);
        return;
      }

      router.push("/auth/login?registered=true");
    } catch {
      setError("Something went wrong");
      setLoading(false);
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
          <h1 className="font-display text-2xl font-bold">Create Account</h1>
          <p className="text-foreground-muted text-sm mt-2">Join the security community</p>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-lg bg-status-error/10 border border-status-error/20 text-status-error text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground-muted mb-2">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-border text-foreground focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue/50"
              placeholder="John Doe"
            />
          </div>
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

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-accent-blue to-accent-purple text-background font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <p className="text-center text-sm text-foreground-muted mt-6">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-accent-blue hover:underline">
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
