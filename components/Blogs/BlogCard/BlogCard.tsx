"use client";
import BlogButton from "../BlogButton/BlogButton";
import { FaCircle } from "react-icons/fa";
import Image from "next/image";
import blogCard from "@/assets/svg/blog-bg.svg";
import Markdown from "react-markdown";
const BlogCard = ({ id, title, content, createdOn, readTime, tags }: Blog) => {
  const newDate = new Date(0);
  newDate.setUTCSeconds(createdOn);
  const finalDate = newDate.toString().split(" ");
  return (
    <div className="p-4 bg-[#131212] rounded-lg border-2 border-[#8D8D8D]">
      <Image src={blogCard} alt="blog-card" />
      <h2 className="text-lg font-bold mt-4 mb-2">{title}</h2>
      <Markdown>{content.substring(0,100)}</Markdown>
      <div className="flex flex-row items-center justify-items-center mt-4 gap-4">
        <p>{finalDate[1] + ", " + finalDate[2]}</p>
        <FaCircle />
        <p>{readTime} mins read</p>
        <FaCircle />
        {tags.map((tag) => (
          <BlogButton tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
