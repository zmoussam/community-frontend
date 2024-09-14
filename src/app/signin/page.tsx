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

const Signin = () => {

  return (
    <div className="h-screen">
      <div className=" h-full">
        <div className=" h-full px-40 bg-white dark:bg-gray-900 flex items-center justify-center text-center">
          <div className="  h-full w-1/3 flex flex-col items-center px-10 justify-center gap-8">
            <div className="text-center">
              <div className="font-vietnam text-h2 font-bold mb-3">
                Login to your account
              </div>
              <div className="text-paragraph text-black dark:text-gray-300 opacity-50">
                Welcome back, Select method to login
              </div>
            </div>
            <button className=" flex w-3/4 items-center justify-center gap-4 px-4 py-2 rounded-[12px] font-medium transition-colors dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 bg-white text-black hover:bg-gray-100 border border-gray-300">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google Icon"
                className="h-5 w-5"
              />
              Sign in with Google
            </button>
            <div className="flex w-full  gap-3 items-center justify-between">
              <div className="border-t w-full border-black dark:border-gray-300 border-opacity-50"></div>
              <div className="w-full text-sm text-black dark:text-gray-300 opacity-50">
                or continue with email
              </div>
              <div className="border-t w-full border-black dark:border-gray-300 border-opacity-50"></div>
            </div>
			<Login />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signin;
