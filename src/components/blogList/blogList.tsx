"use client"; // Ensure this is used if you're using React's client-side rendering
import { useEffect, useState } from "react";
import InfiniteScroll from "@/components/InfiniteScroll/InfiniteScroll";
import ArticleCard from "@/components/blogs/articleCard";

interface Blog {
  id: number;
  title: string;
  content: string;
  isFollowing: boolean;
  isTop: boolean;
  isLast: boolean;
}

const staticBlogs: Blog[] = [
  {
    id: 1,
    title: "First Blog",
    content: "This is the first blog",
    isFollowing: true,
    isTop: true,
    isLast: false,
  },
  {
    id: 2,
    title: "Second Blog",
    content: "This is the second blog",
    isFollowing: false,
    isTop: true,
    isLast: true,
  },
  {
    id: 3,
    title: "Third Blog",
    content: "This is the third blog",
    isFollowing: true,
    isTop: false,
    isLast: false,
  },
  {
    id: 3,
    title: "Third Blog",
    content: "This is the third blog",
    isFollowing: true,
    isTop: false,
    isLast: false,
  },
  {
    id: 3,
    title: "Third Blog",
    content: "This is the third blog",
    isFollowing: true,
    isTop: false,
    isLast: false,
  },
  {
    id: 3,
    title: "Third Blog",
    content: "This is the third blog",
    isFollowing: true,
    isTop: false,
    isLast: false,
  },
  {
    id: 3,
    title: "Third Blog",
    content: "This is the third blog",
    isFollowing: true,
    isTop: false,
    isLast: false,
  },
  {
    id: 3,
    title: "Third Blog",
    content: "This is the third blog",
    isFollowing: true,
    isTop: false,
    isLast: false,
  },
  {
    id: 3,
    title: "Third Blog",
    content: "This is the third blog",
    isFollowing: true,
    isTop: false,
    isLast: false,
  },
  {
    id: 3,
    title: "Third Blog",
    content: "This is the third blog",
    isFollowing: true,
    isTop: false,
    isLast: false,
  },

  // Add more static blogs here
  // ...
];

const BlogList = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [filter, setFilter] = useState<string>("ALL"); // Default filter is "ALL"

  const blogsPerPage = 2; // Number of blogs to load per "page"

  const filterBlogs = (filter: string): Blog[] => {
    switch (filter) {
      case "FOLLOWING":
        return staticBlogs.filter((blog) => blog.isFollowing);
      case "TOP":
        return staticBlogs.filter((blog) => blog.isTop);
      case "LAST":
        return staticBlogs.filter((blog) => blog.isLast);
      default:
        return staticBlogs;
    }
  };

  const fetchBlogs = (pageNumber: number, filter: string) => {
    const filteredBlogs = filterBlogs(filter);
    const start = (pageNumber - 1) * blogsPerPage;
    const end = start + blogsPerPage;
    const newBlogs = filteredBlogs.slice(start, end);

    if (newBlogs.length === 0) {
      setHasMore(false);
    } else {
      setBlogs((prevBlogs) => [...prevBlogs, ...newBlogs]);
    }
  };

  useEffect(() => {
    setBlogs([]); // Clear blogs when filter changes
    setPage(1);
    setHasMore(true);
    fetchBlogs(1, filter); // Fetch the first page with the selected filter
  }, [filter]);

  useEffect(() => {
    if (page > 1) {
      fetchBlogs(page, filter);
    }
  }, [page]);

  return (
    <div className="col-span-4 py-8">
      <div className="flex space-x-4 pb-4 px-10">
        <button
          className={`px-4 py-2 text-black dark:text-white   ${
            filter === "ALL" ? " opacity-100" : "opacity-50"
          }`}
          onClick={() => setFilter("ALL")}
        >
          ALL
        </button>
        <button
          className={`px-4 py-2 text-black dark:text-white ${
            filter === "FOLLOWING" ? " opacity-100" : "opacity-50"
          }`}
          onClick={() => setFilter("FOLLOWING")}
        >
          Following
        </button>
        <button
          className={`px-4 py-2 text-black dark:text-white ${
            filter === "TOP" ? " opacity-100" : "opacity-50"
          }`}
          onClick={() => setFilter("TOP")}
        >
          Top Blog
        </button>
        <button
          className={`px-4 py-2 text-black dark:text-white ${
            filter === "LAST" ? " opacity-100" : "opacity-50"
          }`}
          onClick={() => setFilter("LAST")}
        >
          Last Blog
        </button>
      </div>
      <InfiniteScroll
        loadMore={() => setPage((prevPage) => prevPage + 1)}
        hasMore={hasMore}
      >
        <div className="px-4  ">
          <div className=" pt-8 flex flex-col border-t dark:border-gray-500">
            {blogs.map((blog) => (
              <ArticleCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default BlogList;
