import React from "react";

interface Props {
  content: string;
  action: () => void;
}
const CategoryButton = ({ content, action }: Props) => {
  return (
    <button
      type="button"
      onClick={action}
      className="text-black dark:text-white bg-[#E8E8E8]  focus:bg-black focus:text-white dark:focus:text-black hover:bg-[#D6D6D6]  dark:focus:bg-[#D6D6D6] font-medium rounded-2xl text-sm px-5 py-2.5 me-2  dark:bg-gray-800 dark:hover:bg-gray-700  dark:border-gray-700"
    >
      {content}
    </button>
  );
};

export default CategoryButton;
