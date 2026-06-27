"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Advanced Web Application Scanner",
    category: "Security Tool",
    description: "Automated vulnerability scanner with ML-based detection for modern web applications.",
    tags: ["Python", "React", "Machine Learning", "Docker"],
    image: "scanner",
    featured: true,
  },
  {
    title: "API Security Assessment Framework",
    category: "Research",
    description: "Comprehensive framework for testing REST and GraphQL APIs against security standards.",
    tags: ["TypeScript", "Node.js", "OpenAPI", "CI/CD"],
    image: "api",
    featured: true,
  },
  {
    title: "Cloud Infrastructure Audit Toolkit",
    category: "Open Source",
    description: "Multi-cloud security assessment tool for AWS, Azure, and GCP environments.",
    tags: ["Go", "Terraform", "Cloud Security", "IaC"],
    image: "cloud",
    featured: true,
  },
];

export function FeaturedPortfolio() {
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
            <span className="text-accent-purple text-sm font-medium tracking-wider uppercase mb-4 block">
              Featured Work
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              Security <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-foreground-muted max-w-xl">
              A curated selection of security tools, research projects, and open-source contributions.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-accent-blue hover:text-accent-purple transition-colors group"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover-lift"
            >
              <div className="h-48 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center">
                    <span className="text-2xl font-display font-bold gradient-text">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-background/80 backdrop-blur text-foreground">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display font-semibold text-xl mb-3 group-hover:text-accent-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground-muted text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-foreground-muted border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 text-sm text-accent-blue hover:text-accent-purple transition-colors">
                    <Github className="w-4 h-4" />
                    Source
                  </button>
                  <button className="flex items-center gap-2 text-sm text-foreground-muted hover:text-foreground transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
