"use client";

import Link from "next/link";
import { Shield, Github, Twitter, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Security Consulting", href: "/services" },
    { label: "Penetration Testing", href: "/services" },
    { label: "Bug Bounty Consulting", href: "/services" },
    { label: "Security Training", href: "/courses" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Achievements", href: "/achievements" },
    { label: "Resume", href: "/resume" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Courses", href: "/courses" },
    { label: "Contact", href: "/contact" },
    { label: "Consulting", href: "/consulting" },
  ],
};

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:contact@mosannatahsin.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background/50 backdrop-blur-xl">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue to-accent-purple rounded-lg opacity-20" />
                <div className="absolute inset-0 border border-accent-blue/30 rounded-lg" />
                <Shield className="w-5 h-5 text-accent-blue relative z-10" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg tracking-tight">
                  MOSANNA
                </span>
                <span className="text-[10px] tracking-[0.3em] text-foreground-muted uppercase">
                  TAHSIN
                </span>
              </div>
            </Link>
            <p className="text-foreground-muted text-sm leading-relaxed max-w-sm mb-6">
              Premium cybersecurity consulting, ethical hacking, and security education.
              Protecting digital assets with expertise and innovation.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-border hover:border-accent-blue/50 hover:text-accent-blue transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted hover:text-accent-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted hover:text-accent-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted hover:text-accent-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground-muted">
            © {new Date().getFullYear()} Mosanna Tahsin. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
