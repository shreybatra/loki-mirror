type Blog = {
  id: string;
  title: string;
  content: string;
  createdOn: number;
  readTime: number;
  tags: Array<string>;
};

type BlogsList = {
  blogs: Array<Blogs>;
};

type BlogsResponse = {
  data: Array<Blog>;
};

declare module "react-syntax-highlighter";
declare module "react-syntax-highlighter/dist/esm/styles/prism";
declare module "remark-gfm";
