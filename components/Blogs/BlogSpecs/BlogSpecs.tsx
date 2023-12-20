import { FaCircle } from "react-icons/fa";
import BlogButton from "../BlogButton/BlogButton";
import DateConverter from "@/functions/blogs/DateConverter";
type BlogSpecsprops = {
  createdOn: number;
  readTime: number;
  tags: Array<string>;
};
export const BlogsSpecs = ({ createdOn, readTime, tags }: BlogSpecsprops) => {
  const date = DateConverter(createdOn);
  return (
    <div className="flex flex-row flex-wrap items-center justify-items-center mt-4 gap-4">
      <p className="text-[12px] opacity-[0.8] md:text-[14px]">{date}</p>

      <div className="w-[10px] h-[10px] rounded bg-[#585757]" />
      <p className="text-[12px] opacity-[0.8] md:text-[14px]">
        {readTime} mins read
      </p>
      <div className="w-[10px] h-[10px] rounded bg-[#585757]" />
      <div className="flex flex-wrap gap-2">
        {tags.map((tag,i) => (
          <BlogButton key={i} tag={tag} />
        ))}
      </div>
    </div>
  );
};
