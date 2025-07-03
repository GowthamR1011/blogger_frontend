import { Blog } from "@/types/blogs";
import BlogContainer from "@/components/blogs/BlogContainer";
import EmptyPage from "@/components/shared/EmptyPage";

import { fetchAllBlogs } from "@/services/blogs.service";

export default async function Home() {
  const blogs = await fetchAllBlogs();
  if (!Array.isArray(blogs) || blogs.length === 0) {
    return (
      <EmptyPage message="Sorry, Currently No blogs available. Please come back later." />
    );
  }
  return (
    <div className="flex h-fit w-full items-center justify-center">
      <BlogContainer blogs={blogs} />
    </div>
  );
}
