import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";

export default function Hero() {
  return (
    <section className=" w-full h-dvh text-4xl relative">
      {" "}
      <div className="h-[40rem] w-full rounded-md  relative flex flex-col items-center justify-center  antialiased">
        <div className=" flex flex-col justify-center items-center gap-32">
          <Image
            src={"/hero/laptop2.png"}
            width={400}
            height={400}
            alt="Hero image"
          />

          <h1 className="relative z-10 max-w-2xl text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Shaping Your Digital Future
          </h1>
        </div>
        <BackgroundBeams />
      </div>
    </section>
  );
}
