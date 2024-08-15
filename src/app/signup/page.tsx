"use client";
import Footer from "@/components/footer/Footer";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };
  return (
    <div className="h-screen">
      <div className=" h-full">
        <div className=" h-full px-40  dark:bg-gray-900 flex items-center justify-center text-center">
          <div className="  h-full w-1/3 flex flex-col items-center px-10 justify-center gap-8 ">
            <div className="text-center">
              <div className="font-vietnam text-h2 font-bold mb-3 whitespace-nowrap">
                Sign up to our community
              </div>
              <div className="text-paragraph text-black dark:text-gray-300 opacity-50">
                Welcome back, Please enter your details
              </div>
            </div>
            <button className=" flex w-3/4 items-center justify-center gap-4 px-4 py-2 rounded-[12px] font-medium transition-colors dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 bg-white text-black hover:bg-gray-100 border border-gray-300">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google Icon"
                className="h-5 w-5"
              />
              Sign up with Google
            </button>
            <div className="flex w-full  items-center justify-between">
              <div className="border-t w-2/4 border-black dark:border-gray-300 border-opacity-50"></div>
              <div className="w-full text-sm text-black dark:text-gray-300 opacity-50">
                or continue with your details
              </div>
              <div className="border-t w-2/4 border-black dark:border-gray-300 border-opacity-50"></div>
            </div>
            <form className="w-3/4">
              {/* Full Name Field */}
              <div className="mb-4">
                <div className="flex items-center border rounded-[12px] shadow-sm py-2 px-4 gap-3 bg-gray-100 dark:bg-gray-700">
                  <FaUser className="text-gray-600 dark:text-gray-400 mr-2" />
                  <input
                    className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-white"
                    type="text"
                    id="fullName"
                    placeholder="Enter your full name"
                    required
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

              {/* Confirm Password Field */}
              <div className="mb-4">
                <div className="flex items-center border rounded-[12px] shadow-sm py-2 px-4 gap-3 bg-gray-100 dark:bg-gray-700">
                  <FaLock className="text-gray-600 dark:text-gray-400 mr-2" />
                  <input
                    className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-white"
                    type={confirmPasswordVisible ? "text" : "password"}
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="ml-2 text-gray-600 dark:text-gray-400 focus:outline-none"
                  >
                    {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              {/* Login Button */}
              <div className="text-center mb-6">
                <button
                  type="submit"
                  className="w-full bg-[#1784C5] hover:bg-[#18567a] text-white font-bold py-2 px-4 rounded-[12px] focus:outline-none focus:shadow-outline"
                >
                  Sign up
                </button>
              </div>

              <div>
                Already have an account ?{" "}
                <Link href="/signin" className="text-[#1784C5]">
                  {" "}
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
