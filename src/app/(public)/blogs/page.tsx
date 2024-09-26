"use client";
import BlogCard from "@/components/blogs/blogCard";
import Button from "@/components/buttons/button";
import CategoryButton from "@/components/buttons/categories";
import Footer from "@/components/footer/Footer";
import Image from "next/image";

import React from "react";

const Blogs = () => {
  return (
    <>
      <div className="container mt-40 mb-20">
        <div className="px-48  flex flex-col gap-10">
          {/* page title */}
          <h1 className="text-h1 font-bold font-vietnam ">Explore Our Blogs</h1>
          {/* single blog */}
          <div className="p-4 bg-white dark:bg-gray-700 flex justify-between rounded-[12px] shadow-xl gap-9">
            <div className="flex flex-col px-2 py-16 max-w-2xl justify-between gap-6">
              <header className="not-format">
                <address className="flex items-center not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                    <Image
                      className="mr-4 w-16 h-16 rounded-full"
                      src="/assets/authors/costomer1.jpg"
                      alt="Jese Leos"
                      width={64}
                      height={64}
                    />
                    <div>
                      <a
                        href="#"
                        rel="author"
                        className="text-xl font-bold text-gray-900 dark:text-white"
                      >
                        Jese Leos
                      </a>
                      <p className="text-base text-gray-500 dark:text-gray-400">
                        Graphic Designer, educator & CEO Flowbite
                      </p>
                      <div className="text-base text-gray-500 dark:text-gray-400">
                        <p className="text-base text-gray-500 dark:text-gray-400">
                          Feb. 8, 2022
                        </p>
                      </div>
                    </div>
                  </div>
                </address>
                {/* <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">Best practices for successful prototypes</h1> */}
              </header>
              <h2 className="text-h2 font-bold font-vietnam">
                This is a featured article - the most important piece of content
              </h2>
              <p>
                Very short description of what’s actually being discused in this
                article, maybe the first senterces to provide a preview
              </p>
              <div>
                <Button content="Read now" action={() => console.log("test")} />
              </div>
            </div>
            {/* blog image */}
            <div className="">
              <Image
                className="w-full h-full object-cover rounded-[12px]"
                src="/assets/blogs/blog_1.jpg"
                alt="blog image"
                width={500}
                height={300}
              />
            </div>
          </div>
          {/* more blogs */}

          {/* categories button */}
          <div>
            <div className="flex ">
              <CategoryButton
                content="all"
                action={() => console.log("test")}
              ></CategoryButton>
              <CategoryButton
                content="category 2"
                action={() => console.log("test")}
              ></CategoryButton>
              <CategoryButton
                content="category 3"
                action={() => console.log("test")}
              ></CategoryButton>
              <CategoryButton
                content="category 4"
                action={() => console.log("test")}
              ></CategoryButton>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <BlogCard
              imageSrc="/assets/blogs/blog_3.jpg"
              title="Article name - headline for an article "
              description="Very short description of what’s actually being discused in this article"
              category="category 1"
            />
            <BlogCard
              imageSrc="/assets/blogs/blog_2.jpg"
              title="Article name - headline for an article "
              description="Very short description of what’s actually being discused in this article"
              category="category 1"
            />
            <BlogCard
              imageSrc="/assets/blogs/blog_1.jpg"
              title="Article name - headline for an article "
              description="Very short description of what’s actually being discused in this article"
              category="category 1"
            />
            <BlogCard
              imageSrc="/assets/blogs/blog_2.jpg"
              title="Article name - headline for an article "
              description="Very short description of what’s actually being discused in this article"
              category="category 1"
            />
            <BlogCard
              imageSrc="/assets/blogs/blog_3.jpg"
              title="Article name - headline for an article "
              description="Very short description of what’s actually being discused in this article"
              category="category 1"
            />
            <BlogCard
              imageSrc="/assets/blogs/blog_1.jpg"
              title="Article name - headline for an article "
              description="Very short description of what’s actually being discused in this article"
              category="category 1"
            />
            <BlogCard
              imageSrc="/assets/blogs/blog_3.jpg"
              title="Article name - headline for an article "
              description="Very short description of what’s actually being discused in this article"
              category="category 1"
            />
            <BlogCard
              imageSrc="/assets/blogs/blog_2.jpg"
              title="Article name - headline for an article "
              description="Very short description of what’s actually being discused in this article"
              category="category 1"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
