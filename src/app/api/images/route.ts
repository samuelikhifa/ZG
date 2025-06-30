import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query") || "nature";
  const API_KEY = process.env.PIXABAY_KEY;

  if (!API_KEY) {
    return NextResponse.json({ error: "Missing API key" }, { status: 500 });
  }
  console.log("API KEY:", API_KEY);

  try {
    const res = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}`
    );
    return NextResponse.json(res.data);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch images" },
      { status: 500 }
    );
  }
}
