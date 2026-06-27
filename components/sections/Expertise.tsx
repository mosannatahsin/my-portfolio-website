"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Globe,
  Search,
  Bug,
  FlaskConical,
  GraduationCap,
} from "lucide-react";

const expertiseAreas = [
  {
    icon: Shield,
    title: "Security Consulting",
    description:
      "Strategic security advisory for organizations seeking to fortify their digital infrastructure against evolving threats.",
    skills: ["Risk Assessment", "Compliance", "Security Architecture"],
  },
  {
    icon: Globe,
    title: "Web Security",
    description:
      "Comprehensive web application security assessments identifying OWASP Top 10 vulnerabilities and beyond.",
    skills: ["OWASP Testing", "API Security", "Cloud Security"],
  },
  {
    icon: Search,
    title: "Penetration Testing",
    description:
      "Authorized simulated attacks to evaluate security posture, uncovering weaknesses before malicious actors do.",
    skills: ["Network PT", "Web PT", "Mobile PT", "Cloud PT"],
  },
  {
    icon: Bug,
    title: "Bug Bounty",
    description:
      "Active participation in bug bounty programs, discovering critical vulnerabilities in production systems.",
    skills: ["HackerOne", "Bugcrowd", "Intigriti", "Private Programs"],
  },
  {
    icon: FlaskConical,
    title: "Security Research",
    description:
      "Cutting-edge research into zero-day vulnerabilities, exploit development, and novel attack vectors.",
    skills: ["Reverse Engineering", "Malware Analysis", "0-Day Research"],
  },
  {
    icon: GraduationCap,
    title: "Security Awareness",
    description:
      "Empowering teams with knowledge through tailored security training and awareness programs.",
    skills: ["Workshops", "Training", "Phishing Simulations"],
  },
];

export function Expertise() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/5 to-transparent pointer-events-none" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-green text-sm font-medium tracking-wider uppercase mb-4 block">
            Core Competencies
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Areas of <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Deep technical knowledge combined with strategic thinking to deliver 
            comprehensive security solutions across multiple domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover-lift relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-blue/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <area.icon className="w-7 h-7 text-accent-blue" />
              </div>

              <h3 className="font-display font-semibold text-xl mb-3">{area.title}</h3>
              <p className="text-foreground-muted text-sm leading-relaxed mb-6">
                {area.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {area.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 border border-border text-foreground-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
