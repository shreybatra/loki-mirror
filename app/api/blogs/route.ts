import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const offset = searchParams.get("offset");
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BLOG_URL}/blogs?is_featured=false&offset=${offset}`,
    {
      cache: "no-store",
    }
  );
  const blogsData = await res.json();
  const res2 = await fetch(
    `${process.env.NEXT_PUBLIC_BLOG_URL}/blogs?is_featured=true`,
    {
      cache: "no-store",
    }
  );

  const featuredData = await res2.json();

  return Response.json({ blogsData, featuredData });
}
