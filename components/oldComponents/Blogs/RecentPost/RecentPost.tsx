import Link from "next/link";
import BlogCard from "../BlogCard/BlogCard";
const img = "https://cosmocloud-public.s3.ap-south-1.amazonaws.com/test.png";

const RecentPost = ({ blogs, title }: BlogsList) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-3 gap-x-14 gap-y-8 ">
        {blogs.map((blog: Blog) => (
          <Link key={blog.id} href={`/blogs/${blog.title}`}>
            <BlogCard
              id={blog.id}
              title={blog.title}
              content={blog.content}
              createdOn={blog.createdOn}
              readTime={blog.readTime}
              tags={blog.tags}
              // image={blog.image}
              image={img}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentPost;
