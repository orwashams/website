"use client";

import React, { useEffect, useState } from "react";

import { motion, Transition } from "framer-motion";

import { Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";

export function DarkLightShowcase() {
  // const [isOn, setIsOn] = useState(false);

  const [isOn, setIsOn] = useState(true);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    // toggleTheme();
  };

  const spring: Transition = {
    type: "spring",
    stiffness: 200,
    damping: 30,
  };

  return (
    <div
      className={cn(
        "w-44 h-44 border border-light/30 bg-light flex justify-between py-6  items-center flex-col rounded-2xl transition-colors duration-500",

        isOn && "bg-dark "
      )}
    >
      <h3 className={cn("text-dark uppercase", isOn && "text-light")}>
        {" "}
        Dark/Light Mode
      </h3>

      <div
        onPointerDown={toggleSwitch}
        className={` flex-start flex h-8 w-14 items-center rounded-[50px] border-2  p-[5px]   hover:cursor-pointer border-dark    ${
          isOn && "place-content-end border-light"
        }`}
      >
        <motion.div
          className="flex h-fit w-fit items-center justify-center rounded-full "
          layout
          transition={spring}
        >
          <motion.div whileTap={{ rotate: 360 }}>
            {isOn ? (
              <Moon className="text-light" size={20} />
            ) : (
              <Sun className="text-dark" size={20} />
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
