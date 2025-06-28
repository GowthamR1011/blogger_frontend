import fs from "fs";
import path from "path";
import { Blog } from "@/types/blogs";
import BlogContainer from "@/components/blogs/BlogContainer";
import EmptyPage from "@/components/shared/EmptyPage";

const blogsFilePath = path.join(process.cwd(), "data/blogs.json");
let blogs: Blog[] = [];

try {
  const data = fs.readFileSync(blogsFilePath, "utf-8");
  blogs = JSON.parse(data).blogs;
} catch (error) {
  console.error("Error reading blogs.json:", error);
}

export default function Home() {
  if (blogs.length === 0)
    return (
      <EmptyPage message="Sorry, Currently No blogs available. Please come back later." />
    );
  return (
    <div className="flex h-fit w-full items-center justify-center">
      <BlogContainer blogs={blogs} />
    </div>
  );
}
