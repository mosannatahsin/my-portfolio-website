"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Search, Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";

const categories = ["All", "Research", "Tutorial", "Bug Bounty", "Analysis", "News"];

const posts = [
  {
    title: "Advanced SSRF Exploitation Techniques in Modern Cloud Architectures",
    slug: "ssrf-cloud-exploitation",
    excerpt: "Exploring Server-Side Request Forgery in microservices, serverless functions, and cloud-native applications. Learn how to identify and exploit SSRF in modern environments.",
    category: "Research",
    date: "Dec 15, 2025",
    readTime: "12 min read",
    tags: ["SSRF", "Cloud", "Microservices", "Serverless"],
  },
  {
    title: "Building a Secure CI/CD Pipeline: From Code to Production",
    slug: "secure-cicd-pipeline",
    excerpt: "A comprehensive guide to implementing security controls throughout your continuous integration and deployment workflow. Covers SAST, DAST, SCA, and secrets management.",
    category: "Tutorial",
    date: "Dec 8, 2025",
    readTime: "8 min read",
    tags: ["DevSecOps", "CI/CD", "SAST", "DAST"],
  },
  {
    title: "The Evolution of Web Application Firewalls: Bypasses and Defenses",
    slug: "waf-bypasses-defenses",
    excerpt: "Analyzing modern WAF evasion techniques and how to build resilient defense mechanisms. A deep technical analysis of bypass methods and countermeasures.",
    category: "Analysis",
    date: "Nov 28, 2025",
    readTime: "15 min read",
    tags: ["WAF", "Bypass", "Defense", "Web Security"],
  },
  {
    title: "From Recon to Report: My Bug Bounty Methodology",
    slug: "bug-bounty-methodology",
    excerpt: "A detailed walkthrough of my personal bug bounty hunting methodology, from initial reconnaissance to final report submission. Tools, techniques, and tips included.",
    category: "Bug Bounty",
    date: "Nov 20, 2025",
    readTime: "10 min read",
    tags: ["Bug Bounty", "Recon", "Methodology", "HackerOne"],
  },
  {
    title: "Zero-Day Discovery: Smart Home Protocol Vulnerabilities",
    slug: "smart-home-zero-day",
    excerpt: "Independent research into IoT smart home communication protocols, discovering critical vulnerabilities that could affect millions of devices worldwide.",
    category: "Research",
    date: "Nov 10, 2025",
    readTime: "18 min read",
    tags: ["IoT", "Zero-Day", "Reverse Engineering", "CVE"],
  },
  {
    title: "API Security in 2026: Trends and Predictions",
    slug: "api-security-2026",
    excerpt: "An analysis of emerging API security threats and the evolving landscape of API protection. What to expect and how to prepare for the next wave of API attacks.",
    category: "Analysis",
    date: "Nov 1, 2025",
    readTime: "7 min read",
    tags: ["API", "Trends", "2026", "Predictions"],
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent-blue text-sm font-medium tracking-wider uppercase mb-4 block">
            Security Insights
          </span>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Security <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            Deep dives into vulnerability research, security tutorials, and industry analysis.
          </p>
        </motion.div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-muted" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-border text-foreground placeholder:text-foreground-muted/50 focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue/50"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-accent-blue to-accent-purple text-background"
                  : "glass-card text-foreground-muted hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card p-6 md:p-8 rounded-2xl hover:bg-white/10 transition-all"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-2/3">
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
                  <h2 className="font-display font-semibold text-xl md:text-2xl mb-3 group-hover:text-accent-blue transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-foreground-muted text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="flex items-center gap-1 text-xs text-foreground-muted">
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:w-1/3 flex items-center justify-end">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center group-hover:from-accent-blue/30 group-hover:to-accent-purple/30 transition-all">
                    <ArrowRight className="w-6 h-6 text-accent-blue group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
