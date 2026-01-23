import { getAnswer } from "@/src/utils/getAnswer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const json = await req.json();
  const response = getAnswer(json);
  return NextResponse.json(response);
}
