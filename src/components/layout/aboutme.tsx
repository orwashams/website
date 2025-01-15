import Image from "next/image";
import { Socials } from "../ui/socials";

export const AboutMe = () => {
  return (
    <section>
      <div className="w-full flex items-center justify-between  py-24 gap-20">
        <div className="flex-1 flex justify-end ">
          <p className="text-9xl italic font-thin ">Orwa</p>
        </div>

        <div className="flex-1 flex justify-center">
          <Image
            src={
              "https://utfs.io/a/k9x3ychkn3/pneMvLq0K87MBg77hRH7WChH9aJZujgPy3nXVoG68Sv4QqDK"
            }
            alt={"orwa's logo"}
            width={500}
            height={500}
            className="drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
          />
        </div>

        <div className="flex-1 ">
          <p className="text-9xl italic font-thin">Shams</p>
        </div>
      </div>

      <div className="flex px-56">
        <div className="flex-1 flex items-center">
          <p className="text-2xl text-center">
            Hi, I'm Orwa - a freelancer specializing in premium web design,
            development, and SEO services. I'm passionate about creating unique
            and effective solutions for my clients, and I bring a personal touch
            to every project. Let's work together to bring your vision to life!
          </p>
        </div>
      </div>

      <Socials />
    </section>
  );
};
