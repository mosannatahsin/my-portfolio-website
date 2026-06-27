import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Mosanna Tahsin | Cybersecurity Consultant & Ethical Hacker",
  description: "Premium cybersecurity consulting, penetration testing, bug bounty expertise, and security education by Mosanna Tahsin.",
  keywords: ["cybersecurity", "ethical hacker", "penetration testing", "bug bounty", "security consultant", "Mosanna Tahsin"],
  authors: [{ name: "Mosanna Tahsin" }],
  openGraph: {
    title: "Mosanna Tahsin | Cybersecurity Consultant",
    description: "Premium cybersecurity consulting and security research.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-green/5 rounded-full blur-3xl" />
        </div>
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
