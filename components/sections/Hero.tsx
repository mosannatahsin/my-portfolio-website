"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Terminal, Lock, Bug } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-blue/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl animate-pulse-slow animation-delay-400" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-green/3 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 212, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
            <span className="text-sm text-foreground-muted">Available for Consulting</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            <span className="text-foreground">MOSANNA</span>
            <br />
            <span className="gradient-text">TAHSIN</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-8"
          >
            {[
              { icon: Shield, label: "Cybersecurity Consultant" },
              { icon: Terminal, label: "Ethical Hacker" },
              { icon: Lock, label: "Security Researcher" },
              { icon: Bug, label: "Bug Bounty Hunter" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm"
              >
                <item.icon className="w-4 h-4 text-accent-blue" />
                <span className="text-foreground-muted">{item.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-foreground-muted max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Securing digital ecosystems through advanced penetration testing, 
            vulnerability research, and strategic security consulting. 
            Transforming vulnerabilities into resilience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/consulting"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-purple text-background font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-accent-blue/25 hover:shadow-accent-blue/40"
            >
              Book Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 glass-card text-foreground font-semibold rounded-xl hover:bg-white/10 transition-all"
            >
              View Portfolio
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: "500+", label: "Vulnerabilities Found" },
              { value: "50+", label: "Enterprise Clients" },
              { value: "100+", label: "Security Reports" },
              { value: "10+", label: "Certifications" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-6 rounded-2xl">
                <div className="text-3xl sm:text-4xl font-display font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground-muted">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
