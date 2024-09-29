"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import NavLink from "@/components/navLink/NavLink";
import Button from "@/components/buttons/button";
import SignInButton from "../SignInButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="bg-white  font-vietnam fixed top-0 right-0 left-0 w-full z-10 border border-b-black">
      <div className="flex justify-center">
        <div className="mx-6 my-0 w-full max-w-[1192px]">
          <div className="flex flex-row h-[75px] py-[25px] px-0 items-center ">
            <div className="block">
              <Link href="/">
                <Image
                  src={`/assets/logo/logo-${
                    theme === "dark" ? "dark" : "light"
                  }.png`} // Replace with your logo image path
                  alt="Logo"
                  width={250}
                  height={150}
                  quality={100}
                  priority
                  className="w-auto h-14"
                />
              </Link>
            </div>
            <div className="block flex-1 basis-auto"></div>
            <div className="flex flex-row items-center">
              <div className="hidden md:inline-block">
                <div className="mr-[25px] block">
                  <NavLink href="/blogs" content="Blogs" />
                </div>
              </div>
              <div className="hidden md:inline-block">
                <div className="mr-[25px] block">
                  <NavLink href="/about" content="About" />
                </div>
              </div>
              <div className="hidden md:inline-block">
                <div className="mr-[25px] block">
                  <NavLink href="/contact" content="Contact us" />
                </div>
              </div>
              <div className="hidden md:inline-block">
                <div className="mr-[25px] block">
                  <NavLink href="/api/auth/signin" content="Write" />
                </div>
              </div>
              <div className="hidden md:inline-block">
                <div className="mr-[25px] block">
                  <SignInButton />
                </div>
              </div>
              <div>
                <span>
                  <Link
                    href={"/api/auth/signin"}
                    className="text-center inline-block bg-black rounded-lg m-0 py-2 px-4 text-white text-sm font-normal font-vietnam"
                  >
                    Get started
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    // <nav className="bg-white dark:bg-black py-2 font-vietnam font-medium fixed px-64 w-full top-0">
    //   <div className="flex items-center justify-between h-16">
    //     <div className="">
    //       <Link href="/">
    //         <Image
    //           src={`/assets/logo/logo-${
    //             theme === "dark" ? "dark" : "light"
    //           }.png`} // Replace with your logo image path
    //           alt="Logo"
    //           width={250}
    //           height={150}
    //           quality={100}
    // 		  priority
    // 		  className="w-auto h-20"

    //         />
    //       </Link>
    //     </div>
    //     <div className="hidden md:flex md:space-x-8 xl:space-x-10 items-center">
    //       <NavLink href="/" content="Home" />
    //       <NavLink href="/blogs" content="Blogs" />
    //       <NavLink href="/about" content="About" />
    //       <NavLink href="/contact" content="Contact us" />
    //       <SignInButton/>
    //       <Button content="Write Story" action={() => console.log("test")} />
    //       <ThemeToggle />
    //     </div>
    //     <div className="-mr-2 flex md:hidden">
    //       <button
    //         onClick={toggleMenu}
    //         className="bg-gray-200 dark:bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-400 dark:focus:ring-gray-500"
    //       >
    //         <span className="sr-only">Open main menu</span>
    //         {isOpen ? (
    //           <svg
    //             className="h-6 w-6 transition-transform transform rotate-45"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M6 18L18 6M6 6l12 12"
    //             />
    //           </svg>
    //         ) : (
    //           <svg
    //             className="h-6 w-6 transition-transform transform rotate-0"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M4 6h16M4 12h16m-7 6h7"
    //             />
    //           </svg>
    //         )}
    //       </button>
    //     </div>
    //   </div>

    //   {/* Mobile menu */}
    //   <div
    //     className={`fixed top-0 right-0 z-50 bg-white dark:bg-gray-900 transform transition-transform duration-300 ease-in-out ${
    //       isOpen ? "translate-x-0" : "translate-x-full"
    //     } w-2/4 h-full`}
    //   >
    //     <div className="flex justify-end p-4">
    //       <button
    //         onClick={toggleMenu}
    //         className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
    //       >
    //         <svg
    //           className="h-6 w-6"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M6 18L18 6M6 6l12 12"
    //           />
    //         </svg>
    //       </button>
    //     </div>
    //     <div className="flex flex-col items-center justify-center h-full space-y-6">
    //       <Link
    //         href="/"
    //         className="text-gray-800 dark:text-gray-200 text-xl hover:text-gray-600 dark:hover:text-gray-400"
    //         onClick={toggleMenu}
    //       >
    //         Home
    //       </Link>
    //       <Link
    //         href="/blogs"
    //         className="text-gray-800 dark:text-gray-200 text-xl hover:text-gray-600 dark:hover:text-gray-400"
    //         onClick={toggleMenu}
    //       >
    //         Blogs
    //       </Link>
    //       <Link
    //         href="/about"
    //         className="text-gray-800 dark:text-gray-200 text-xl hover:text-gray-600 dark:hover:text-gray-400"
    //         onClick={toggleMenu}
    //       >
    //         About
    //       </Link>
    //       <Link
    //         href="/contact"
    //         className="text-gray-800 dark:text-gray-200 text-xl hover:text-gray-600 dark:hover:text-gray-400"
    //         onClick={toggleMenu}
    //       >
    //         Contact
    //       </Link>
    //       <Link
    //         href="/signin"
    //         className="text-gray-800 dark:text-gray-200 text-xl hover:text-gray-600 dark:hover:text-gray-400"
    //         onClick={toggleMenu}
    //       >
    //         Sign in
    //       </Link>
    //       <ThemeToggle />
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;
