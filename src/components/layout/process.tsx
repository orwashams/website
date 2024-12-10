import Image from "next/image";
import { Timeline } from "../ui/timeline";
import { ProcessCard } from "../ui/process-card";

export const Process = () => {
  const data = [
    {
      title: "01",
      content: (
        <ProcessCard
          title={"Discovery Call"}
          subtitle={"Do We Match?"}
          time={"2 HOURS"}
          text={
            "Before we start, we determine if and how I can help you. What are your requirements for your new website? Why do you need a new website? What goals do you have, and what problems can we solve with a new website?"
          }
          list={[
            "We get to know each other better",
            "Determine how I can best assist you",
            "Understand the goals you have for your website",
          ]}
        />
      ),
    },
    {
      title: "02",
      content: (
        <ProcessCard
          title={"Concept & STrategy"}
          subtitle={"WE need a plan"}
          time={"2 Weeks"}
          text={
            "Together, we develop a strategy that successfully combines your goals with the needs of your target audience. Based on this concept, I create the first wireframes and an interactive prototype. This provides us with a very good impression of the website and the user interface."
          }
          list={["UX Design", "Wireframes", "Interactive Prototype"]}
        />
      ),
    },
    {
      title: "03",
      content: (
        <ProcessCard
          title={"web Design"}
          subtitle={"Some Magic"}
          time={"2 Weeks"}
          text={
            "Now comes the magic. Based on the previously developed concept, I create a high-end screen design perfectly tailored to your brand. A web design that sets you apart from your competition, fits your target audience ideally, and provides an excellent user experience."
          }
          list={[
            "High-end web design tailored to your brand",
            "Interactive prototype of the design",
          ]}
        />
      ),
    },
    {
      title: "04",
      content: (
        <ProcessCard
          title={"Development"}
          subtitle={"More Magic"}
          time={"2 weeks"}
          text={
            "In this step, we breathe life into your new high-end design. You will receive a custom-built website using a modular web design system and CMS integration. Animations will add the necessary flair to your site and set you apart from the boring competition."
          }
          list={["CMS Integration", "Animations", "High-end website"]}
        />
      ),
    },
    {
      title: "05",
      content: (
        <ProcessCard
          title={"Website onboarding"}
          subtitle={"Ready to go"}
          time={"2 Hours"}
          text={
            "In a personal workshop, I will show you how to request changes to your new website quickly and easily. Additionally, you will receive personalized video tutorials that you can access at any time. It's as simple as that."
          }
          list={[
            "Personal workshop",
            "Personalized video tutorials",
            "Support",
          ]}
        />
      ),
    },
  ];
  return (
    <section className=" w-full flex items-center flex-col justify-center ">
      <h2 className="uppercase text-light/80 text-center">The Process</h2>
      <p className="text-8xl font-light ">Your Website</p>
      <p className="text-8xl font-light italic ">in 5 steps</p>

      <Timeline data={data} />
    </section>
  );
};
