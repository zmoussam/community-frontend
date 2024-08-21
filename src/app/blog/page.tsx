// import Layout from "@/components/layout";

const BlogMainPage = () => {
  // Mock data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Understanding JavaScript Closures",
      description:
        "A deep dive into the concept of closures in JavaScript and how to use them effectively.",
      link: "/blog/javascript-closures",
    },
    {
      id: 2,
      title: "CSS Grid vs. Flexbox: Which One Should You Use?",
      description:
        "An overview of CSS Grid and Flexbox, comparing their use cases and features.",
      link: "/blog/css-grid-vs-flexbox",
    },
    {
      id: 3,
      title: "Getting Started with TypeScript",
      description:
        "A beginner's guide to TypeScript, its benefits, and how to set it up in your projects.",
      link: "/blog/getting-started-with-typescript",
    },
    // Add more blog posts here
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <h1 className="text-4xl font-bold text-center mb-12">
        Welcome to Our Blog
      </h1>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {post.description}
            </p>
            <a
              href={post.link}
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Read More &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogMainPage;
