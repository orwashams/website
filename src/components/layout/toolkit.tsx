import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { url } from "inspector";

export const Toolkit = () => {
  return (
    <section className=" w-full flex items-center flex-col ">
      <h2 className="uppercase text-light/80">Development Toolkit</h2>
      <InfiniteMovingCards
        images={testimonials}
        direction="right"
        speed="fast"
      />
    </section>
  );
};

const testimonials = [
  {
    url: "https://cdn.brandfetch.io/tailwindcss.com/w/512/h/305/theme/light/symbol?c=1idpaZznFLrbi-vA0Q1",
    alt: "tailwind",
  },
  {
    url: "https://utfs.io/a/k9x3ychkn3/pneMvLq0K87MBg77hRH7WChH9aJZujgPy3nXVoG68Sv4QqDK",
    alt: "logo",
  },
  {
    url: "https://utfs.io/a/k9x3ychkn3/pneMvLq0K87MBg77hRH7WChH9aJZujgPy3nXVoG68Sv4QqDK",
    alt: "logo",
  },
  {
    url: "https://utfs.io/a/k9x3ychkn3/pneMvLq0K87MBg77hRH7WChH9aJZujgPy3nXVoG68Sv4QqDK",
    alt: "logo",
  },
  {
    url: "https://utfs.io/a/k9x3ychkn3/pneMvLq0K87MBg77hRH7WChH9aJZujgPy3nXVoG68Sv4QqDK",
    alt: "logo",
  },
  {
    url: "https://utfs.io/a/k9x3ychkn3/pneMvLq0K87MBg77hRH7WChH9aJZujgPy3nXVoG68Sv4QqDK",
    alt: "logo",
  },
  {
    url: "https://utfs.io/a/k9x3ychkn3/pneMvLq0K87MBg77hRH7WChH9aJZujgPy3nXVoG68Sv4QqDK",
    alt: "logo",
  },
  {
    url: "https://utfs.io/a/k9x3ychkn3/pneMvLq0K87MBg77hRH7WChH9aJZujgPy3nXVoG68Sv4QqDK",
    alt: "logo",
  },
];
