import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import Spline from "@splinetool/react-spline/next";
import { GridBeams } from "../ui/grid-beams";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative w-full  h-screen flex items-center -z-10">
      <GridBeams />
      <div className="absolute h-full right-0 bg-gradient-to-l from-primary to-transparent w-44" />
      <div className="absolute h-44 bottom-0 bg-gradient-to-t from-primary to-transparent w-full" />
      <div className="absolute h-44 top-0 bg-gradient-to-b from-primary to-transparent w-full" />
      <div className="absolute h-full left-0 bg-gradient-to-r from-primary to-transparent w-44" />
    </section>
  );
}
