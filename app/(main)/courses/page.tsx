"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Clock, BarChart, Users, Search, Star, ArrowRight, BookOpen } from "lucide-react";

const categories = ["All", "Offensive Security", "Bug Bounty", "API Security", "Cloud Security", "DevSecOps"];

const courses = [
  {
    title: "Web Application Penetration Testing",
    slug: "web-app-penetration-testing",
    description: "Master the art of finding and exploiting web vulnerabilities with hands-on labs covering OWASP Top 10 and beyond.",
    duration: "12 Weeks",
    difficulty: "Intermediate",
    students: 2340,
    rating: 4.9,
    price: 299,
    category: "Offensive Security",
    instructor: "Mosanna Tahsin",
    modules: 8,
    lessons: 48,
  },
  {
    title: "Bug Bounty Hunting Masterclass",
    slug: "bug-bounty-masterclass",
    description: "Learn proven methodologies for finding critical bugs in real-world programs. From reconnaissance to report writing.",
    duration: "8 Weeks",
    difficulty: "Advanced",
    students: 1850,
    rating: 4.8,
    price: 399,
    category: "Bug Bounty",
    instructor: "Mosanna Tahsin",
    modules: 6,
    lessons: 36,
  },
  {
    title: "API Security Fundamentals",
    slug: "api-security-fundamentals",
    description: "Comprehensive guide to securing REST and GraphQL APIs from common threats and vulnerabilities.",
    duration: "6 Weeks",
    difficulty: "Beginner",
    students: 3200,
    rating: 4.9,
    price: 199,
    category: "API Security",
    instructor: "Mosanna Tahsin",
    modules: 5,
    lessons: 30,
  },
  {
    title: "Cloud Security Essentials",
    slug: "cloud-security-essentials",
    description: "Secure AWS, Azure, and GCP environments. Learn cloud-native security controls and compliance.",
    duration: "10 Weeks",
    difficulty: "Intermediate",
    students: 1560,
    rating: 4.7,
    price: 349,
    category: "Cloud Security",
    instructor: "Mosanna Tahsin",
    modules: 7,
    lessons: 42,
  },
  {
    title: "DevSecOps Pipeline Security",
    slug: "devsecops-pipeline",
    description: "Integrate security into your CI/CD pipeline. SAST, DAST, SCA, and container security.",
    duration: "8 Weeks",
    difficulty: "Intermediate",
    students: 980,
    rating: 4.8,
    price: 279,
    category: "DevSecOps",
    instructor: "Mosanna Tahsin",
    modules: 6,
    lessons: 32,
  },
  {
    title: "Advanced Exploitation Techniques",
    slug: "advanced-exploitation",
    description: "Deep dive into advanced exploitation methods, custom payload development, and evasion techniques.",
    duration: "14 Weeks",
    difficulty: "Expert",
    students: 720,
    rating: 5.0,
    price: 499,
    category: "Offensive Security",
    instructor: "Mosanna Tahsin",
    modules: 10,
    lessons: 60,
  },
];

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = activeCategory === "All" || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent-green text-sm font-medium tracking-wider uppercase mb-4 block">
            Education Platform
          </span>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Security <span className="gradient-text">Courses</span>
          </h1>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            Practical, hands-on cybersecurity courses designed by industry professionals 
            for real-world application.
          </p>
        </motion.div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-muted" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-border text-foreground placeholder:text-foreground-muted/50 focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue/50"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-accent-blue to-accent-purple text-background"
                  : "glass-card text-foreground-muted hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card rounded-2xl overflow-hidden hover:bg-white/10 transition-all hover-lift"
            >
              <div className="h-44 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 relative">
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-background/80 backdrop-blur text-foreground">
                    {course.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-accent-green/20 text-accent-green border border-accent-green/20 font-bold">
                    ${course.price}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-accent-blue/30" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-accent-blue transition-colors">
                  {course.title}
                </h3>
                <p className="text-foreground-muted text-sm leading-relaxed mb-4 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-foreground-muted mb-4">
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

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-accent-green text-accent-green" />
                    <span className="text-sm font-medium">{course.rating}</span>
                    <span className="text-xs text-foreground-muted">({course.modules} modules)</span>
                  </div>
                  <span className="text-xs text-foreground-muted">{course.lessons} lessons</span>
                </div>

                <button className="w-full py-2.5 rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple text-background font-medium text-sm hover:opacity-90 transition-opacity">
                  Enroll Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
