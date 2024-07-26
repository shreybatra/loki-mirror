import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const eventId = request.nextUrl.searchParams.get("event_id");
  const redirectUrl =
    request.nextUrl.searchParams.get("redirect_url") ||
    "https://comsocloud.io/";
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/web-analytics`, {
    method: "PUT",
    body: JSON.stringify({
      type: "CLICK_EVENT",
      eventId: eventId,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return NextResponse.redirect(new URL(redirectUrl));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/redirect",
};
