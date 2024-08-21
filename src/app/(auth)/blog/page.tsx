// pages/blogs/index.tsx
import BlogList from "@/components/blogList/blogList";
import Image from "next/image";
import BloggerCard from "@/components/bloggers/bloggerCard";

const BlogsPage = () => {
  return (
    <div className="container mx-auto mt-20 grid grid-cols-5 ">
      <BlogList />
      <aside className="relative border-l pt-8  dark:border-gray-500 col-span-1 min-h-screen">
        <div className="w-full sticky bottom-0 px-4">
          <div className="flex flex-col gap-4">
            {/* best blogger  */}
            <div className="flex flex-col gap-5 border-b pb-4 dark:border-gray-500">
              <div className="flex justify-between w-full">
                <h5 className="font-bold opacity-50">Best Blogger for you</h5>
                <button className="hover:underline font-semibold">
                  See all
                </button>
              </div>
              <div className="flex-col flex gap-4">
                <BloggerCard />
                <BloggerCard />
                <BloggerCard />
                <BloggerCard />
              </div>
            </div>
            {/* Recomended topics  */}
            <div className="flex flex-col gap-5 border-b pb-4 dark:border-gray-500">
              <h5 className="font-bold opacity-50">Recommended category</h5>
              <div className="">
                <button className="text-sm mr-2 mb-2 text-gray-500 dark:text-gray-400 bg-[#E8E8E8] py-2 px-4 rounded-2xl">
                  #Technology
                </button>
                <button className="text-sm mr-2 mb-2 text-gray-500 dark:text-gray-400 bg-[#E8E8E8] py-2 px-4 rounded-2xl">
                  #Lifestyle
                </button>
                <button className="text-sm mr-2 mb-2 text-gray-500 dark:text-gray-400 bg-[#E8E8E8] py-2 px-4 rounded-2xl">
                  #sport
                </button>
                <button className="text-sm mr-2 mb-2 text-gray-500 dark:text-gray-400 bg-[#E8E8E8] py-2 px-4 rounded-2xl">
                  #Food & Drink
                </button>
                <button className="text-sm mr-2 mb-2 text-gray-500 dark:text-gray-400 bg-[#E8E8E8] py-2 px-4 rounded-2xl">
                  #Business
                </button>
                <button className="text-sm mr-2 mb-2 text-gray-500 dark:text-gray-400 bg-[#E8E8E8] py-2 px-4 rounded-2xl">
                  #Education
                </button>
              </div>
            </div>
            {/* Trending  */}
            <div className="flex flex-col gap-5 border-b pb-4 dark:border-gray-500">
              <h5 className="font-bold opacity-50">Trending</h5>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 relative">
                    <Image
                      src="/assets/blogs/blog1.jpg"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h6 className="text-sm font-semibold">
                      How to be a good blogger
                    </h6>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      10 min read
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 relative">
                    <Image
                      src="/assets/blogs/blog2.jpg"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h6 className="text-sm font-semibold">
                      How to be a good blogger
                    </h6>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      10 min read
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 relative">
                    <Image
                      src="/assets/blogs/blog3.jpg"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h6 className="text-sm font-semibold">
                      How to be a good blogger
                    </h6>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      10 min read
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default BlogsPage;
