import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { BookOpen, Clock, Award, TrendingUp, Play, CheckCircle } from "lucide-react";

export default async function StudentDashboardPage() {
  const session = await auth();
  if (!session) redirect("/auth/login");

  const courses = [
    {
      title: "Web Application Penetration Testing",
      progress: 75,
      totalLessons: 48,
      completedLessons: 36,
      lastAccessed: "2 hours ago",
      certificate: false,
    },
    {
      title: "API Security Fundamentals",
      progress: 100,
      totalLessons: 30,
      completedLessons: 30,
      lastAccessed: "1 week ago",
      certificate: true,
    },
    {
      title: "Bug Bounty Hunting Masterclass",
      progress: 30,
      totalLessons: 36,
      completedLessons: 11,
      lastAccessed: "3 days ago",
      certificate: false,
    },
  ];

  return (
    <div>
      <h1 className="font-display text-3xl font-bold mb-2">Student Dashboard</h1>
      <p className="text-foreground-muted mb-8">Track your learning progress</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="glass-card p-6 rounded-2xl">
          <BookOpen className="w-6 h-6 text-accent-blue mb-4" />
          <p className="text-2xl font-bold">3</p>
          <p className="text-sm text-foreground-muted">Courses Enrolled</p>
        </div>
        <div className="glass-card p-6 rounded-2xl">
          <Clock className="w-6 h-6 text-accent-green mb-4" />
          <p className="text-2xl font-bold">47</p>
          <p className="text-sm text-foreground-muted">Hours Learned</p>
        </div>
        <div className="glass-card p-6 rounded-2xl">
          <Award className="w-6 h-6 text-accent-purple mb-4" />
          <p className="text-2xl font-bold">1</p>
          <p className="text-sm text-foreground-muted">Certificates Earned</p>
        </div>
      </div>

      <div className="space-y-4">
        {courses.map((course) => (
          <div key={course.title} className="glass-card p-6 rounded-2xl">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-display font-semibold text-lg">{course.title}</h3>
                <p className="text-sm text-foreground-muted mt-1">
                  {course.completedLessons} of {course.totalLessons} lessons completed
                </p>
              </div>
              {course.certificate && (
                <span className="px-3 py-1 text-xs rounded-full bg-accent-green/10 text-accent-green border border-accent-green/20">
                  Certified
                </span>
              )}
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-foreground-muted">{course.progress}% complete</span>
                <span className="text-foreground-muted">{course.lastAccessed}</span>
              </div>
              <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent-blue to-accent-purple transition-all"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>

            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-blue/10 text-accent-blue text-sm font-medium hover:bg-accent-blue/20 transition-colors">
              {course.progress === 100 ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  View Certificate
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  Continue Learning
                </>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
