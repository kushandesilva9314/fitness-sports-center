import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Contact from "@/models/Contact";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    await Contact.findByIdAndDelete(params.id);
    return NextResponse.json({ success: true, message: "Deleted successfully." });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json({ success: false, error: "Failed to delete." }, { status: 500 });
  }
}