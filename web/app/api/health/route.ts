import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiUrl = process.env.API_URL || "http://localhost:3001";
    const res = await fetch(`${apiUrl}/health`);

    if (!res.ok) {
      return NextResponse.json(
        { message: "Backend API unavailable" },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching health status:", error);
    return NextResponse.json(
      { message: "Failed to connect to backend API" },
      { status: 503 }
    );
  }
}
