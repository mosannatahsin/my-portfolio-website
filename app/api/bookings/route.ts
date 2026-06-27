import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { serviceId, date, time, notes, amount } = body;

    const booking = await prisma.booking.create({
      data: {
        userId: session.user.id,
        serviceId,
        date: new Date(date),
        time,
        notes,
        amount: parseFloat(amount),
      },
    });

    return NextResponse.json({ success: true, booking });
  } catch {
    return NextResponse.json({ error: "Booking failed" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const bookings = await prisma.booking.findMany({
      where: { userId: session.user.id },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(bookings);
  } catch {
    return NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 });
  }
}
