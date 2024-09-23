"use client";
import Footer from "@/components/footer/Footer";
import Login from "@/components/Login";
import { signIn } from "next-auth/react";
import { Asul } from "next/font/google";
import Link from "next/link";
import React, { useRef } from "react";
import { useState } from "react";

type Props = {
  searchParams?: Record<"callbackUrl" | "error", string>;
};

const handleGoogleSignIn = async () => {
  const response = await signIn("google", {
    redirect: false,
    callbackUrl: "/",
  });
  console.log("response: ", response);
};

const Signin = (props: Props) => {
  return (
    <div className="h-screen bg-white dark:bg-gray-900 mt-20 pt-10 p flex flex-col gap-7">
      <div className="text-center">
        <div className="font-vietnam text-[28px] font-bold">
          Login to your account
        </div>
        <div className="text-paragraph text-black dark:text-gray-300 opacity-50">
          Welcome back. Select a method to login
        </div>
      </div>
      <div className="flex flex-col items-center gap-5">
        <button
          onClick={handleGoogleSignIn}
          className=" max-w-80 flex w-3/4 items-center justify-center gap-4 px-4 py-2 rounded-[12px] font-medium transition-colors dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 bg-white text-black hover:bg-gray-100 border border-gray-300"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google Icon"
            className="h-5 w-5"
          />
          Sign in with Google
        </button>
        <div className="flex  gap-3 items-center ">
          <div className="border-t flex-none w-16 border-black dark:border-gray-300 border-opacity-50"></div>
          <div className="grow text-sm text-black text-center dark:text-gray-300 opacity-50">
            or continue with email
          </div>
          <div className="border-t flex-none w-16 border-black dark:border-gray-300 border-opacity-50"></div>
        </div>
        <Login
          error={props.searchParams?.error}
          callbackUrl={props.searchParams?.callbackUrl}
        />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Signin;
