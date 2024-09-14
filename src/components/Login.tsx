"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

type Props = {
  className?: string;
  callbackUrl?: string;
};

export default function Login(props: Props) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const email = useRef("");
  const password = useRef("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signIn("credentials", {
      email: email.current,
      password: password.current,
      redirect: false,
      callbackUrl: props.callbackUrl ?? "http://localhost:3000",
    });
  };

  return (
    <div className={props.className}>
      <form className="w-3/4" onSubmit={onSubmit}>
        {/* Email Field */}
        <div className="mb-6">
          <div className="flex items-center border rounded-[12px] gap-3 shadow-sm py-2 px-4 bg-gray-100 dark:bg-gray-700">
            <FaEnvelope className="text-gray-600 dark:text-gray-400 mr-2" />
            <input
              className="w-full bg-transparent focus:outline-none text-gray-800 dark:text-white"
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              onChange={(e) => (email.current = e.target.value)}
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
              onChange={(e) => (password.current = e.target.value)}
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

        {/* Remember Me Checkbox */}
        <div className="mb-6 flex w-full justify-between text-sm px-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <span className="ml-2 text-gray-700 dark:text-gray-300">
              Remember me
            </span>
          </label>
          <div className="text-[#1784C5] hover:underline  cursor-pointer">
            Forgot password?
          </div>
        </div>

        {/* Login Button */}
        <div className="text-center mb-6">
          <button
            type="submit"
            className="w-full bg-[#1784C5] hover:bg-[#18567a] text-white font-bold py-2 px-4 rounded-[12px] focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </div>

        <div>
          Dont have account ?{" "}
          <Link
            href="/signup"
            className="text-[#1784C5] hover:underline transition"
          >
            {" "}
            Create account
          </Link>
        </div>
      </form>
    </div>
  );
}
