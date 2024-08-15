import React from "react";

interface Props {
  content: string;
  action: () => void;
}
const Button = ({ content, action }: Props) => {
  return (
    <button
      type="button"
      onClick={action}
      className="text-white bg-black hover:bg-black hover:bg-opacity-70  font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-gray-800 dark:hover:bg-gray-700  dark:border-gray-700"
    >
      {content}
    </button>
  );
};

export default Button;
