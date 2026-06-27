import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const adminPassword = await bcrypt.hash("admin123", 12);
  await prisma.user.upsert({
    where: { email: "admin@mosannatahsin.com" },
    update: {},
    create: {
      name: "Admin User",
      email: "admin@mosannatahsin.com",
      password: adminPassword,
      role: "ADMIN",
    },
  });

  const courses = [
    {
      title: "Web Application Penetration Testing",
      slug: "web-app-penetration-testing",
      description: "Master the art of finding and exploiting web vulnerabilities with hands-on labs.",
      duration: "12 Weeks",
      difficulty: "INTERMEDIATE",
      price: 299,
      instructor: "Mosanna Tahsin",
      category: "Offensive Security",
      tags: ["Web Security", "OWASP", "Exploitation"],
      published: true,
    },
    {
      title: "Bug Bounty Hunting Masterclass",
      slug: "bug-bounty-masterclass",
      description: "Learn proven methodologies for finding critical bugs in real-world programs.",
      duration: "8 Weeks",
      difficulty: "ADVANCED",
      price: 399,
      instructor: "Mosanna Tahsin",
      category: "Bug Bounty",
      tags: ["Bug Bounty", "Recon", "Reporting"],
      published: true,
    },
    {
      title: "API Security Fundamentals",
      slug: "api-security-fundamentals",
      description: "Comprehensive guide to securing REST and GraphQL APIs from common threats.",
      duration: "6 Weeks",
      difficulty: "BEGINNER",
      price: 199,
      instructor: "Mosanna Tahsin",
      category: "API Security",
      tags: ["API", "REST", "GraphQL"],
      published: true,
    },
  ];

  for (const course of courses) {
    await prisma.course.upsert({
      where: { slug: course.slug },
      update: {},
      create: course as any,
    });
  }

  const services = [
    {
      title: "Cybersecurity Consulting",
      slug: "cybersecurity-consulting",
      description: "Strategic security advisory tailored to your organization.",
      features: ["Risk Assessment", "Compliance", "Security Architecture"],
      deliverables: ["Executive Report", "Risk Register", "Roadmap"],
      process: ["Discovery", "Assessment", "Analysis", "Recommendations"],
      timeline: "2-4 Weeks",
      price: "Custom Quote",
      icon: "Shield",
      featured: true,
    },
    {
      title: "Penetration Testing",
      slug: "penetration-testing",
      description: "Authorized simulated attacks to evaluate security posture.",
      features: ["Web Apps", "Networks", "Mobile", "Cloud"],
      deliverables: ["Technical Report", "Executive Summary", "POC"],
      process: ["Reconnaissance", "Discovery", "Exploitation", "Reporting"],
      timeline: "1-3 Weeks",
      price: "From $2,500",
      icon: "Search",
      featured: true,
    },
  ];

  for (const service of services) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: {},
      create: service as any,
    });
  }

  const posts = [
    {
      title: "Advanced SSRF Exploitation Techniques",
      slug: "ssrf-cloud-exploitation",
      excerpt: "Exploring Server-Side Request Forgery in modern cloud architectures.",
      content: "Full article content here...",
      category: "Research",
      tags: ["SSRF", "Cloud", "Microservices"],
      published: true,
      author: "Mosanna Tahsin",
    },
    {
      title: "Building a Secure CI/CD Pipeline",
      slug: "secure-cicd-pipeline",
      excerpt: "A comprehensive guide to implementing security controls in CI/CD.",
      content: "Full article content here...",
      category: "Tutorial",
      tags: ["DevSecOps", "CI/CD", "SAST"],
      published: true,
      author: "Mosanna Tahsin",
    },
  ];

  for (const post of posts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: {},
      create: post as any,
    });
  }

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
