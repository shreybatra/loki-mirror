"use client";
import Image from "next/image";
import Markdown from "react-markdown";
import { BlogsSpecs } from "../BlogSpecs/BlogSpecs";
const BlogCard = ({
  id,
  title,
  content,
  createdOn,
  readTime,
  tags,
  image,
  type,
  length,
  customClass,
}: Blog) => {
  return (
    <div
      className={`p-4 bg-[#131212] rounded-lg border-2 border-[#8D8D8D]  ${
        type ? "grid grid-cols-2 gap-4" : ""
      }`}
    >
      <div>
        <Image
          src={image}
          alt="blog-card"
          width={1000}
          height={1000}
          className={`${customClass ? "md:h-[250px]" : "md:h-full"} w-full`}
        />
      </div>
      <div>
        <h2 className="text-[18px] font-[700] mt-4 mb-2">{title}</h2>
        <Markdown className="text-muted">
          {content.substring(0, length || 100) + "..."}
        </Markdown>
        <BlogsSpecs createdOn={createdOn} readTime={readTime} tags={tags} />
      </div>
    </div>
  );
};

export default BlogCard;
