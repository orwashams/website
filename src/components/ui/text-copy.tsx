"use client";

import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion, AnimatePresence } from "framer-motion";
import MorphingIcon from "./morphing-icon";

type Props = {
  text: string;
  toCopy: string;
  tooltipText: string;
};

export function TextCopy({ text, toCopy, tooltipText }: Props) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(toCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1000); // Reset after 2 seconds
    });
  };

  return (
    <TooltipProvider>
      <Tooltip open={copied}>
        <TooltipTrigger asChild>
          <div
            onClick={copyToClipboard}
            className="inline-flex items-center gap-2  overflow-hidden cursor-pointer  w-fit"
            aria-label={copied ? tooltipText : text}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                copyToClipboard();
              }
            }}
          >
            <motion.div
              animate={{
                width: copied ? "100%" : "auto",
                justifyContent: copied ? "center" : "flex-start",
              }}
              className="flex items-center gap-1 "
            >
              <AnimatePresence mode="wait">
                {!copied && (
                  <motion.span
                    key="get-in-touch"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-2 whitespace-nowrap"
                  >
                    {text}
                  </motion.span>
                )}
              </AnimatePresence>
              <MorphingIcon isChecked={copied} />
            </motion.div>
          </div>
        </TooltipTrigger>

        <TooltipContent>
          <p>{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
