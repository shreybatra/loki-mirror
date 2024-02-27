type Blog = {
  id: string;
  title: string;
  content: string;
  createdOn: number;
  readTime: number;
  tags: Array<string>;
  image: string;
  type?: string;
  length?: number;
  customClass?: string;
};

type BlogResponseProps = {
  featuredData: BlogsResponse;
  blogsData: BlogsResponse;
};

type BlogsList = {
  blogs: Array<Blogs>;
  title: string;
};

type BlogsNavbarProps = {
  text: string;
  tag: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  setTag: React.Dispatch<React.SetStateAction<string>>;
};

type BlogTagProps = {
  tagValue: string;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};

type BlogsResponse = {
  data: Array<Blog>;
  page: {
    limit: number;
    total: number;
    next: number;
  };
};

declare module "react-syntax-highlighter";
declare module "react-syntax-highlighter/dist/esm/styles/prism";
declare module "remark-gfm";
