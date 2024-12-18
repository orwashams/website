"use client";
import { cn } from "@/lib/utils";
import { PenLineIcon } from "lucide-react";

export const CmsShowcase = () => {
  return (
    <div
      className={cn(
        "w-44 h-44 border border-light/30 bg-dark flex flex-col gap-8   py-6   rounded-2xl transition-colors duration-500"
      )}
    >
      <div className="flex flex-col gap-2 items-center">
        <p className={cn("text-light uppercase")}> CMS</p>
        <p className={cn("text-light italic text-xs text-center font-bold")}>
          Content Managment Systems
        </p>
      </div>
      <div className="flex justify-center ">
        <div className=" flex   items-center gap-2  bg-dark hover:bg-light/5 text-white p-2  transition-all duration-300 ease-in-out border-light border rounded-full">
          <PenLineIcon size={20} />
        </div>
      </div>
    </div>
  );
};
