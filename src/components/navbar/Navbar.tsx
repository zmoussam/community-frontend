"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import NavLink from "@/components/navLink/NavLink";
import Button from "@/components/button/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 py-2 font-vietnam font-medium fixed px-64 w-full">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/assets/logo/logo.png" // Replace with your logo image path
              alt="Logo"
              width={150}
              height={250}
              quality={100}
            />
          </Link>
        </div>
        <div className="hidden md:flex md:space-x-8 xl:space-x-10 items-center">
          <NavLink href="/" content="Home" />
          <NavLink href="/blogs" content="Blogs" />
          <NavLink href="/about" content="About" />
          <NavLink href="/contact" content="Contact us" />
          <NavLink href="/signin" content="Sign in" />
          <Button content="Write Story" action={() => console.log("test")} />
          <ThemeToggle />
        </div>
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={toggleMenu}
            className="bg-gray-200 dark:bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-400 dark:focus:ring-gray-500"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg
                className="h-6 w-6 transition-transform transform rotate-45"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 transition-transform transform rotate-0"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 z-50 bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-2/4 h-full`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <Link
            href="/"
            className="text-gray-800 dark:text-gray-200 text-xl hover:text-gray-600 dark:hover:text-gray-400"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/blogs"
            className="text-gray-800 dark:text-gray-200 text-xl hover:text-gray-600 dark:hover:text-gray-400"
            onClick={toggleMenu}
          >
            Blogs
          </Link>
          <Link
            href="/about"
            className="text-gray-800 dark:text-gray-200 text-xl hover:text-gray-600 dark:hover:text-gray-400"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-800 dark:text-gray-200 text-xl hover:text-gray-600 dark:hover:text-gray-400"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Link
            href="/signin"
            className="text-gray-800 dark:text-gray-200 text-xl hover:text-gray-600 dark:hover:text-gray-400"
            onClick={toggleMenu}
          >
            Sign in
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
