"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:contact@mosannatahsin.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}
Email: ${formData.email}

${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-blue text-sm font-medium tracking-wider uppercase mb-4 block">
            Get In Touch
          </span>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Let&apos;s Start a <span className="gradient-text">Conversation</span>
          </h1>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            Have a security concern or want to discuss a project? I&apos;m here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="glass-card p-8 md:p-10 rounded-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground-muted mb-2">Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-border text-foreground focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground-muted mb-2">Email</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-border text-foreground focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue/50"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground-muted mb-2">Subject</label>
                <input
                  required
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-border text-foreground focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue/50"
                  placeholder="How can I help you?"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground-muted mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-border text-foreground focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue/50 resize-none"
                  placeholder="Describe your project or security needs..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-purple text-background font-semibold rounded-xl hover:opacity-90 transition-opacity"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </motion.form>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-6 rounded-2xl"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-blue/20 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5 text-accent-blue" />
              </div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-sm text-foreground-muted">contact@mosannatahsin.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card p-6 rounded-2xl"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-purple/20 flex items-center justify-center mb-4">
                <MessageSquare className="w-5 h-5 text-accent-purple" />
              </div>
              <h3 className="font-semibold mb-1">Telegram</h3>
              <p className="text-sm text-foreground-muted">@mosannatahsin</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass-card p-6 rounded-2xl"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-green/20 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-accent-green" />
              </div>
              <h3 className="font-semibold mb-1">Response Time</h3>
              <p className="text-sm text-foreground-muted">Within 24 hours</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
