"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import NavLink from "@/components/navLink/NavLink";
import SignInButton from "../SignInButton";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Backend_URL } from "@/app/lib/Constants";
import { FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const session = useSession();
  const router = useRouter();
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

  if (session.status === "unauthenticated")
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
    );

  return (
    <main className="z-50 top-0 sticky block bg-white">
      <div className="h-[57px] px-6 flex items-center">
        <div className="flex-1 basis-auto items-center flex">
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
          <div className="hidden md:block ml-4">
            <div className="bg-[#F0F0F0] w-[240px] rounded-2xl flex items-center">
              <div className="inline-block"></div>
              <div className="mx-3 flex">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0833 13.3333H14.1617L13.835 13.0183C14.9783 11.6883 15.6667 9.96167 15.6667 8.08333C15.6667 3.895 12.2717 0.5 8.08333 0.5C3.895 0.5 0.5 3.895 0.5 8.08333C0.5 12.2717 3.895 15.6667 8.08333 15.6667C9.96167 15.6667 11.6883 14.9783 13.0183 13.835L13.3333 14.1617V15.0833L19.1667 20.905L20.905 19.1667L15.0833 13.3333ZM8.08333 13.3333C5.17833 13.3333 2.83333 10.9883 2.83333 8.08333C2.83333 5.17833 5.17833 2.83333 8.08333 2.83333C10.9883 2.83333 13.3333 5.17833 13.3333 8.08333C13.3333 10.9883 10.9883 13.3333 8.08333 13.3333Z"
                    fill="black"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="bg-transparent py-[10px] pr-5 text-sm outline-none border-none w-full "
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <div className="hidden md:flex ">
          <div className="mr-8 flex ">
            <button
              onClick={makeNewStory}
              className="text-black border border-gray-500 hover:bg-black hover:bg-opacity-10  font-medium rounded-lg text-sm px-5 py-2 me-2 "
            >
              New Story
            </button>
          </div>
        </div>
        <div className="md:hidden">
          <div className="mr-8 flex">
            <Link href={"/search"}>
              <div className="relative text-sm">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0833 13.3333H14.1617L13.835 13.0183C14.9783 11.6883 15.6667 9.96167 15.6667 8.08333C15.6667 3.895 12.2717 0.5 8.08333 0.5C3.895 0.5 0.5 3.895 0.5 8.08333C0.5 12.2717 3.895 15.6667 8.08333 15.6667C9.96167 15.6667 11.6883 14.9783 13.0183 13.835L13.3333 14.1617V15.0833L19.1667 20.905L20.905 19.1667L15.0833 13.3333ZM8.08333 13.3333C5.17833 13.3333 2.83333 10.9883 2.83333 8.08333C2.83333 5.17833 5.17833 2.83333 8.08333 2.83333C10.9883 2.83333 13.3333 5.17833 13.3333 8.08333C13.3333 10.9883 10.9883 13.3333 8.08333 13.3333Z"
                    fill="black"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
        <div className="mr-8 flex">
          <Link href={"/me/notifications"}>
            <div className="relative flex items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 26 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.9032 28.1667C14.6907 28.1667 16.1532 26.8917 16.1532 25.3334H9.65322C9.65322 26.8917 11.0995 28.1667 12.9032 28.1667ZM22.6532 19.6667V12.5834C22.6532 8.23425 19.9882 4.59341 15.3407 3.63008V2.66675C15.3407 1.49091 14.252 0.541748 12.9032 0.541748C11.5545 0.541748 10.4657 1.49091 10.4657 2.66675V3.63008C5.80197 4.59341 3.15322 8.22008 3.15322 12.5834V19.6667L1.05697 21.4942C0.0332209 22.3867 0.748221 23.9167 2.19447 23.9167H23.5957C25.042 23.9167 25.7732 22.3867 24.7495 21.4942L22.6532 19.6667Z"
                  fill="#666666"
                />
              </svg>
            </div>
          </Link>
        </div>
        <div className="block">
          <button
            onClick={toggleProfileMenu}
            className="bg-transparent border-none cursor-pointer p-0 items-center flex m-0"
          >
            <div className="relative block">
              <div className="relative block">
                <Image
                  className="block rounded-[50%] align-middle w-8 h-8"
                  src="/assets/authors/costomer1.jpg"
                  alt="Jese Leos"
                  width={32}
                  height={32}
                />
                <div className="absolute w-8 h-8 top-0 block rounded-[50%]"></div>
              </div>
            </div>
            <FiChevronDown className=" text-gray-600" size={20} />
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
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Navbar;
