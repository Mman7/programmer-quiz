import { getAnswer } from "@/src/utils/getAnswer";
import { NextRequest, NextResponse } from "next/server";
/**
 * API route for validating answers
 * Handles POST requests to validate user answers against expected responses
 *
 * @param req - Next.js Request object containing JSON payload
 * @returns JSON response with validation result
 */
export async function POST(req: NextRequest) {
  const json = await req.json();
  const response = getAnswer(json);
  return NextResponse.json(response);
}
