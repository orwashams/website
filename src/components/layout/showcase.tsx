import { CmsShowcase } from "../ui/cms-showcase";
import { DarkLightShowcase } from "../ui/darklight-showcase";

export const Showcase = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-4 ">
      <h2 className=" uppercase text-light/80 text-center">
        Some of our capabilities
      </h2>
      <div className="flex gap-4">
        <DarkLightShowcase />

        <CmsShowcase />
      </div>
    </div>
  );
};
