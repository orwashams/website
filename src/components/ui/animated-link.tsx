import Link from "next/link";

import { Dot } from "lucide-react";

import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: React.ReactNode;
  withDot?: boolean;
  className?: string;
};

export const AnimatedLink = ({
  href,
  children,
  withDot = false,
  className,
}: Props) => {
  return (
    <section
      className={cn(
        "flex  items-center hover:text-light/70 uppercase tracking-widest",
        className
      )}
    >
      <Link
        href={href}
        className='relative  after:absolute after:bottom-[0] after:left-[0] after:h-[2px] after:w-full
                after:origin-bottom-left after:scale-x-0 after:bg-light/70 after:content-[""] after:[transition:transform_0.25s_ease-out] hover:after:origin-bottom-right 
                hover:after:scale-x-100'
      >
        {children}
      </Link>
      {withDot && <Dot />}
    </section>
  );
};
