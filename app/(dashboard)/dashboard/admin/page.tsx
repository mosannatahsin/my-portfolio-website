import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import {
  Users,
  BookOpen,
  Calendar,
  CreditCard,
  TrendingUp,
  Shield,
  ArrowUpRight,
} from "lucide-react";

export default async function AdminDashboardPage() {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") redirect("/dashboard/client");

  const stats = [
    { label: "Total Users", value: "1,240", icon: Users, change: "+12%", color: "text-accent-blue" },
    { label: "Active Courses", value: "12", icon: BookOpen, change: "+3", color: "text-accent-green" },
    { label: "Bookings", value: "89", icon: Calendar, change: "+24%", color: "text-accent-purple" },
    { label: "Revenue", value: "$45,200", icon: CreditCard, change: "+18%", color: "text-status-success" },
  ];

  const recentUsers = [
    { name: "Alice Johnson", email: "alice@example.com", role: "STUDENT", date: "Dec 20, 2025" },
    { name: "Bob Smith", email: "bob@example.com", role: "CLIENT", date: "Dec 19, 2025" },
    { name: "Carol White", email: "carol@example.com", role: "STUDENT", date: "Dec 18, 2025" },
    { name: "David Brown", email: "david@example.com", role: "CLIENT", date: "Dec 17, 2025" },
  ];

  return (
    <div>
      <h1 className="font-display text-3xl font-bold mb-2">Admin Dashboard</h1>
      <p className="text-foreground-muted mb-8">Manage your platform</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="glass-card p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
              <span className="text-xs text-accent-green flex items-center gap-1">
                <ArrowUpRight className="w-3 h-3" />
                {stat.change}
              </span>
            </div>
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-sm text-foreground-muted">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card p-6 rounded-2xl">
          <h2 className="font-display font-semibold text-xl mb-6">Recent Users</h2>
          <div className="space-y-3">
            {recentUsers.map((user) => (
              <div
                key={user.email}
                className="flex items-center justify-between p-3 rounded-xl bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-background font-bold text-sm">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{user.name}</p>
                    <p className="text-xs text-foreground-muted">{user.email}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span
                    className={`px-2 py-0.5 text-xs rounded-full ${
                      user.role === "ADMIN"
                        ? "bg-accent-purple/10 text-accent-purple"
                        : user.role === "STUDENT"
                        ? "bg-accent-green/10 text-accent-green"
                        : "bg-accent-blue/10 text-accent-blue"
                    }`}
                  >
                    {user.role}
                  </span>
                  <p className="text-xs text-foreground-muted mt-1">{user.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6 rounded-2xl">
          <h2 className="font-display font-semibold text-xl mb-6">Quick Actions</h2>
          <div className="space-y-3">
            {[
              { label: "Add New Course", icon: BookOpen, href: "/dashboard/admin/courses" },
              { label: "Manage Users", icon: Users, href: "/dashboard/admin/users" },
              { label: "View Bookings", icon: Calendar, href: "/dashboard/client/bookings" },
              { label: "Security Settings", icon: Shield, href: "/dashboard/client/settings" },
            ].map((action) => (
              <a
                key={action.label}
                href={action.href}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
              >
                <action.icon className="w-5 h-5 text-accent-blue" />
                <span className="text-sm font-medium flex-1">{action.label}</span>
                <ArrowUpRight className="w-4 h-4 text-foreground-muted group-hover:text-accent-blue transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
