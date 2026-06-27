"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "TechVenture Inc.",
    content: "Mosanna's penetration testing uncovered critical vulnerabilities our previous audits missed. His detailed reports and remediation guidance were invaluable to our security posture.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Security Lead",
    company: "FinSecure Bank",
    content: "Working with Mosanna transformed our approach to application security. His bug bounty consulting helped us launch a successful program that identified 40+ critical issues in the first quarter.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Founder",
    company: "CloudStart SaaS",
    content: "The security training Mosanna delivered to our engineering team was exceptional. Practical, engaging, and immediately applicable to our development workflow.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-green/5 to-transparent pointer-events-none" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-purple text-sm font-medium tracking-wider uppercase mb-4 block">
            Client Feedback
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            What Clients <span className="gradient-text">Say</span>
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Trusted by industry leaders to secure their most critical digital assets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl relative"
            >
              <Quote className="w-10 h-10 text-accent-blue/20 absolute top-6 right-6" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent-green text-accent-green" />
                ))}
              </div>

              <p className="text-foreground-muted text-sm leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-background font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-sm">{testimonial.name}</div>
                  <div className="text-xs text-foreground-muted">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
