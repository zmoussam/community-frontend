"use client";
import React from "react";
import Image from "next/image";
import styles from "./signin.module.css";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa";
import Link from "next/link";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen">
      <div className="pt-20 h-full">
        <div className=" h-full px-40 py-20 bg-white flex items-center justify-center text-center">
          <div className="bg-black h-full w-1/3">form</div>
        </div>
        {/* <div className="bg-gradient-to-t from-[#0B405F] to-[#1784C5] w-full h-full text-center flex items-center justify-center">
            <div>
              <Image
                src="/assets/auth/authside.png" // Replace with your logo image path
                alt="Logo"
                width={500}
                height={500}
                quality={100}
              />
            </div>
          </div> */}
      </div>
    </div>
    // <div className="container">
    //   <div className=" bg-gray-200">
    //     <div className="h-full w-full grid md:grid-cols-2 rounded-md overflow-hidden">
    //       <div className="right flex flex-col justify-evenly items-center bg-white">
    //         <div className="text-center py-10"></div>
    //         <section className="w-7/12 mx-auto flex text-start  items-center flex-col gap-7">
    //           <div>
    //             <Image
    //               src="/assets/logo/logo.png" // Replace with your logo image path
    //               alt="Logo"
    //               width={150}
    //               height={250}
    //               quality={100}
    //             />
    //           </div>
    //           <div className="title">
    //             <h1 className="text-3xl text-gray-800 font-semibold mb-2">
    //               Welcome Back
    //             </h1>
    //             <p className="text-gray-500 mx-auto w-full text-xs">
    //               Welcome back! Please enter your details
    //             </p>
    //           </div>

    //           <form className="flex flex-col gap-5">
    //             <div className="flex flex-col gap-1">
    //               <label htmlFor="email" className="text-gray-800 text-sm">
    //                 Email
    //               </label>
    //               <div className={styles.input_group}>
    //                 <input
    //                   className={styles.input_text}
    //                   id="email"
    //                   type="email"
    //                   name="email"
    //                   placeholder="Enter your email"
    //                 />
    //               </div>
    //             </div>
    //             <div className="flex flex-col gap-1">
    //               <label htmlFor="password" className="text-gray-800 text-sm">
    //                 Password
    //               </label>
    //               <div className={styles.input_group}>
    //                 <input
    //                   type={`${showPassword ? "text" : "password"}`}
    //                   id="password"
    //                   className={styles.input_text}
    //                   name="password"
    //                   placeholder="Enter your password"
    //                 />
    //                 <span
    //                   className="icon flex items-center px-4"
    //                   onClick={() => setShowPassword(!showPassword)}
    //                 >
    //                   {showPassword ? (
    //                     <FaRegEyeSlash size={20} />
    //                   ) : (
    //                     <FaRegEye size={20} />
    //                   )}
    //                 </span>
    //               </div>
    //             </div>

    //             <div className={styles.input_button}>
    //               <button className={styles.button} type="submit">
    //                 Sign in
    //               </button>
    //             </div>
    //             <div className={styles.input_button}>
    //               <button className={styles.button_custom} type="button">
    //                 <Image
    //                   src={"/assets/images/google.svg"}
    //                   alt="google icon"
    //                   width={20}
    //                   height={20}
    //                 ></Image>
    //                 Sign in with Google{" "}
    //               </button>
    //             </div>
    //           </form>

    //           <p className="text-center text-sm  text-gray-400">
    //             Don't have an account?{" "}
    //             <Link
    //               href={"/auth/signup"}
    //               className="text-gray-800 font-medium"
    //             >
    //               Sign up for free
    //             </Link>
    //           </p>
    //         </section>
    //       </div>
    //     </div>
    //   </div>
    //   <div className={styles.backgroundImg + " hidden md:block"}></div>
    // </div>
  );
};

export default Signin;
