"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, BarChart, ArrowRight, Users } from "lucide-react";

const courses = [
  {
    title: "Web Application Penetration Testing",
    description: "Master the art of finding and exploiting web vulnerabilities with hands-on labs.",
    duration: "12 Weeks",
    difficulty: "Intermediate",
    students: 2340,
    price: 299,
    category: "Offensive Security",
  },
  {
    title: "Bug Bounty Hunting Masterclass",
    description: "Learn proven methodologies for finding critical bugs in real-world programs.",
    duration: "8 Weeks",
    difficulty: "Advanced",
    students: 1850,
    price: 399,
    category: "Bug Bounty",
  },
  {
    title: "API Security Fundamentals",
    description: "Comprehensive guide to securing REST and GraphQL APIs from common threats.",
    duration: "6 Weeks",
    difficulty: "Beginner",
    students: 3200,
    price: 199,
    category: "API Security",
  },
];

export function FeaturedCourses() {
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
            <span className="text-accent-green text-sm font-medium tracking-wider uppercase mb-4 block">
              Education
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Courses</span>
            </h2>
            <p className="text-foreground-muted max-w-xl">
              Practical, hands-on cybersecurity courses designed by industry professionals.
            </p>
          </div>
          <Link
            href="/courses"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-accent-blue hover:text-accent-purple transition-colors group"
          >
            Browse All Courses
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover-lift"
            >
              <div className="h-40 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 relative">
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-background/80 backdrop-blur text-foreground">
                    {course.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-accent-green/20 text-accent-green border border-accent-green/20 font-semibold">
                    ${course.price}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display font-semibold text-lg mb-3 group-hover:text-accent-blue transition-colors line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-foreground-muted text-sm leading-relaxed mb-4 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-foreground-muted mb-6">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <BarChart className="w-3.5 h-3.5" />
                    {course.difficulty}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    {course.students.toLocaleString()}
                  </div>
                </div>

                <Link
                  href="/courses"
                  className="block w-full text-center py-2.5 rounded-lg border border-border text-sm font-medium hover:bg-accent-blue/10 hover:border-accent-blue/30 hover:text-accent-blue transition-all"
                >
                  Enroll Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
