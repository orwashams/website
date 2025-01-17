import Image from "next/image";
import { Socials } from "../ui/socials";
import { TextCopy } from "../ui/text-copy";

export const AboutMe = () => {
  return (
    <section
      className="flex flex-col gap-4 justify-center items-center scroll-mt-28"
      id="about"
    >
      <h2 className="  text-light/80 text-center">ABOUT ME</h2>

      <div className="w-full flex items-center justify-between   gap-8 ">
        <div className="flex-1 flex justify-end ">
          <p className="text-lg sm:text-2xl md:text-4xl lg:text-6xl xl:text-8xl italic font-thin ">
            Orwa
          </p>
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
          <p className="text-lg sm:text-2xl md:text-4xl lg:text-6xl xl:text-8xl italic font-thin ">
            Shams
          </p>
        </div>
      </div>

      <div className="flex  ">
        <div className="flex-1 flex items-center">
          <p className="text-sm md:text-lg lg:text-2xl text-center">
            Hi, I&apos;m Orwa - a freelancer specializing in premium web design,
            development, and SEO services. I&apos;m passionate about creating
            unique and effective solutions for my clients, and I bring a
            personal touch to every project. Let&apos;s work together to bring
            your vision to life!
          </p>
        </div>
      </div>

      <Socials />
      <TextCopy
        text="GET IN TOUCH"
        toCopy="contact@orwa.dev"
        tooltipText="Email Copied!"
      />
    </section>
  );
};
