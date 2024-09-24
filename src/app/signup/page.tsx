"use client";
import Footer from "@/components/footer/Footer";
import Link from "next/link";
import React, { useRef } from "react";
import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Backend_URL } from "../lib/Constants";
import { signIn } from "next-auth/react";

type FormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const data = useRef<FormInputs>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleGoogleSignIn = async () => {
    const response = await signIn("google", {
      redirect: false,
      callbackUrl: "/",
    });
    console.log("response: ", response);
  };

  const register = async (event: any) => {
    event.preventDefault();
    const res = await fetch(Backend_URL + "/auth/register", {
      method: "POST",
      body: JSON.stringify({
        firstName: data.current.firstName,
        lastName: data.current.lastName,
        email: data.current.email,
        password: data.current.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(data);

    if (!res.ok) {
      alert(res.statusText);
      return;
    }

    const response = await res.json();
    alert("User Registered!");
    console.log({ response });
  };
  return (
    <div className="h-screen bg-white dark:bg-gray-900 mt-20 pt-10 p flex flex-col gap-7">
      <div className="text-center">
        <div className="font-vietnam text-[28px] font-bold">
          Sign up to our community
        </div>
        <div className="text-paragraph text-black dark:text-gray-300 opacity-50">
          Welcome back, Please enter your details
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
          Sign up with Google
        </button>
        <div className="flex  gap-3 items-center ">
          <div className="border-t flex-none w-16 border-black dark:border-gray-300 border-opacity-50"></div>
          <div className="grow text-sm text-black text-center dark:text-gray-300 opacity-50">
            or continue with email
          </div>
          <div className="border-t flex-none w-16 border-black dark:border-gray-300 border-opacity-50"></div>
        </div>
        <form className="px-4">
          {/* First Name Field */}
          <div className="mb-4">
            <div className="flex items-center border rounded-[12px] shadow-sm py-2 px-4 gap-3 bg-gray-100 dark:bg-gray-700">
              <FaUser className="text-gray-600 dark:text-gray-400 mr-2" />
              <input
                className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-white"
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                required
                onChange={(e) => (data.current.firstName = e.target.value)}
              />
            </div>
          </div>
          {/* Last Name Field */}
          <div className="mb-4">
            <div className="flex items-center border rounded-[12px] shadow-sm py-2 px-4 gap-3 bg-gray-100 dark:bg-gray-700">
              <FaUser className="text-gray-600 dark:text-gray-400 mr-2" />
              <input
                className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-white"
                type="text"
                id="lastName"
                placeholder="Enter your last name"
                required
                onChange={(e) => (data.current.lastName = e.target.value)}
              />
            </div>
          </div>
          {/* Email Field */}
          <div className="mb-4">
            <div className="flex items-center border rounded-[12px] shadow-sm py-2 px-4 gap-3 bg-gray-100 dark:bg-gray-700">
              <FaEnvelope className="text-gray-600 dark:text-gray-400 mr-2" />
              <input
                className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-white"
                type="email"
                id="email"
                placeholder="Enter your email"
                required
                onChange={(e) => (data.current.email = e.target.value)}
              />
            </div>
          </div>
          {/* Password Field */}
          <div className="mb-4">
            <div className="flex items-center border rounded-[12px] shadow-sm py-2 px-4 gap-3 bg-gray-100 dark:bg-gray-700">
              <FaLock className="text-gray-600 dark:text-gray-400 mr-2" />
              <input
                className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-white"
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                required
                onChange={(e) => (data.current.password = e.target.value)}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="ml-2 text-gray-600 dark:text-gray-400 focus:outline-none"
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <div className="text-center mb-6">
            <button
              onClick={register}
              type="submit"
              className="w-full bg-[#1784C5] hover:bg-[#18567a] text-white font-bold py-2 px-4 rounded-[12px] focus:outline-none focus:shadow-outline"
            >
              Sign up
            </button>
          </div>

          <div className="text-center text-sm">
            Already have an account ?{" "}
            <Link href="/signin" className="text-[#1784C5]">
              {" "}
              Login
            </Link>
          </div>
        </form>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Signup;
