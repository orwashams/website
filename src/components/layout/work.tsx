import { WorkCard } from "../ui/work-card";

export const Work = () => {
  return (
    <section className=" w-full flex  flex-col gap-4">
      <div className="p-4">
        <h2 className="text-3xl">Selected Work</h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <WorkCard
          href="https://www.theburgerplace.co.il"
          imageSrc="https://utfs.io/a/k9x3ychkn3/pneMvLq0K87MNOWykk8HldY4Ir697fVtTop3KnxZjgE80cUv"
          imageAlt="An screenshot of the burger place website"
          title="The Burger Place"
        />
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
