"use client";
import Button from "@/components/button/button";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div
        className="hidden md:block mt-4"
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
      >
        <Image
          src="/assets/background/Home-background.webp"
          layout="fill"
          alt="Home background"
        />
      </div>

      <div className="flex flex-col h-screen font-vietnam">
        <div className="flex flex-col items-center justify-center flex-1">
          <h1 className="text-h1 font-bold text-center">
            Your Story, Our <span className="text-[#29ADC5] ">Community</span>
          </h1>
          <p className="text-paragraph font-vietnam font-medium text-center mt-[24px] max-w-3xl">
            Where Voices Connect and Ideas Thrive. Share your stories, connect
            with like-minded individuals, and become part of a vibrant blogging
            community dedicated to creativity and collaboration.
          </p>
          <div className="mt-[24px]">
            <Button content="Get Started" action={() => console.log("test")} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
