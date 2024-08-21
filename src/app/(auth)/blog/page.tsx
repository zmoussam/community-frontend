// pages/blogs/index.tsx
import BlogList from "@/components/blogList/blogList";

const BlogsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">All Blogs</h1>
      <BlogList />
    </div>
  );
};

export default BlogsPage;
