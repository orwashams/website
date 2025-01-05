import { cn } from "@/lib/utils";

import { Meteors } from "./meteors";

export function AnimationShowcase() {
  return (
    <div
      className={cn(
        "w-44 h-44 border border-light/30  flex flex-col gap-8 py-6 rounded-2xl transition-colors duration-500  relative overflow-hidden items-center justify-center px-4"
      )}
    >
      <h3 className={cn("text-light uppercase")}>Animations</h3>

      <div className="flex flex-col items-center h-full">
        <p className={cn("text-light italic text-sm text-center font-bold")}>
          Captivating animations
        </p>
      </div>
      <Meteors number={30} />
    </div>
  );
}
