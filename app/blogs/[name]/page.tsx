import BlogButton from "@/components/Blogs/BlogButton/BlogButton";

import { FaCircle } from "react-icons/fa";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import blogCard from "@/assets/svg/blog-bg.svg";
import Image from "next/image";

import blogs from "./../blogs";
async function getData(name: any) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BLOG_URL}/blogs/${name}`, {
    cache: "no-store",
  });

  return res.json();
}

export default async function Page({ params }: { params: { name: string } }) {
  // const data = await getData(params.name);
  //   console.log("dataaaaa", data);
  const data = blogs[0];
  if (!data.createdOn) {
    return <div>Something went wrong</div>;
  }

  const { readTime, createdOn, title, tags, author } = data;
  const newDate = new Date(0);
  newDate.setUTCSeconds(data.createdOn);
  const finalDate = newDate.toString().split(" ");
  return (
    <main className="mb-20 mt-16">
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl font-bold leading-[3.726rem]">{title}</h1>
        <div className="flex flex-row items-center justify-items-center gap-4 text-base   text-muted">
          <p>{finalDate[1] + ", " + finalDate[2]}</p>
          <FaCircle />
          <p>{readTime} mins read</p>
          <FaCircle />
          {tags.map((tag) => (
            <BlogButton tag={tag} />
          ))}
        </div>
        <div className="flex">
          <div className="flex-col">
            {" "}
            <p className="text-base">{author}</p>{" "}
            <p className="text-sm italic ">CosmoCloud</p>{" "}
          </div>
        </div>
        <div>
          {" "}
          <Image src={blogCard} alt="blog-image-card" />{" "}
        </div>
        <div className="flex mt-20 gap-16 border-4">
          <Markdown
            remarkPlugins={remarkGfm}
            components={{
              h1(props) {
                const { node, ...rest } = props;
                return <h1 className="px-3  text-3xl font-bold" {...rest} />;
              },
              h2(props) {
                const { node, ...rest } = props;
                return (
                  <h2 className="px-3  text-2xl font-semibold" {...rest} />
                );
              },
              p(props) {
                const { node, ...rest } = props;
                return <p className="px-3  text-sm font-normal" {...rest} />;
              },
              blockquote(props) {
                const { node, ...rest } = props;
                return (
                  <blockquote className="px-3  text-lg font-normal" {...rest} />
                );
              },
              img(props) {
                const { node, ...rest } = props;
                console.log(props);
                <Image src={blogCard} alt="blog-image" />;
              },
              code(props) {
                const { children, className, node, ...rest } = props;
                const match = /language-(\w+)/.exec(className || "");
                console.log(match);
                return (
                  <SyntaxHighlighter
                    className="text-lg"
                    showLineNumbers
                    {...rest}
                    PreTag="div"
                    children={String(children).replace(/\n$/, "")}
                    language={match ? match[1] : "text"}
                    style={atomDark}
                  />
                );
              },
            }}
          >
            {data.content}
          </Markdown>
        </div>
      </div>
    </main>
  );
}
