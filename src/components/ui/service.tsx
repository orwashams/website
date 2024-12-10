import { ArrowRight } from "lucide-react";
import Link from "next/link";

type Props = {
  number: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
};

export const Service = (props: Props) => {
  return (
    <div className=" border  border-light/30 p-8 flex flex-col gap-4 bg-dark/70">
      <div className="opacity-50">{props.number}</div>

      <h3 className="text-2xl">{props.title}</h3>

      <p className="opacity-80">{props.description}</p>

      <Link href={props.link} className="flex items-center gap-4 group w-fit">
        <button
          type="button"
          className="group flex items-center gap-2 -rotate-45 bg-dark group-hover:bg-light/5 text-white p-2  transition-all duration-700 ease-in-out border-light/50 border rounded-full"
        >
          <ArrowRight
            className="transition-transform duration-300 group-hover:rotate-45 "
            size={20}
          />
        </button>

        <p>{props.linkText}</p>
      </Link>
    </div>
  );
};
