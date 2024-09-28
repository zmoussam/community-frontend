"use client";
import { useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { IoMdNotifications } from "react-icons/io";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import { FiChevronDown } from "react-icons/fi";
import NavLink from "@/components/navLink/NavLink";
import Button from "@/components/buttons/button";
import { Backend_URL } from "@/app/lib/Constants";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Header = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  const router = useRouter();
  const session = useSession();
  const makeNewStory = async () => {
    try {
      const response = await fetch(Backend_URL + "/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.data?.token}`,
        },
        body: JSON.stringify({
          title: "",
          subtitle: "",
          content: "",
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      router.push(`/story/${result._id}`);

    } catch (error) {
      console.error("Error creating story:", error);
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 py-2 z-10 font-vietnam font-medium fixed px-40 w-full top-0 border-b dark:border-gray-500">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={`/assets/logo/logo-${
                theme === "dark" ? "dark" : "light"
              }.png`} // Replace with your logo image path
              alt="Logo"
              width={150}
              height={250}
              quality={100}
            />
          </Link>
        </div>
        <div className="hidden md:flex md:space-x-8 xl:space-x-10 items-center">
          <button
            type="button"
            onClick={makeNewStory}
            className="text-black dark:text-white border border-gray-500 hover:bg-black hover:bg-opacity-10  font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-gray-800 dark:hover:bg-gray-700  dark:border-gray-700"
          >
            New Story
          </button>
          <button className="cursor-pointer">
            <IoMdNotifications size={32} />
          </button>
          <div className="relative">
            <button onClick={toggleProfileMenu} className="flex items-center">
              <Image
                className="mr-4 w-11 h-11 rounded-full"
                src="/assets/authors/costomer1.jpg"
                alt="Jese Leos"
                width={40}
                height={40}
              />
              <FiChevronDown
                className="ml-2 text-gray-600 dark:text-gray-300"
                size={20}
              />
            </button>
            {profileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg py-2">
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Visit Profile
                </Link>
                <Link
                  href="/settings"
                  className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Settings
                </Link>
                <Link
                  href={"/api/auth/signout"}
                  className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Sign Out
                </Link>
                <button className="flex justify-between   items-center w-full px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">
                  <span>dark mode</span>
                  <ThemeToggle />
                </button>
              </div>
            )}
          </div>
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

export default Header;
