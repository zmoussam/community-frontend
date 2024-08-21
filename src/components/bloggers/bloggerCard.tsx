import React from "react";
import Image from "next/image";
const BloggerCard = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="inline-flex items-center  text-sm justify-between  text-gray-900 dark:text-white">
        <Image
          className="mr-4 w-10 h-10 rounded-full"
          src="/assets/authors/costomer1.jpg"
          alt="Jese Leos"
          width={40}
          height={40}
        />
        <div className="">
          <div className="text-sm flex font-bold text-gray-900 dark:text-white ">
            Jese Leos
          </div>

          <div className=" text-gray-500 dark:text-gray-400">
            <p className=" text-xs text-gray-500 dark:text-gray-400">
              Feb. 8, 2022
            </p>
          </div>
        </div>
      </div>
      <button className="text-[#29ADC5] hover:underline text-xs">
        Follow{" "}
      </button>
    </div>
  );
};

export default BloggerCard;
