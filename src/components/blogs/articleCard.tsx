// ArticleCard.tsx
"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import { MdMoreHoriz } from "react-icons/md";
import BlogActions from "@/components/blogAction/BlogActions";
import { FaEllipsisH } from "react-icons/fa";
interface Blog {
  id: number;
  title: string;
  content: string;
}

interface ArticleCardProps {
  blog: Blog;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ blog }) => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const toggleMore = () => {
    setIsMoreOpen(!isMoreOpen);
  };
  return (
    <div className="px-4 py-6 bg-white dark:bg-gray-900 grid grid-cols-3 gap-9 border-b dark:border-gray-500 ">
      <div className="flex flex-col px-2 py-4 max-w-2xl justify-start gap-6 col-span-2">
        <header className="not-format">
          <address className="flex items-start not-italic justify-between">
            <div className="inline-flex items-center mr-3 text-sm justify-between  text-gray-900 dark:text-white">
              <Image
                className="mr-4 w-10 h-10 rounded-full"
                src="/assets/authors/costomer1.jpg"
                alt="Jese Leos"
                width={40}
                height={40}
              />
              <div className="">
                <div className="text-sm font-bold text-gray-900 dark:text-white ">
                  Jese Leos .{" "}
                  <button className="text-[#29ADC5] hover:underline">
                    {" "}
                    Follow{" "}
                  </button>
                </div>

                <div className=" text-gray-500 dark:text-gray-400">
                  <p className=" text-sm text-gray-500 dark:text-gray-400">
                    Feb. 8, 2022
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <button
                onClick={toggleMore}
                className="flex items-center text-gray-600 hover:text-blue-500"
              >
                <FaEllipsisH />
              </button>
              {isMoreOpen && (
                <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1 z-10">
                  <li
                    className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                    // onClick={onReport}
                  >
                    Report Blog
                  </li>
                  {/* Add more items here if needed */}
                </ul>
              )}
            </div>
          </address>
          {/* <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">Best practices for successful prototypes</h1> */}
        </header>
        <h2 className="text-h3 font-bold font-vietnam">
          This is a featured article - the most important piece of content
        </h2>
        <p className="text-paragraph">
          Very short description of what’s actually being discused in this
          article, maybe the first senterces to provide a preview
        </p>
        <div>
          <button className="text-black text-sm  hover:opacity-100 self-start dark:text-gray-400 hover:underline">
            Read More &rarr;
          </button>
          {/* <Button content="Read now" action={() => console.log("test")} /> */}
        </div>
        <BlogActions likes={120} comments={45} shares={30} />
      </div>
      {/* blog image */}
      <div className="col-span-1">
        <Image
          className="w-full h-full object-cover rounded-[12px]"
          src="/assets/blogs/blog_2.jpg"
          alt="blog image"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default ArticleCard;
