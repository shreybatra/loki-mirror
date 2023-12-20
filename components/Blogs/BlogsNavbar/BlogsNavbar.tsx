import { CiSearch } from "react-icons/ci";
import { blogsTagsList } from "@/constants/Blogs";
import { useEffect, useState } from "react";
import BlogTag from "../BlogTag/BlogTag";

export const BlogsNavbar = ({
  text,
  setText,
  tag,
  setTag,
}: BlogsNavbarProps) => {
  const [selected, setSelected] = useState<string>(tag);

  useEffect(() => {
    setTag(selected);
  }, [selected, setTag]);

  return (
    <div className="flex flex-row justify-between w-full mt-40">
      <div className="flex gap-4">
        {blogsTagsList.map((tagValue, i) => {
          return (
            <BlogTag
              key={i}
              tagValue={tagValue}
              selected={selected}
              setSelected={setSelected}
            />
          );
        })}
      </div>
      <div className="flex items-center background-slate rounded-lg px-6 py-3.5 border-slate gap-3">
        <CiSearch />
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          className="border-none background-slate outline-none"
          type="text"
          placeholder="Search here..."
        />
      </div>
    </div>
  );
};
