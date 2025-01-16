"use client";
import { useState } from "react";
import { CmsShowcase } from "../ui/cms-showcase";
import { DarkLightShowcase } from "../ui/darklight-showcase";
import { AnimationShowcase } from "../ui/animation-showcase";
import { Showcase3D } from "../ui/3d-showcase";

export const Showcase = () => {
  const [title, setTitle] = useState("SOME OF OUR CAPABILITIES");
  return (
    <section className="w-full  flex items-center justify-center flex-col gap-4 ">
      <h2 className="  text-light/80 text-center">{title}</h2>
      <div className="flex gap-4 sm:flex-row flex-col">
        <DarkLightShowcase />

        <CmsShowcase title={title} setTitle={setTitle} />

        <AnimationShowcase />

        <Showcase3D />
      </div>
    </section>
  );
};
