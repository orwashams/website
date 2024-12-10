import { ArrowDown, ArrowRight } from "lucide-react";
import { Service } from "../ui/service";

export const Services = () => {
  return (
    <section className=" w-full flex items-center flex-col gap-4 justify-center">
      <div className="flex items-center gap-4">
        <div className="group flex items-center gap-2  bg-dark hover:bg-light/5 text-white p-2  transition-all duration-300 ease-in-out border-light/50 border rounded-full">
          <ArrowDown size={20} />
        </div>
        <h2 className="uppercase text-light/80">My Services</h2>
      </div>
      <div className="flex gap-8">
        <Service
          number={"01"}
          title={"Web Design"}
          description={
            "Visually stunning web designs that captivate your audience by blending your brand voice and customer needs."
          }
          link={"#"}
          linkText={"About Web Design"}
        />
        <Service
          number={"02"}
          title={"Development"}
          description={
            "Get custom web development solutions that are tailored to your specifications, designed to deliver a flawless user experience."
          }
          link={"#"}
          linkText={"About Development"}
        />
        <Service
          number={"03"}
          title={"Content & Seo"}
          description={
            "Proven SEO strategies that enhance your online performance, bringing you to the forefront of organic search results."
          }
          link={"#"}
          linkText={"About Content & Seo"}
        />
      </div>
    </section>
  );
};
