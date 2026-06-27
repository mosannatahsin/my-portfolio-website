"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Star, Medal, Crown, Target } from "lucide-react";

const achievements = [
  {
    category: "Bug Bounty",
    icon: Bug,
    items: [
      { title: "HackerOne Top 100", description: "Ranked in top 100 researchers globally", date: "2025" },
      { title: "Bugcrowd MVP", description: "Most Valuable Participant recognition", date: "2024" },
      { title: "Critical Vulnerability Discovery", description: "RCE in major cloud platform", date: "2024" },
      { title: "Private Program Elite", description: "Invited to 50+ exclusive programs", date: "2023" },
    ],
  },
  {
    category: "Certifications",
    icon: Award,
    items: [
      { title: "OSCP (Offensive Security Certified Professional)", description: "Penetration Testing with Kali Linux", date: "2023" },
      { title: "CEH (Certified Ethical Hacker)", description: "EC-Council Certified", date: "2022" },
      { title: "CISSP (Certified Information Systems Security Professional)", description: "ISC² Certified", date: "2024" },
      { title: "OSWE (Offensive Security Web Expert)", description: "Advanced Web Attacks and Exploitation", date: "2024" },
    ],
  },
  {
    category: "Awards & Recognition",
    icon: Trophy,
    items: [
      { title: "DEF CON Speaker", description: "Presented zero-day research", date: "2024" },
      { title: "Black Hat Arsenal", description: "Showcased security tool", date: "2024" },
      { title: "CVE Contributor", description: "30+ CVEs assigned", date: "2023-2025" },
      { title: "Security Hall of Fame", description: "Recognized by 20+ companies", date: "2022-2025" },
    ],
  },
  {
    category: "Competitions",
    icon: Target,
    items: [
      { title: "CTF Champion", description: "National Cybersecurity CTF 1st Place", date: "2023" },
      { title: "Hack The Box Pro Lab", description: "Completed RastaLabs and CyberNet", date: "2023" },
      { title: "TryHackBox Rank", description: "Top 1% global ranking", date: "2024" },
      { title: "Red Team Exercise", description: "Won corporate red team simulation", date: "2024" },
    ],
  },
];

import { Bug } from "lucide-react";

export default function AchievementsPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-green text-sm font-medium tracking-wider uppercase mb-4 block">
            Track Record
          </span>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Achievements & <span className="gradient-text">Recognition</span>
          </h1>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            A journey of continuous learning, discovery, and contribution to the cybersecurity community.
          </p>
        </motion.div>

        <div className="space-y-16">
          {achievements.map((section, sectionIndex) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center">
                  <section.icon className="w-6 h-6 text-accent-blue" />
                </div>
                <h2 className="font-display text-2xl font-bold">{section.category}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                    className="glass-card p-6 rounded-xl flex items-start gap-4 hover:bg-white/10 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-accent-blue" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <span className="text-xs text-accent-green flex-shrink-0">{item.date}</span>
                      </div>
                      <p className="text-sm text-foreground-muted mt-1">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
