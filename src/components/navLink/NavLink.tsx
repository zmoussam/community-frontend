import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  content: string;
}
const NavLink = ({ href, content }: Props) => {
  return (
    <Link
      href={href}
      className="text-black text-opacity-50 dark:text-white hover:text-black dark:hover:text-gray-400 focus:text-black dark:focus:text-gray-400"
    >
      {content}
    </Link>
  );
};

export default NavLink;
