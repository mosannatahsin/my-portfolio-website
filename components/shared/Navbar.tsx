"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Courses", href: "/courses" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "backdrop-blur-2xl bg-background/80 border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue to-accent-purple rounded-lg opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 border border-accent-blue/30 rounded-lg" />
              <Shield className="w-5 h-5 text-accent-blue relative z-10" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-tight text-foreground">
                MOSANNA
              </span>
              <span className="text-[10px] tracking-[0.3em] text-foreground-muted uppercase">
                TAHSIN
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                  pathname === item.href
                    ? "text-accent-blue"
                    : "text-foreground-muted hover:text-foreground"
                )}
              >
                {pathname === item.href && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-accent-blue/10 rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/consulting"
              className="px-5 py-2.5 text-sm font-medium text-background bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg hover:opacity-90 transition-opacity"
            >
              Book Consultation
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl"
          >
            <div className="container-custom py-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                    pathname === item.href
                      ? "bg-accent-blue/10 text-accent-blue"
                      : "text-foreground-muted hover:text-foreground hover:bg-white/5"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="/consulting"
                  className="block px-4 py-3 text-sm font-medium text-center text-background bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
