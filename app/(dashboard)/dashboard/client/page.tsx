import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { motion } from "framer-motion";
import {
  Calendar,
  CreditCard,
  BookOpen,
  TrendingUp,
  Shield,
  Clock,
} from "lucide-react";

export default async function ClientDashboardPage() {
  const session = await auth();
  if (!session) redirect("/auth/login");

  const stats = [
    { label: "Active Bookings", value: "3", icon: Calendar, color: "text-accent-blue" },
    { label: "Courses Enrolled", value: "2", icon: BookOpen, color: "text-accent-green" },
    { label: "Total Spent", value: "$1,200", icon: CreditCard, color: "text-accent-purple" },
    { label: "Security Score", value: "92%", icon: Shield, color: "text-status-success" },
  ];

  const recentActivity = [
    { title: "Penetration Test Booked", date: "Dec 20, 2025", status: "Confirmed", type: "booking" },
    { title: "Web App Security Course", date: "Dec 18, 2025", status: "In Progress", type: "course" },
    { title: "Security Assessment Report", date: "Dec 15, 2025", status: "Completed", type: "report" },
    { title: "API Security Course", date: "Dec 10, 2025", status: "Completed", type: "course" },
  ];

  return (
    <div>
      <h1 className="font-display text-3xl font-bold mb-2">Client Dashboard</h1>
      <p className="text-foreground-muted mb-8">Welcome back, {session.user?.name}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="glass-card p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
              <TrendingUp className="w-4 h-4 text-foreground-muted" />
            </div>
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-sm text-foreground-muted">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="glass-card p-6 rounded-2xl">
        <h2 className="font-display font-semibold text-xl mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-xl bg-white/5"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent-blue" />
                </div>
                <div>
                  <p className="font-medium text-sm">{activity.title}</p>
                  <p className="text-xs text-foreground-muted">{activity.date}</p>
                </div>
              </div>
              <span
                className={`px-3 py-1 text-xs rounded-full ${
                  activity.status === "Completed"
                    ? "bg-status-success/10 text-status-success border border-status-success/20"
                    : activity.status === "In Progress"
                    ? "bg-accent-blue/10 text-accent-blue border border-accent-blue/20"
                    : "bg-status-warning/10 text-status-warning border border-status-warning/20"
                }`}
              >
                {activity.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
