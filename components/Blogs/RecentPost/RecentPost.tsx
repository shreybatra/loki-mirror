import Link from "next/link";
import BlogCard from "../BlogCard/BlogCard";
const RecentPost = ({ blogs }: BlogsList) => {
  return (
    <div className="px-20 mt-44">
      <h2 className="text-xl mb-6">Recent Post</h2>
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
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentPost;
