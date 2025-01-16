"use client";
import { useEffect, useRef } from "react";
import { MotionConfig, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export function HamburgerButton({ isOpen, setIsOpen }: Props) {
  const menuRef = useRef<HTMLButtonElement>(null);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false); // Close the menu when clicked outside
      }
    }
    if (isDesktopOrLaptop) {
      setIsOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDesktopOrLaptop, menuRef, setIsOpen]);

  return (
    <MotionConfig transition={{ duration: 0.4, ease: "easeIn" }}>
      <motion.button
        initial={false}
        className="relative w-10 h-10   rounded-full "
        onMouseDown={() => setIsOpen(!isOpen)}
        animate={isOpen ? "open" : "closed"}
        name="hamburger menu button"
        aria-label="hamburger menu button"
        ref={menuRef}
      >
        <motion.span
          className="absolute h-[1px] w-10 bg-light "
          style={{
            top: "35%",
            left: "50%",
            x: "-50%",
            y: "-50%",
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "30deg"],
              top: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: ["30deg", "0deg", "0deg"],
              top: ["50%", "50%", "35%"],
            },
          }}
        />
        <motion.span
          className="absolute h-[1px] w-10 bg-light"
          style={{
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-30deg"],
            },
            closed: {
              rotate: ["-30deg", "0deg", "0deg"],
            },
          }}
        />
        <motion.span
          className="absolute h-[1px] w-10 bg-light"
          style={{
            bottom: "35%",
            left: "50%",
            x: "-50%",
            y: "50%",
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "30deg"],
              bottom: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: ["30deg", "0deg", "0deg"],
              bottom: ["50%", "50%", "35%"],
            },
          }}
        />
      </motion.button>
    </MotionConfig>
  );
}
