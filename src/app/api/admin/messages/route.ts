import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Contact from "@/models/Contact";

export async function GET() {
  try {
    await connectDB();
    const messages = await Contact.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, messages });
  } catch (error) {
    console.error("Admin fetch error:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch messages." }, { status: 500 });
  }
}