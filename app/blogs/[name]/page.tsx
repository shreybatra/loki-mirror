import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";
import { BlogsSpecs } from "@/components/oldComponents/Blogs/BlogSpecs/BlogSpecs";
async function getData(name: any) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BLOG_URL}/blogs/${name}`, {
    cache: "no-store",
  });

  return res.json();
}
const img = "https://cosmocloud-public.s3.ap-south-1.amazonaws.com/test.png";

export default async function Page({ params }: { params: { name: string } }) {
  const data = await getData(params.name);
  if (!data.createdOn) {
    return <div>Something went wrong</div>;
  }

  const { readTime, createdOn, title, tags, author, image } = data;
  return (
    <main className="mb-20 mt-16">
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl font-bold leading-[3.726rem]">{title}</h1>
        <BlogsSpecs tags={tags} readTime={readTime} createdOn={createdOn} />
        <div className="flex">
          <div className="flex-col">
            {" "}
            <p className="text-base">{author}</p>{" "}
            <p className="text-sm italic ">CosmoCloud</p>{" "}
          </div>
        </div>{" "}
        <div className="flex flex-col items-center  mt-20 gap-6">
          <div className="mb-16">
            <Image
              // src={image}
              src={img}
              alt="blog-image-card "
              width={1000}
              height={1000}
            />{" "}
          </div>
          <div className="w-[80%] gap-12">
            <Markdown
              className="text-lg"
              remarkPlugins={remarkGfm}
              components={{
                h1(props) {
                  const { node, ...rest } = props;
                  return <h1 className="text-4xl font-bold my-5" {...rest} />;
                },
                h2(props) {
                  const { node, ...rest } = props;
                  return (
                    <h2 className="text-3xl font-semibold my-3" {...rest} />
                  );
                },
                h3(props) {
                  const { node, ...rest } = props;
                  return (
                    <h3 className="text-2xl font-semibold my-3" {...rest} />
                  );
                },
                h4(props) {
                  const { node, ...rest } = props;
                  return (
                    <h3 className="text-xl font-semibold my-3" {...rest} />
                  );
                },
                h5(props) {
                  const { node, ...rest } = props;
                  return (
                    <h3 className="text-xl font-semibold  my-3" {...rest} />
                  );
                },
                h6(props) {
                  const { node, ...rest } = props;
                  return (
                    <h3 className="text-xl font-semibold my-3" {...rest} />
                  );
                },

                p(props) {
                  const { node, ...rest } = props;
                  return (
                    <p
                      className="pl-3 my-8 font-normal text-justify"
                      {...rest}
                    />
                  );
                },
                blockquote(props) {
                  const { node, ...rest } = props;
                  return (
                    <blockquote
                      className="pl-4 text-base font-normal security-compliance-container rounded-e-lg border-purple-500 py-1 mx-3 border-l-4"
                      {...rest}
                    />
                  );
                },

                a(props) {
                  const { href, ...rest } = props;
                  return (
                    <a
                      href={href}
                      target="_blank"
                      {...rest}
                      className="list-none font-bold text-primary-pink underline bg-black"
                    />
                  );
                },

                img(props) {
                  const { src, alt, ...rest } = props;
                  return <img src={src} alt="alt" width={500} height={500} />;
                },
                ul(props) {
                  const { node, ...rest } = props;
                  return <ul className="list-disc pl-8 my-3" {...rest} />;
                },
                ol(props) {
                  const { node, ...rest } = props;
                  return <ul className="list-decimal pl-8 my-3" {...rest} />;
                },

                code(props) {
                  const { children, className, node, ...rest } = props;
                  const match = /language-(\w+)/.exec(className || "");
                  return (
                    <SyntaxHighlighter
                      className="mx-2 my-2 border-purple-500 border-l-4"
                      showLineNumbers
                      {...rest}
                      PreTag="div"
                      language={match ? match[1] : "text"}
                      style={coldarkDark}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  );
                },
                table(props) {
                  const { node, ...rest } = props;
                  return (
                    <table
                      className="w-full my-12 text-center border border-gray-500"
                      {...rest}
                    />
                  );
                },
                td(props) {
                  const { node, ...rest } = props;
                  return (
                    <td className="border border-gray-500 p-4" {...rest} />
                  );
                },
                th(props) {
                  const { node, ...rest } = props;
                  return (
                    <th
                      className="border border-gray-500 font-bold text-gradient p-4"
                      {...rest}
                    />
                  );
                },
                strong(props) {
                  const { node, ...rest } = props;
                  return <strong className="font-bold" {...rest} />;
                },
                em(props) {
                  const { node, ...rest } = props;
                  return <em className="font-bold" {...rest} />;
                },
              }}
            >
              {data.content}
            </Markdown>
          </div>
        </div>
      </div>
    </main>
  );
}
