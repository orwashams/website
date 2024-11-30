import Image from "next/image";
import { GridBeams } from "../ui/grid-beams";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative w-full  h-screen flex items-center flex-col  -z-10">
      <GridBeams>
        <div className="flex flex-col items-center gap-24 pt-24">
          <Image
            src={
              "https://utfs.io/a/k9x3ychkn3/pneMvLq0K87MBg77hRH7WChH9aJZujgPy3nXVoG68Sv4QqDK"
            }
            alt={"orwa's logo"}
            width={500}
            height={500}
            className="drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] "
          />
          <div className="flex flex-col items-center gap-8">
            <h1 className="text-4xl  md:text-6xl lg:text-8xl font-light  text-light italic text-center tracking-tighter max-w-[60%]">
              Web Developer & Designer
            </h1>
            <p className="text-sm md:text-lg lg:text-2xl text-gray-400 max-w-xs md:max-w-2xl mx-auto px-4">
              Premium Web Design, Development, and SEO services to help your
              business stand out.
            </p>
          </div>
        </div>
      </GridBeams>

      <div className="absolute h-full right-0 bg-gradient-to-l from-dark to-transparent w-44 " />
      <div className="absolute h-44 bottom-0 bg-gradient-to-t from-dark to-transparent w-full" />
      <div className="absolute h-72 top-0 bg-gradient-to-b from-dark to-transparent w-full" />
      <div className="absolute h-full left-0 bg-gradient-to-r from-dark to-transparent w-44" />
    </section>
  );
}
