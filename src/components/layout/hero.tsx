import { GridBeams } from "../ui/grid-beams";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative w-full  h-screen flex items-center -z-10">
      <GridBeams />
      <div className="absolute h-full right-0 bg-gradient-to-l from-dark to-transparent w-44 " />
      <div className="absolute h-44 bottom-0 bg-gradient-to-t from-dark to-transparent w-full" />
      <div className="absolute h-72 top-0 bg-gradient-to-b from-dark to-transparent w-full" />
      <div className="absolute h-full left-0 bg-gradient-to-r from-dark to-transparent w-44" />
    </section>
  );
}
