import Image from "next/image";

interface BlogArticleProps {
  imageSrc: string;
  title: string;
  description: string;
  category: string;
}

const BlogCard: React.FC<BlogArticleProps> = ({
  imageSrc,
  title,
  description,
  category,
}) => {
  // const combineClasses = function (...classes: any): string {
  //   return classes.filter((item: any) => !!item).join(" ");
  // };

  return (
    <div className="max-w-80 mx-auto bg-white dark:bg-gray-700 rounded-xl hover:shadow-md dark:hover:shadow-black overflow-hidden cursor-pointer">
      <Image
        className="w-full h-48 object-cover"
        src={imageSrc}
        alt={title}
        width={500}
        height={300}
      />
      <div className="px-4 py-3 flex flex-col gap-2">
        <div className="w-full flex justify-between items-center">
          <div className="text-xs">august 04 2024</div>
          <div className="text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:bg-gray-900 bg-white shadow-md self-start px-2 py-1 rounded-[12px]">
            {category}
          </div>
        </div>
        <div className="text-lg font-semibold ">{title}</div>
        <p className="  text-paragraph font-vietnam">{description}</p>

        <button className="text-black text-sm opacity-50 hover:opacity-100 self-start dark:text-gray-400 hover:underline">
          Read More &rarr;
        </button>
      </div>
    </div>
    // <div className="max-w-80 mx-auto bg-white dark:bg-gray-700 rounded-xl hover:shadow-md dark:hover:shadow-black overflow-hidden cursor-pointer">
    //   <Image
    //     className="w-full h-48 object-cover"
    //     src={imageSrc}
    //     alt={title}
    //     width={500}
    //     height={300}
    //   />
    //   <div className="px-4 py-3 flex flex-col gap-2">
    //     <div className="text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:bg-gray-900 bg-white shadow-md self-start px-2 py-1 rounded-[12px]">
    //       {category}
    //     </div>
    //     <div className="text-lg font-semibold ">{title}</div>
    //     <p className="  text-paragraph font-vietnam">{description}</p>
    //     <button className="text-black text-sm opacity-50 hover:opacity-100 self-start dark:text-gray-400 underline">
    //       Read More
    //     </button>
    //   </div>
    // </div>
    // <div className="w-full lg:w-1/3 md:w-1/2 md:px-[15px] px-2 mb-[30px]">
    //   <div className="border-b-[5px] border-blue-500 dark:bg-slate-800 dark:text-white dark:drop-shadow-lg flex flex-col justify-between">
    //     <div>
    //       <div className={"rounded-t-[4px] overflow-hidden h-[200px] relative"}>
    //         <Image
    //           src={imageSrc}
    //           alt="blog"
    //           layout="fill"
    //           quality={100}
    //           objectFit="cover"
    //           // loader={imgLoader}
    //         />
    //       </div>
    //       <div className={"d-block px-[15px] py-0"}>
    //         <p className={"font-normal text-xs pt-3 mb-0 md:mb-3"}>
    //           august 04 2024
    //         </p>
    //         <div>
    //           <h1
    //             className={
    //               "text-[22px] font-bold cursor-pointer tracking-wide hover:text-blue-600"
    //             }
    //           >
    //             {title}
    //           </h1>
    //         </div>
    //         <p className="text-sm font-normal mt-2 md:mt-1">{description}</p>
    //         <div className="flex gap-2">
    //           <div>#demo</div>
    //           <div>#demo</div>
    //           <div>#demo</div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="mt-4 mb-3 flex items-center px-3">
    //       <div className={"flex items-center"}>
    //         <div
    //           className={`flex items-center justify-center shadow-xl rounded-full overflow-hidden bg-blue-500 shrink-0`}
    //         >
    //           <p className="text-center font-medium text-white">Z</p>
    //         </div>
    //         <div className="text-sm font-medium">zakaria moussammi</div>
    //         {/* <p className={combineClasses(classes.author_name, 'text-sm font-medium')}>
    //           {article.author.name}
    //         </p> */}
    //       </div>
    //       {/* <ArticleCardCategory category={article.category} /> */}
    //     </div>
    //   </div>
    // </div>
  );
};

export default BlogCard;
