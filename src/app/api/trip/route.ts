import { promises as fs } from "fs";
import { NextRequest, NextResponse } from "next/server";
import dbjson from "../../../../db.json";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  let page_p = searchParams.get("_page");
  let per_page_p = searchParams.get("_per_page");

  const page = parseInt(page_p ?? "1") || 1,
    per_page = parseInt(per_page_p ?? "10") || 10;

  return NextResponse.json(paginator(dbjson.trip, page, per_page));
}

function paginator(items: Array<any>, page: number, per_page: number) {
  const offset = (page - 1) * per_page,
    paginatedItems = items.slice(offset).slice(0, per_page),
    total_pages = Math.ceil(items.length / per_page);
  return {
    page: page,
    per_page: per_page,
    pre_page: page - 1 ? page - 1 : null,
    next_page: total_pages > page ? page + 1 : null,
    total: items.length,
    total_pages: total_pages,
    data: paginatedItems,
  };
}
