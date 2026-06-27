"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  Search,
  Globe,
  Code,
  GraduationCap,
  Bug,
  Check,
  ArrowRight,
  Clock,
  FileText,
  Users,
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Cybersecurity Consulting",
    slug: "cybersecurity-consulting",
    description: "Strategic security advisory tailored to your organization's unique risk profile and business objectives. I provide actionable guidance to strengthen your security posture.",
    features: [
      "Comprehensive Risk Assessment",
      "Security Architecture Review",
      "Compliance Strategy (SOC2, ISO 27001, GDPR)",
      "Incident Response Planning",
      "Security Roadmap Development",
    ],
    deliverables: [
      "Executive Summary Report",
      "Detailed Risk Register",
      "Remediation Roadmap",
      "Policy Templates",
      "Quarterly Review Sessions",
    ],
    process: [
      "Discovery & Scoping",
      "Current State Assessment",
      "Gap Analysis",
      "Strategic Recommendations",
      "Implementation Support",
    ],
    timeline: "2-4 Weeks",
    price: "Custom Quote",
  },
  {
    icon: Search,
    title: "Penetration Testing",
    slug: "penetration-testing",
    description: "Authorized simulated cyber attacks against your systems to evaluate security posture. Identify vulnerabilities before malicious actors exploit them.",
    features: [
      "Web Application Penetration Testing",
      "Network Infrastructure Testing",
      "Mobile Application Testing",
      "Cloud Environment Testing",
      "Social Engineering Assessments",
    ],
    deliverables: [
      "Technical Findings Report",
      "Executive Summary",
      "Proof of Concept Exploits",
      "Remediation Guidance",
      "Retest Verification",
    ],
    process: [
      "Reconnaissance",
      "Vulnerability Discovery",
      "Exploitation Attempts",
      "Post-Exploitation Analysis",
      "Reporting & Debrief",
    ],
    timeline: "1-3 Weeks",
    price: "From $2,500",
  },
  {
    icon: Globe,
    title: "Web Application Security Review",
    slug: "web-application-security",
    description: "Comprehensive security assessment of web applications against OWASP Top 10 and beyond. Perfect for pre-launch security validation.",
    features: [
      "OWASP Top 10 Coverage",
      "Business Logic Testing",
      "Authentication & Session Management",
      "Input Validation Testing",
      "Client-Side Security",
    ],
    deliverables: [
      "Vulnerability Assessment Report",
      "CVSS Scoring",
      "Remediation Playbook",
      "Secure Coding Guidelines",
      "Verification Testing",
    ],
    process: [
      "Application Mapping",
      "Threat Modeling",
      "Automated Scanning",
      "Manual Testing",
      "Report & Review",
    ],
    timeline: "1-2 Weeks",
    price: "From $1,500",
  },
  {
    icon: Code,
    title: "API Security Assessment",
    slug: "api-security-assessment",
    description: "In-depth security evaluation of REST, GraphQL, and SOAP APIs. Ensure your APIs are resilient against modern attack vectors.",
    features: [
      "Authentication & Authorization Testing",
      "Rate Limiting & Throttling",
      "Input Validation & Injection",
      "Data Exposure Analysis",
      "Business Logic Flaws",
    ],
    deliverables: [
      "API Security Report",
      "Endpoint Risk Matrix",
      "Secure API Design Guide",
      "Postman Test Collection",
      "Remediation Workshop",
    ],
    process: [
      "API Documentation Review",
      "Endpoint Enumeration",
      "Authentication Testing",
      "Vulnerability Exploitation",
      "Documentation & Handover",
    ],
    timeline: "1-2 Weeks",
    price: "From $1,200",
  },
  {
    icon: GraduationCap,
    title: "Security Awareness Training",
    slug: "security-awareness-training",
    description: "Empower your team with practical security knowledge. Customized training programs that make security everyone's responsibility.",
    features: [
      "Phishing Simulation Campaigns",
      "Secure Coding Workshops",
      "Incident Response Drills",
      "Compliance Training",
      "Executive Security Briefings",
    ],
    deliverables: [
      "Training Materials",
      "Assessment Reports",
      "Policy Documentation",
      "Video Recordings",
      "Ongoing Support",
    ],
    process: [
      "Needs Assessment",
      "Content Customization",
      "Training Delivery",
      "Knowledge Testing",
      "Feedback & Iteration",
    ],
    timeline: "Ongoing",
    price: "From $500/session",
  },
  {
    icon: Bug,
    title: "Bug Bounty Consulting",
    slug: "bug-bounty-consulting",
    description: "Launch and optimize your bug bounty program. From program design to triage workflow, I help you build a successful vulnerability disclosure program.",
    features: [
      "Program Design & Strategy",
      "Scope Definition",
      "Bounty Structure Optimization",
      "Triage Workflow Setup",
      "Reporter Relations",
    ],
    deliverables: [
      "Program Policy Document",
      "Scope & Rules",
      "Triage Playbook",
      "Metrics Dashboard",
      "Monthly Reports",
    ],
    process: [
      "Program Assessment",
      "Strategy Development",
      "Platform Setup",
      "Launch & Promotion",
      "Ongoing Management",
    ],
    timeline: "2-6 Weeks Setup",
    price: "Custom Quote",
  },
];

export default function ServicesPage() {
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
            Professional Services
          </span>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Security <span className="gradient-text">Services</span>
          </h1>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            Enterprise-grade security services delivered with precision, professionalism, 
            and a commitment to your organization's safety.
          </p>
        </motion.div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="lg:w-1/3">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center mb-6">
                      <service.icon className="w-7 h-7 text-accent-blue" />
                    </div>
                    <h2 className="font-display font-semibold text-2xl mb-3">{service.title}</h2>
                    <p className="text-foreground-muted text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="flex items-center gap-1.5 text-xs text-foreground-muted">
                        <Clock className="w-3.5 h-3.5" />
                        {service.timeline}
                      </span>
                      <span className="px-3 py-1 text-xs rounded-full bg-accent-green/10 text-accent-green border border-accent-green/20 font-medium">
                        {service.price}
                      </span>
                    </div>
                  </div>

                  <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-xs font-medium text-foreground-muted uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-accent-blue" />
                        Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="text-sm text-foreground-muted flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-accent-blue mt-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-medium text-foreground-muted uppercase tracking-wider mb-3 flex items-center gap-2">
                        <FileText className="w-3.5 h-3.5 text-accent-purple" />
                        Deliverables
                      </h4>
                      <ul className="space-y-2">
                        {service.deliverables.map((deliverable) => (
                          <li key={deliverable} className="text-sm text-foreground-muted flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-accent-purple mt-2 flex-shrink-0" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-medium text-foreground-muted uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-accent-green" />
                        Process
                      </h4>
                      <ul className="space-y-2">
                        {service.process.map((step, i) => (
                          <li key={step} className="text-sm text-foreground-muted flex items-start gap-2">
                            <span className="text-xs text-accent-green font-mono flex-shrink-0">0{i + 1}</span>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <Link
                    href="/consulting"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-blue to-accent-purple text-background font-medium rounded-lg hover:opacity-90 transition-all"
                  >
                    Book This Service
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
