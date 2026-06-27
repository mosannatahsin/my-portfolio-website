import { signOut } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST() {
  await signOut({ redirectTo: "/" });
  return NextResponse.redirect(new URL("/", process.env.NEXTAUTH_URL));
}
