// ArticleCard.tsx
import React from "react";
import Image from "next/image";
import { MdMoreHoriz } from "react-icons/md";
interface Blog {
  id: number;
  title: string;
  content: string;
}

interface ArticleCardProps {
  blog: Blog;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ blog }) => {
  return (
    <div className="px-4 py-6 bg-white dark:bg-gray-900 grid grid-cols-3 gap-9 border-b dark:border-gray-500 ">
      <div className="flex flex-col px-2 py-4 max-w-2xl justify-start gap-6 col-span-2">
        <header className="not-format">
          <address className="flex items-start not-italic justify-between">
            <div className="inline-flex items-center mr-3 text-sm justify-between  text-gray-900 dark:text-white">
              <Image
                className="mr-4 w-8 h-8 rounded-full"
                src="/assets/authors/costomer1.jpg"
                alt="Jese Leos"
                width={35}
                height={35}
              />
              <div className="">
                <div className="text-sm font-bold text-gray-900 dark:text-white ">
                  Jese Leos . <span className="text-[#29ADC5]"> Follow </span>
                </div>

                <div className=" text-gray-500 dark:text-gray-400">
                  <p className=" text-sm text-gray-500 dark:text-gray-400">
                    Feb. 8, 2022
                  </p>
                </div>
              </div>
            </div>
            <MdMoreHoriz
              size={32}
              className="opacity-50 hover:opacity-100 cursor-pointer"
            />
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
