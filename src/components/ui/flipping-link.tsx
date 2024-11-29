import { getI18n } from "@/locales/server";
import Link from "next/link";
import type { LinkProps } from "next/link";

type Props = LinkProps & {
  children?: React.ReactNode;
};

export const FlippingLink = async ({ children, ...props }: Props) => {
  const t = await getI18n();
  return (
    <Link
      {...props}
      href="#contact-us"
      aria-describedby="contact"
      aria-labelledby="contact"
      tabIndex={0}
      role="link"
      className="flex"
    >
      <button className="group relative h-9  overflow-hidden rounded-md bg-dark  px-6 invert ">
        <div className=" text-dark motion-reduce:transition-none transition duration-500 group-hover:-translate-y-9 dark:text-light">
          <div className="flex h-9 items-center justify-center  " id="contact">
            <p>{children}</p>
          </div>

          <div className="flex h-9 items-center justify-center " aria-hidden>
            <p>{children}</p>
          </div>
        </div>
      </button>
    </Link>
  );
};
