import FeaturedBlog from "@/components/Blogs/FeaturedBlog/FeaturedBlog";
import RecentPost from "@/components/Blogs/RecentPost/RecentPost";
import { BlogsHeader } from "@/components/Blogs/BlogsHeader/BlogsHeader";
import { BlogsNavbar } from "@/components/Blogs/BlogsNavbar/BlogsNavbar";
import blogs from './blogs.js'
// async function getData() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BLOG_URL}/blogs`);
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }


const page = async () => {
  // const blogs: BlogsResponse = await getData();
  return (
    <main>
      <BlogsHeader />
      <BlogsNavbar />
      <div className="md:flex-row mt-[42px]  md:mt-[84px]">
        <FeaturedBlog />
        <RecentPost blogs={blogs} />
      </div>
    </main>
  );
};

export default page;
