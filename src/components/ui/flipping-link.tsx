"use client";

import { useState } from "react";
import Link from "next/link";
import type { LinkProps } from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import MorphingIcon from "./morphing-icon";

type Props = LinkProps & {
  children?: React.ReactNode;
};

export const FlippingLink = ({ children, ...props }: Props) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigator.clipboard.writeText("contact@orwa.dev").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <TooltipProvider>
      <Tooltip open={copied}>
        <TooltipTrigger asChild>
          <Link
            {...props}
            href="#contact-us"
            aria-describedby="contact"
            aria-labelledby="contact"
            tabIndex={0}
            role="link"
            className="flex"
            onClick={(e) => e.preventDefault()}
          >
            <button
              className="group relative h-9 overflow-hidden rounded-md bg-light px-6"
              onClick={copyToClipboard}
            >
              <div className="text-dark motion-reduce:transition-none transition duration-500 group-hover:-translate-y-10">
                <div
                  className="flex h-10 items-center justify-center text-nowrap gap-1"
                  id="contact"
                >
                  <span className="ml-2 ">{children}</span>{" "}
                  <MorphingIcon isChecked={copied} />
                </div>

                <div
                  className="flex h-10 items-center justify-center text-nowrap gap-1"
                  aria-hidden
                >
                  <span className="ml-2">{children}</span>{" "}
                  <MorphingIcon isChecked={copied} />
                </div>
              </div>
            </button>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>Email Copied</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
