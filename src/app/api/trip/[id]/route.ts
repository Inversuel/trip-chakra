import { promises as fs } from "fs";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, context: any) {
  const { params } = context;
  const fileContents = await fs.readFile("db.json", "utf8");
  const jsonParse = JSON.parse(fileContents);
  const find = jsonParse.trip.find((i: { id: string }) => i.id === params.id);
  return NextResponse.json(find);
}
