"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Security Tools", "Research", "Open Source", "Labs"];

const projects = [
  {
    title: "Advanced Web Application Scanner",
    category: "Security Tools",
    description: "Automated vulnerability scanner with ML-based detection for modern web applications. Features intelligent crawling, authenticated scanning, and comprehensive reporting.",
    technologies: ["Python", "React", "TensorFlow", "Docker", "PostgreSQL"],
    challenges: "Handling complex single-page applications and authenticated workflows.",
    results: "Identified 500+ vulnerabilities across 50+ applications with 95% accuracy.",
    featured: true,
  },
  {
    title: "API Security Assessment Framework",
    category: "Security Tools",
    description: "Comprehensive framework for testing REST and GraphQL APIs against security standards including OWASP API Security Top 10.",
    technologies: ["TypeScript", "Node.js", "OpenAPI", "Jest", "CI/CD"],
    challenges: "Supporting multiple authentication schemes and API specifications.",
    results: "Reduced API vulnerability discovery time by 60% for client engagements.",
    featured: true,
  },
  {
    title: "Cloud Infrastructure Audit Toolkit",
    category: "Open Source",
    description: "Multi-cloud security assessment tool for AWS, Azure, and GCP environments. Identifies misconfigurations and compliance violations.",
    technologies: ["Go", "Terraform", "Cloud SDK", "React", "SQLite"],
    challenges: "Normalizing findings across different cloud provider APIs.",
    results: "Open-sourced with 2,000+ GitHub stars and active community contributions.",
    featured: true,
  },
  {
    title: "Zero-Day Research: Smart Home Protocol",
    category: "Research",
    description: "Independent security research into IoT smart home communication protocols, discovering critical vulnerabilities in popular devices.",
    technologies: ["Reverse Engineering", "Firmware Analysis", "Radio"],
    challenges: "Analyzing proprietary protocols without documentation.",
    results: "3 CVEs assigned, vendor patches released, presented at DEF CON.",
    featured: false,
  },
  {
    title: "Secure Coding Training Platform",
    category: "Labs",
    description: "Interactive learning platform teaching secure coding practices through hands-on vulnerable application labs.",
    technologies: ["Next.js", "Docker", "Kubernetes", "PostgreSQL"],
    challenges: "Creating realistic vulnerabilities without compromising host systems.",
    results: "10,000+ students trained, 4.9/5 average rating.",
    featured: false,
  },
  {
    title: "Mobile App Security Toolkit",
    category: "Security Tools",
    description: "Automated security assessment framework for iOS and Android applications with dynamic and static analysis capabilities.",
    technologies: ["Python", "Frida", "Objection", "React Native"],
    challenges: "Bypassing modern mobile app protections and certificate pinning.",
    results: "Used in 30+ client engagements with comprehensive coverage reports.",
    featured: false,
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

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
            Portfolio
          </span>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Security <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            A collection of security tools, research projects, and open-source contributions 
            that demonstrate technical depth and innovation.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-accent-blue to-accent-purple text-background"
                  : "glass-card text-foreground-muted hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl hover:bg-white/10 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 text-xs rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="px-3 py-1 text-xs rounded-full bg-accent-green/10 text-accent-green border border-accent-green/20">
                    Featured
                  </span>
                )}
              </div>

              <h3 className="font-display font-semibold text-2xl mb-3">{project.title}</h3>
              <p className="text-foreground-muted text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <span className="text-xs text-foreground-muted uppercase tracking-wider">Challenges</span>
                  <p className="text-sm text-foreground mt-1">{project.challenges}</p>
                </div>
                <div>
                  <span className="text-xs text-foreground-muted uppercase tracking-wider">Results</span>
                  <p className="text-sm text-accent-green mt-1">{project.results}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded-md bg-white/5 border border-border text-foreground-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-sm text-accent-blue hover:text-accent-purple transition-colors">
                  <Github className="w-4 h-4" />
                  View Source
                </button>
                <button className="flex items-center gap-2 text-sm text-foreground-muted hover:text-foreground transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
