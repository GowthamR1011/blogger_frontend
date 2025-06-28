import React from "react";
import { Blog } from "@/types/blogs";

type BlogContainerProps = {
  blogs: Blog[];
};

import BlogCard from "./BlogCard";
const BlogContainer: React.FC<BlogContainerProps> = ({ blogs }) => (
  <div className="flex h-full flex-col gap-2 py-1">
    {blogs.map((blog) => (
      <BlogCard key={blog.id} title={blog.title} summary={blog.summary} />
    ))}
  </div>
);

export default BlogContainer;
