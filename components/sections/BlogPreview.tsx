"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const posts = [
  {
    title: "Advanced SSRF Exploitation Techniques in Modern Cloud Architectures",
    excerpt: "Exploring Server-Side Request Forgery in microservices, serverless functions, and cloud-native applications.",
    category: "Research",
    date: "Dec 15, 2025",
    readTime: "12 min read",
  },
  {
    title: "Building a Secure CI/CD Pipeline: From Code to Production",
    excerpt: "A comprehensive guide to implementing security controls throughout your continuous integration and deployment workflow.",
    category: "Tutorial",
    date: "Dec 8, 2025",
    readTime: "8 min read",
  },
  {
    title: "The Evolution of Web Application Firewalls: Bypasses and Defenses",
    excerpt: "Analyzing modern WAF evasion techniques and how to build resilient defense mechanisms.",
    category: "Analysis",
    date: "Nov 28, 2025",
    readTime: "15 min read",
  },
];

export function BlogPreview() {
  return (
    <section className="py-24 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <span className="text-accent-blue text-sm font-medium tracking-wider uppercase mb-4 block">
              Latest Insights
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              Security <span className="gradient-text">Blog</span>
            </h2>
            <p className="text-foreground-muted max-w-xl">
              Deep dives into vulnerability research, security tutorials, and industry analysis.
            </p>
          </div>
          <Link
            href="/blog"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-accent-blue hover:text-accent-purple transition-colors group"
          >
            Read All Articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="space-y-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card p-6 md:p-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 text-xs rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-foreground-muted">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-foreground-muted">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-2 group-hover:text-accent-blue transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center group-hover:from-accent-blue/30 group-hover:to-accent-purple/30 transition-all">
                    <ArrowRight className="w-5 h-5 text-accent-blue group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
