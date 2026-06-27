"use client";

import { motion } from "framer-motion";
import { Shield, Target, Eye, Heart, Zap, Lock } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "Operating with unwavering ethical standards in every engagement and disclosure.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Delivering results that exceed expectations through meticulous attention to detail.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear communication and honest reporting without sugar-coating critical findings.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Genuine enthusiasm for cybersecurity that drives continuous learning and innovation.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Pushing boundaries with novel approaches to solving complex security challenges.",
  },
  {
    icon: Lock,
    title: "Discretion",
    description: "Treating client data and findings with the highest level of confidentiality.",
  },
];

const timeline = [
  {
    year: "2026",
    title: "Independent Security Consultant",
    description: "Launched premium cybersecurity consulting practice serving global clients.",
  },
  {
    year: "2024",
    title: "Lead Security Researcher",
    description: "Led vulnerability research initiatives at a top-tier security firm.",
  },
  {
    year: "2022",
    title: "Senior Penetration Tester",
    description: "Specialized in web application and network penetration testing for enterprises.",
  },
  {
    year: "2020",
    title: "Bug Bounty Hunter",
    description: "Started professional bug bounty hunting, achieving top rankings on major platforms.",
  },
  {
    year: "2018",
    title: "Security Analyst",
    description: "Began professional career in cybersecurity with SOC and incident response roles.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container-custom">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-accent-blue text-sm font-medium tracking-wider uppercase mb-4 block">
            About Me
          </span>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            The Mind Behind <span className="gradient-text">The Mission</span>
          </h1>
          <p className="text-foreground-muted text-lg max-w-3xl mx-auto leading-relaxed">
            I'm Mosanna Tahsin, a cybersecurity consultant, ethical hacker, and security researcher 
            dedicated to making the digital world safer. With years of hands-on experience in 
            penetration testing, bug bounty hunting, and security architecture, I help organizations 
            identify vulnerabilities before malicious actors do.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-10 rounded-2xl"
          >
            <div className="w-12 h-12 rounded-xl bg-accent-blue/20 flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-accent-blue" />
            </div>
            <h2 className="font-display font-semibold text-2xl mb-4">My Mission</h2>
            <p className="text-foreground-muted leading-relaxed">
              To democratize cybersecurity knowledge while providing enterprise-grade security 
              services that protect organizations from evolving threats. I believe every vulnerability 
              discovered is an opportunity to build stronger, more resilient systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-10 rounded-2xl"
          >
            <div className="w-12 h-12 rounded-xl bg-accent-purple/20 flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-accent-purple" />
            </div>
            <h2 className="font-display font-semibold text-2xl mb-4">My Vision</h2>
            <p className="text-foreground-muted leading-relaxed">
              A world where security is not an afterthought but a fundamental principle of 
              digital design. Where every developer understands secure coding practices and 
              every organization prioritizes the protection of user data.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-green text-sm font-medium tracking-wider uppercase mb-4 block">
            Core Principles
          </span>
          <h2 className="font-display text-4xl font-bold mb-4">
            Values That <span className="gradient-text">Define Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl hover:bg-white/10 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-accent-blue" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-2">{value.title}</h3>
              <p className="text-foreground-muted text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-purple text-sm font-medium tracking-wider uppercase mb-4 block">
            Career Journey
          </span>
          <h2 className="font-display text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Timeline</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 mb-8 last:mb-0"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-background font-bold text-sm flex-shrink-0">
                  {item.year.slice(-2)}
                </div>
                {index !== timeline.length - 1 && (
                  <div className="w-px flex-1 bg-gradient-to-b from-accent-blue/50 to-transparent mt-2" />
                )}
              </div>
              <div className="glass-card p-6 rounded-2xl flex-1">
                <span className="text-accent-blue text-sm font-medium">{item.year}</span>
                <h3 className="font-display font-semibold text-lg mt-1 mb-2">{item.title}</h3>
                <p className="text-foreground-muted text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
