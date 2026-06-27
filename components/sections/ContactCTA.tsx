"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, Calendar, MessageSquare } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/5 via-transparent to-accent-purple/5 pointer-events-none" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-12 md:p-16 rounded-3xl text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-accent-green text-sm font-medium tracking-wider uppercase mb-4 block">
              Let's Work Together
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Ready to Secure Your <span className="gradient-text">Digital Assets?</span>
            </h2>
            <p className="text-foreground-muted text-lg mb-10 leading-relaxed">
              Whether you need a comprehensive security assessment, penetration testing, 
              or strategic consulting, I'm here to help protect what matters most.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/consulting"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-purple text-background font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-accent-blue/25"
              >
                <Calendar className="w-5 h-5" />
                Schedule a Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 glass-strong text-foreground font-semibold rounded-xl hover:bg-white/15 transition-all"
              >
                <Mail className="w-5 h-5" />
                Send a Message
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
