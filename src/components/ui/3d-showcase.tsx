"use client";
import { cn } from "@/lib/utils";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function Showcase3D() {
  return (
    <CardContainer
      className={cn(
        "w-44 h-44 border border-light/30  flex flex-col gap-8 py-6 rounded-2xl transition-colors duration-500   justify-center items-center px-4"
      )}
    >
      <CardItem as="h3" className={cn("text-light uppercase ")} translateZ="10">
        3d
      </CardItem>

      <div className="flex flex-col  items-center   h-full">
        <CardItem
          translateZ={20}
          as="p"
          className={cn("text-light italic text-sm text-center font-bold ")}
        >
          Interactive 3D Animations
        </CardItem>
      </div>
    </CardContainer>
  );
}
