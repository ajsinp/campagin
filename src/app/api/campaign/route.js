import { NextResponse } from "next/server";

// 🧠 Temporary in-memory data store
let campaigns = [];

// ✅ GET — return all campaigns
export async function GET() {
  return NextResponse.json(campaigns);
}

// ✅ POST — create a new campaign
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, type, description } = body;

    if (!name || !type || !description) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const newCampaign = {
      id: Date.now(),
      name,
      type,
      description,
      status: "Active",
      createdAt: new Date().toISOString(),
    };

    campaigns.push(newCampaign);
    return NextResponse.json(newCampaign, { status: 201 });
  } catch (err) {
    console.error("POST Error:", err);
    return NextResponse.json({ error: "Failed to save campaign" }, { status: 500 });
  }
}
