import React from "react";
import NavLink from "../navLink/NavLink";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <main className="bg-[#F1F1F1]">
      <div className="lg:hidden">
        <div className="bg-black static min-w-[100vw] h-[72px] items-center flex">
          <div className="justify-center flex">
            <div className="my-0 mx-6 min-w-0  max-w-[1192px] w-full">
              <div className="block">
                <p className="text-white text-sm font-normal">
                  <Link className="mr-5 text-[13px]" href={"/about"}>
                    About
                  </Link>
                  <Link className="mr-5 text-[13px]" href={"/contact"}>
                    Contact us
                  </Link>
                  <Link className="mr-5 text-[13px]" href={"/terms"}>
                    Terms
                  </Link>
                  <Link className="mr-5 text-[13px]" href={"/privacy"}>
                    Privacy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" hidden lg:block">
        <div className="hidden lg:block h-0 border border-b-black w-full"></div>
		<div className="flex justify-center">
			<div className="max-w-[680px] mx-6 w-full">
				<div className="flex-wrap py-6 flex-row flex">
					<div className="mr-4 block">
						<Link href={"/about"}>About</Link>
					</div>
					<div className="mr-4 block">
						<Link href={"/service"}>Service</Link>
					</div>
					<div className="mr-4 block">
						<Link href={"/terms"}>Terms</Link>
					</div>
					<div className="mr-4 block">
						<Link href={"/blog"}>Blog</Link>
					</div>
				</div>
			</div>
		</div>
      </div>
      {/* <div className=" bg-[#F0F0F0] dark:bg-[#242424] text-sm text-[#808080] border-t border-black  bottom-0 w-full">
        <div className="flex justify-between items-center h-16 px-16">
          <div className="dark:text-gray-200 flex justify-between w-1/4">
            <NavLink href="/" content="Home" />
            <NavLink href="/blogs" content="Blogs" />
            <NavLink href="/about" content="About" />
            <NavLink href="/contact" content="Contact us" />
            <NavLink href="/privacy" content="Privacy" />
            <NavLink href="/signin" content="Sign in" />
          </div>
          <div className="dark:text-gray-200">
            &copy; {currentYear} medium.community.com All rights reserved
          </div>
        </div>
      </div> */}
    </main>
  );
};

export default Footer;
