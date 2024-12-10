import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export const Toolkit = () => {
  return (
    <section className=" w-full flex items-center flex-col justify-center ">
      {/* <h2 className="uppercase text-light/80 text-center">
        Development Toolkit
      </h2> */}
      <InfiniteMovingCards items={links} direction="right" speed="normal" />
    </section>
  );
};

const links = [
  {
    url: "https://v0.dev/",
    content: "[v0]",
  },
  {
    url: "https://nextjs.org/",
    content: "[NextJS]",
  },
  {
    url: "https://svelte.dev/",
    content: "[Svelte]",
  },
  {
    url: "https://react.dev/",
    content: "[React]",
  },
  {
    url: "https://github.com",
    content: "[GitHub]",
  },
  {
    url: "https://vercel.com/",
    content: "[Vercel]",
  },
  {
    url: "https://coolify.io/",
    content: "[Coolify]",
  },
  {
    url: "https://www.sqlite.org/",
    content: "[SQLite]",
  },
  {
    url: "https://turso.tech",
    content: "[Turso]",
  },

  {
    url: "https://www.typescriptlang.org/",
    content: "[TypeScript]",
  },
  {
    url: "https://ui.aceternity.com",
    content: "[AceternityUI]",
  },

  {
    url: "https://tailwindcss.com/",
    content: "[TailwindCSS]",
  },
  {
    url: "https://motion.dev/",
    content: "[Motion]",
  },
];
