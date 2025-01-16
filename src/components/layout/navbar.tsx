"use client";

import { useState } from "react";
import { Pattaya } from "next/font/google";
import Link from "next/link";

import { AnimatedLink } from "@/components/ui/animated-link";
import { FlippingLink } from "@/components/ui/flipping-link";

import { HamburgerButton } from "@/components/ui/hamburger";

const pattaya = Pattaya({
  weight: "400",
  subsets: ["latin"],
});

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="py-4 fixed top-0 right-0 -translate-x-1/2 flex justify-center z-50 px-2 sm:w-1/2 w-full   "
      aria-label="Main Navigation"
    >
      <div
        className={`flex sm:flex-row flex-col w-full    items-center justify-between sm:justify-center px-4  p-3   border border-light/10 backdrop-blur-sm bg-dark/60 rounded-lg `}
      >
        <div className="flex items-center  justify-between w-full  ">
          {/* Left */}
          <Link
            href={"/"}
            className={`${pattaya.className} text-3xl tracking-tight flex-1 `}
          >
            orwa.
          </Link>

          {/* Middle */}
          <div className=" items-center gap-4 text-sm hidden sm:flex  flex-1 w-full justify-center">
            <AnimatedLink href="#about">
              <p>About</p>
            </AnimatedLink>
            <AnimatedLink href="#services">
              <p>Services</p>
            </AnimatedLink>

            <AnimatedLink href="#work">
              <p>Work</p>
            </AnimatedLink>
          </div>

          {/* Right */}
          <div className="flex-1 hidden sm:flex justify-end ">
            <FlippingLink href={"#contact"}>Contact Us</FlippingLink>
          </div>

          <div className="flex sm:hidden">
            <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>

        <div
          className={`sm:hidden transition-all duration-300 ease-in-out  ${
            isOpen ? "h-56  opacity-100" : "h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-8 p-4  backdrop-blur-sm bg-dark/60 rounded-lg">
            <AnimatedLink href="#about">
              <p>About</p>
            </AnimatedLink>
            <AnimatedLink href="#services">
              <p>Services</p>
            </AnimatedLink>
            <AnimatedLink href="#work">
              <p>Work</p>
            </AnimatedLink>
            <FlippingLink href={"#contact"}>Contact Us</FlippingLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
