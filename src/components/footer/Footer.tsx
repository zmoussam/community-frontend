import React from "react";
import NavLink from "../navLink/NavLink";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className=" bg-[#F0F0F0] dark:bg-[#242424] text-sm text-[#808080] border-t border-black  bottom-0 w-full">
      <div className="flex justify-between items-center h-16 px-16">
        <div className="dark:text-gray-200 flex justify-between w-1/4">
          <NavLink href="/" content="Home" />
          <NavLink href="/blogs" content="Blogs" />
          <NavLink href="/about" content="About" />
          <NavLink href="/contact" content="Contact us" />
          <NavLink href="/privacy" content="Privacy" />
          <NavLink href="/signin" content="Sign in" />
        </div>
        <div className="dark:text-gray-200">
          &copy; {currentYear} medium.community.com All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
