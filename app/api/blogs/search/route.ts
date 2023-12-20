import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const tag = searchParams.get("tag");
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BLOG_URL
    }/blogs?is_featured=false&query=${query}&tag=${tag?.toLowerCase()}`,
    {
      cache: "no-store",
    }
  );

  const blogsData = await res.json();
  return Response.json({ blogsData });
}
