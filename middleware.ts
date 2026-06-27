import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const userRole = req.auth?.user?.role;

  const isApiAuthRoute = nextUrl.pathname.startsWith("/api/auth");
  const isPublicRoute = ["/", "/about", "/portfolio", "/achievements", "/services", "/courses", "/blog", "/contact", "/resume", "/consulting", "/auth/login", "/auth/signup", "/auth/error"].includes(nextUrl.pathname);
  const isDashboardRoute = nextUrl.pathname.startsWith("/dashboard");

  if (isApiAuthRoute) {
    return NextResponse.next();
  }

  if (!isLoggedIn && isDashboardRoute) {
    return NextResponse.redirect(new URL("/auth/login", nextUrl));
  }

  if (isLoggedIn && nextUrl.pathname.startsWith("/auth/")) {
    return NextResponse.redirect(new URL("/dashboard/client", nextUrl));
  }

  // Role-based access
  if (nextUrl.pathname.startsWith("/dashboard/admin") && userRole !== "ADMIN") {
    return NextResponse.redirect(new URL("/dashboard/client", nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\.png$).*)"],
};
