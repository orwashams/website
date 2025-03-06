import { ArrowDown } from "lucide-react";
import { WorkCard } from "../ui/work-card";

export const Work = () => {
  return (
    <section className=" w-full flex  flex-col gap-4 scroll-mt-24 " id="work">
      <div className="flex items-center gap-4 w-full justify-center">
        <div className="group flex items-center gap-2  bg-dark hover:bg-light/5 text-white p-2  transition-all duration-300 ease-in-out border-light/50 border rounded-full">
          <ArrowDown size={20} />
        </div>
        <h2 className="uppercase text-light/80">Selected Work</h2>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 ">
        <WorkCard
          href="https://www.jalaa.co.il"
          imageSrc="https://utfs.io/a/k9x3ychkn3/pneMvLq0K87M5WdOyEE4aSJjdvgQuCncklVzHI6KRoMhTPFf"
          imageAlt="An screenshot of jalaa.co.il website"
          title="AJ Finance"
        />
        <WorkCard
          href="https://maruos.framer.website/"
          imageSrc="https://utfs.io/a/k9x3ychkn3/pneMvLq0K87MKUbBo9Mmq470ywfC2MD3zY1Oakr5U6eldoVI"
          imageAlt="An screenshot of a framer template website"
          title="MaroOS"
        />
        <WorkCard
          href="https://orwashams.github.io/"
          imageSrc="https://utfs.io/a/k9x3ychkn3/pneMvLq0K87MxV6wQS9kE3lVdDKn4e8ogcXCJzthjixNRbAw"
          imageAlt="An screenshot of orwa's github hosted website"
          title="My Old Site"
        />
      </div>
    </section>
  );
};
