"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const SignInButton = () => {
  const { data: session } = useSession();

  if (session && session.user)
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-sky-600">{session.user.fullName}</p>
        <Link
          href={"/api/auth/signout"}
          className="flex gap-4 ml-auto text-red-600"
        >
          Sign Out
        </Link>
      </div>
    );

  return (
    <div className="flex gap-4 ml-auto items-center">
      <Link
        href={"/api/auth/signin"}
		className="text-black text-opacity-50 dark:text-white hover:text-black dark:hover:text-gray-400 focus:text-black dark:focus:text-gray-400"
		>
        Sign In
      </Link>
      {/* <Link
        href={"/signup"}
        className="flex gap-4 ml-auto bg-green-600 text-green-200 p-2 rounded"
      >
        Sign Up
      </Link> */}
    </div>
  );
};

export default SignInButton;