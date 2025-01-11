import React from "react";
import BlogCard from "../BlogCard/BlogCard";
import Link from "next/link";
const img = "https://cosmocloud-public.s3.ap-south-1.amazonaws.com/test.png";

const FeaturedBlog = ({ blogs,title }: BlogsList) => {
  return (
    <div>
      <h3 className="text-xl font-bold ">{title}</h3>
      <div className="mt-[24px]  flex flex-row gap-[32px] items-center">
        <div className=" basis-1/2">
          <BlogCard
            id={blogs[0].id}
            title={blogs[0].title}
            content={blogs[0].content}
            createdOn={blogs[0].createdOn}
            readTime={blogs[0].readTime}
            tags={blogs[0].tags}
            // image={blogs[0].image}
            image={img}
            length={400}
            customClass="md:h-200px"
          />
        </div>
        <div className="flex flex-col basis-1/2 gap-[24px]">
          {blogs.slice(1, 3).map((blog: Blog) => (
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
                type="LEFT"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlog;
