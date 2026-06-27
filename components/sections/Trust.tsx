"use client";

import { motion } from "framer-motion";
import { Award, Shield, Globe, Users, Trophy, BookOpen } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Bug Bounty Elite",
    description: "Recognized by major tech companies for critical vulnerability discoveries",
  },
  {
    icon: Shield,
    title: "Certified Professional",
    description: "OSCP, CEH, CISSP, and multiple specialized security certifications",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Secured applications used by millions across 30+ countries",
  },
  {
    icon: Users,
    title: "Trusted Advisor",
    description: "Strategic security consultant for Fortune 500 and startups alike",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Featured in leading cybersecurity publications and conferences",
  },
  {
    icon: BookOpen,
    title: "Security Educator",
    description: "Trained 10,000+ students in ethical hacking and secure development",
  },
];

export function Trust() {
  return (
    <section className="py-24 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-blue text-sm font-medium tracking-wider uppercase mb-4 block">
            Trust & Authority
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Why Industry Leaders <span className="gradient-text">Trust Me</span>
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            A proven track record of securing critical infrastructure and delivering 
            actionable intelligence to organizations worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover-lift"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center mb-6 group-hover:from-accent-blue/30 group-hover:to-accent-purple/30 transition-all">
                <item.icon className="w-6 h-6 text-accent-blue" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-3">{item.title}</h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
