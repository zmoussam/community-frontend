"use client";
import Button from "@/components/buttons/button";
import Footer from "@/components/footer/Footer";
import { useTheme } from "next-themes";
import Image from "next/image";
import "./globals.css";
import TypewriterEffect from "@/components/title-with-animation/TypewriterEffect";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import NavLink from "@/components/navLink/NavLink";
import SignInButton from "@/components/SignInButton";

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <main className="flex flex-col h-screen">
      <div className="relative flex-1 basis-auto overflow-hidden min-h-[560px] flex flex-col">
        <Navbar />
        <div className="block h-[75px]"></div>

        <div className="h-full relative overflow-hidden justify-center items-center flex w-full">
          <div className="flex flex-col items-center justify-center flex-1">
            <h1 className="text-h1 font-bold text-center title-fadeIn ">
              Your Story, Our <span className="text-[#29ADC5] ">Community</span>
            </h1>
            {/* <TypewriterEffect /> */}
            <p className="text-paragraph font-vietnam font-medium text-center mt-[24px] max-w-3xl title-fadeIn">
              Where Voices Connect and Ideas Thrive. Share your stories, connect
              with like-minded individuals, and become part of a vibrant
              blogging community dedicated to creativity and collaboration.
            </p>
            <div className="mt-[24px]">
              <Button
                content="Start reading"
                action={() => console.log("test")}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
      {/* <div
        className="hidden md:block mt-8"
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
      >
        <Image
          src={`/assets/background/Home-background-${
            theme === "dark" ? "dark" : "light"
          }.webp`}
          layout="fill"
          alt="Home background"
        />
      </div> */}
    </main>
  );
}
