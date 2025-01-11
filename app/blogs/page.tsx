"use client";
import FeaturedBlog from "@/components/oldComponents/Blogs/FeaturedBlog/FeaturedBlog";
import RecentPost from "@/components/oldComponents/Blogs/RecentPost/RecentPost";
import { BlogsHeader } from "@/components/oldComponents/Blogs/BlogsHeader/BlogsHeader";
import { BlogsNavbar } from "@/components/oldComponents/Blogs/BlogsNavbar/BlogsNavbar";
import { useEffect, useState } from "react";

const Page = () => {
  const [blogs, setBlogs] = useState<BlogResponseProps>({
    featuredData: { data: [], page: { limit: 0, total: 0, next: 0 } },
    blogsData: { data: [], page: { limit: 0, total: 0, next: 0 } },
  });
  const [featuredBlog, setFeaturedBlogs] = useState<Blog[]>([]);
  const [recentBlog, setRecentBlogs] = useState<Blog[]>([]);
  const [searchTerms, setSearchTerms] = useState<string>("");
  const [postType, setPostType] = useState<string>("");
  const [offset, setOffset] = useState(0);
  const [tag, setTag] = useState("All");

  const fetchSearchData = async () => {
    const data = await fetch(
      "/api/blogs/search?" +
        new URLSearchParams({
          query: searchTerms,
          tag: tag,
        })
    );
    const res = await data.json();

    if (!searchTerms && tag === "All") {
      setPostType("Recent Post");
      setFeaturedBlogs(blogs.featuredData.data);
      setRecentBlogs(blogs.blogsData.data);
    } else {
      setPostType("Search Post");
      setFeaturedBlogs([]);
      setRecentBlogs(res.blogsData.data);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "/api/blogs?" + new URLSearchParams({ offset: offset.toString() })
      );
      const res = await data.json();
      if (recentBlog.length === 0) {
        setBlogs(res);
        setFeaturedBlogs(res.featuredData.data);
        setRecentBlogs(res.blogsData.data);
      } else {
        setRecentBlogs((prevBlogs) => [...prevBlogs, ...res.blogsData.data]);
        setBlogs((prevVal: any) => {
          return { ...prevVal, blogsData: { data: [...recentBlog] } };
        });
      }
    };
    fetchData();
  }, [offset]);

  useEffect(() => {
    fetchSearchData();
  }, [tag]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchSearchData();
    }, 700);
    return () => clearTimeout(timeoutId);
  }, [searchTerms]);

  return (
    <main>
      <BlogsHeader />
      <BlogsNavbar
        text={searchTerms}
        setText={setSearchTerms}
        tag={tag}
        setTag={setTag}
      />
      <div className="flex md:flex-col  gap-[124px]   mt-[42px]  md:mt-[84px]">
        {featuredBlog.length > 0 && (
          <FeaturedBlog title={"Featured Post"} blogs={featuredBlog} />
        )}
        {recentBlog && <RecentPost title={postType} blogs={recentBlog} />}
      </div>

      {blogs && blogs.blogsData?.page?.total > offset && (
        <div className="w-full  flex justify-center mt-[26px] mb-[132px]">
          <div
            className={`w-fit items-center px-6 py-3.5 border-[#717171] cursor-pointer background-slate rounded-lg`}
          >
            <span
              className="text-muted font-semibold"
              onClick={() => {
                setOffset(offset + 6);
              }}
            >
              See more blogs
            </span>
          </div>
        </div>
      )}
    </main>
  );
};

export default Page;
