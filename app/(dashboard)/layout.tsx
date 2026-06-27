import Link from "next/link";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import {
  Shield,
  LayoutDashboard,
  BookOpen,
  Calendar,
  CreditCard,
  Settings,
  LogOut,
  Users,
  BarChart3,
  FileText,
} from "lucide-react";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) redirect("/auth/login");

  const userRole = session.user?.role as string;

  const navItems = [
    { href: "/dashboard/client", label: "Dashboard", icon: LayoutDashboard, roles: ["CLIENT", "ADMIN", "STUDENT"] },
    { href: "/dashboard/student", label: "My Courses", icon: BookOpen, roles: ["STUDENT", "ADMIN"] },
    { href: "/dashboard/client/bookings", label: "Bookings", icon: Calendar, roles: ["CLIENT", "ADMIN"] },
    { href: "/dashboard/client/invoices", label: "Invoices", icon: CreditCard, roles: ["CLIENT", "ADMIN"] },
    { href: "/dashboard/admin", label: "Admin Panel", icon: BarChart3, roles: ["ADMIN"] },
    { href: "/dashboard/admin/users", label: "Users", icon: Users, roles: ["ADMIN"] },
    { href: "/dashboard/admin/courses", label: "Manage Courses", icon: FileText, roles: ["ADMIN"] },
    { href: "/dashboard/client/settings", label: "Settings", icon: Settings, roles: ["CLIENT", "ADMIN", "STUDENT"] },
  ];

  const filteredNav = navItems.filter((item) => item.roles.includes(userRole));

  return (
    <div className="min-h-screen pt-20 flex">
      <aside className="w-64 border-r border-border bg-background/50 backdrop-blur-xl hidden md:block fixed h-full">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center">
              <Shield className="w-5 h-5 text-accent-blue" />
            </div>
            <div>
              <p className="font-display font-bold text-sm">{session.user?.name || "User"}</p>
              <p className="text-xs text-foreground-muted capitalize">{userRole.toLowerCase()}</p>
            </div>
          </div>

          <nav className="space-y-1">
            {filteredNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 text-foreground-muted hover:text-foreground transition-colors text-sm"
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-border">
            <form action="/api/auth/signout" method="POST">
              <button
                type="submit"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 text-foreground-muted hover:text-status-error transition-colors text-sm w-full"
              >
                <LogOut className="w-5 h-5" />
                Sign Out
              </button>
            </form>
          </div>
        </div>
      </aside>

      <main className="flex-1 md:ml-64 p-6 md:p-10">{children}</main>
    </div>
  );
}
