import { NextRequest, NextResponse } from "next/server";
import dbjson from "../../../../../db.json";

export async function GET(request: NextRequest, context: any) {
  const { params } = context;

  const find = dbjson.trip.find((i: { id: string }) => i.id === params.id);
  return NextResponse.json(find);
}
