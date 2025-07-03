import React from "react";
import { Blog } from "@/types/blogs";
import BlogCard from "./BlogCard";

type BlogContainerProps = {
  blogs: Blog[];
};

const BlogContainer: React.FC<BlogContainerProps> = ({ blogs }) => (
  <div className="flex h-full flex-col gap-2 py-1">
    {blogs.map((blog, idx) => (
      <BlogCard
        key={idx}
        id={blog._id}
        title={blog.title}
        summary={blog.summary}
      />
    ))}
  </div>
);

export default BlogContainer;
