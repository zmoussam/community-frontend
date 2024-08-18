"use client";
import Miniblog from "@/components/blogs/blogArticle";
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
            <div className="flex flex-col px-2 py-20 max-w-2xl justify-between">
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
            <Miniblog
              imageSrc="/assets/blogs/blog_3.jpg"
              title="Article name - headline for an article "
              description="Very short description of what’s actually being discused in this article"
              category="category 1"
            />
            <Miniblog
              imageSrc="/assets/blogs/blog_2.jpg"
              title="Article name - headline for an article "
              description="Very short description of what’s actually being discused in this article"
              category="category 1"
            />
            <Miniblog
              imageSrc="/assets/blogs/blog_1.jpg"
              title="Article name - headline for an article "
              description="Very short description of what’s actually being discused in this article"
              category="category 1"
            />
            <Miniblog
              imageSrc="/assets/blogs/blog_2.jpg"
              title="Article name - headline for an article "
              description="Very short description of what’s actually being discused in this article"
              category="category 1"
            />
            <Miniblog
              imageSrc="/assets/blogs/blog_3.jpg"
              title="Article name - headline for an article "
              description="Very short description of what’s actually being discused in this article"
              category="category 1"
            />
            <Miniblog
              imageSrc="/assets/blogs/blog_1.jpg"
              title="Article name - headline for an article "
              description="Very short description of what’s actually being discused in this article"
              category="category 1"
            />
            <Miniblog
              imageSrc="/assets/blogs/blog_3.jpg"
              title="Article name - headline for an article "
              description="Very short description of what’s actually being discused in this article"
              category="category 1"
            />
            <Miniblog
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
