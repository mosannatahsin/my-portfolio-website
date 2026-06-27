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
  ArrowRight,
  Check,
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Cybersecurity Consulting",
    description: "Strategic security advisory tailored to your business needs and risk profile.",
    features: ["Risk Assessment", "Compliance Strategy", "Security Roadmap"],
    price: "Custom",
  },
  {
    icon: Search,
    title: "Penetration Testing",
    description: "Authorized simulated attacks to identify and remediate security vulnerabilities.",
    features: ["Web Applications", "Networks", "Mobile Apps", "Cloud"],
    price: "From $2,500",
  },
  {
    icon: Globe,
    title: "Web App Security Review",
    description: "Comprehensive assessment of web applications against industry standards.",
    features: ["OWASP Top 10", "Business Logic", "API Testing"],
    price: "From $1,500",
  },
  {
    icon: Code,
    title: "API Security Assessment",
    description: "In-depth security evaluation of REST, GraphQL, and SOAP APIs.",
    features: ["Authentication", "Authorization", "Input Validation"],
    price: "From $1,200",
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/5 via-transparent to-transparent pointer-events-none" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-blue text-sm font-medium tracking-wider uppercase mb-4 block">
            Professional Services
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Security <span className="gradient-text">Services</span>
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Enterprise-grade security services delivered with precision and professionalism.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover-lift"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-accent-blue" />
                </div>
                <span className="px-3 py-1 text-sm rounded-full bg-accent-green/10 text-accent-green border border-accent-green/20">
                  {service.price}
                </span>
              </div>

              <h3 className="font-display font-semibold text-xl mb-3">{service.title}</h3>
              <p className="text-foreground-muted text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground-muted">
                    <Check className="w-4 h-4 text-accent-green flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm text-accent-blue hover:text-accent-purple transition-colors group/link"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
