import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

export const WorkCard = (props: Props) => {
  return (
    <Link href={props.href} className="group " target="_blank" rel="noreferrer">
      <div className="p-4 border border-light/30  h-96  overflow-hidden relative hover:opacity-80 transition-all duration-200 ease-in-out">
        <Image
          src={props.imageSrc}
          alt={props.imageAlt}
          fill
          className="object-cover opacity-35"
        />

        <div className="absolute bottom-10 left-0 bg-dark/70 backdrop-blur-sm  h-16 flex items-center w-full">
          <div className="px-4">
            <p className="text-2xl ">{props.title}</p>
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <button
            type="button"
            className=" flex items-center gap-2 -rotate-45 bg-dark transition-all duration-700  p-2 ease-in-out border-light/50 border rounded-full   opacity-0 group-hover:opacity-100 "
          >
            <ArrowRight
              className="transition-transform duration-300 group-hover:rotate-45"
              size={20}
            />
          </button>
        </div>
      </div>
    </Link>
  );
};
