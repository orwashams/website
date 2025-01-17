"use client";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import type { LinkProps } from "next/link";

type Props = LinkProps & {
  children?: React.ReactNode;
};

export const FlippingLink = ({ children, ...props }: Props) => {
  return (
    <Link
      {...props}
      href={"mailto:contact@orwa.dev"}
      aria-describedby="contact"
      aria-labelledby="contact"
      tabIndex={0}
      role="link"
      className="flex"
    >
      <button className="group relative h-9  overflow-hidden rounded-md bg-light  px-6  ">
        <div className=" text-dark motion-reduce:transition-none transition duration-500 group-hover:-translate-y-10 ">
          <div
            className="flex h-10 items-center justify-center  text-nowrap gap-1"
            id="contact"
          >
            <p>{children}</p>
            <SquareArrowOutUpRight size={20} />
          </div>

          <div
            className="flex h-10 items-center justify-center gap-1"
            aria-hidden
          >
            <p>{children}</p> <SquareArrowOutUpRight size={20} />
          </div>
        </div>
      </button>
    </Link>
  );
};
