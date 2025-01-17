import type { Metadata } from "next";
import { Rubik } from "next/font/google";

import { cn } from "@/lib/utils";

import { getCurrentLocale } from "@/locales/server";

import "../globals.css";

const rubik = Rubik({
  subsets: ["hebrew", "arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "orwa.dev",
  description: "orwa.dev",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "https://utfs.io/a/k9x3ychkn3/pneMvLq0K87Mu6pUWZ3WAmHcekU7YB139FtNZMP2SRonVGhQ",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "https://utfs.io/a/k9x3ychkn3/pneMvLq0K87M40CDVtII6MoXUmlqsd8vpYHg7kQTuZxB2fSJ",
      },
    ],
  },
};

export const dynamic = "force-static";

export default async function RootLayout({
  params,
  children,
}: {
  params: Promise<{ locale: string }>;
  children: React.ReactElement;
}) {
  const { locale } = await params;

  return (
    <html
      lang={locale}
      className={` ${rubik.className}  scroll-smooth bg-dark relative`}
    >
      <body
        className={
          " text-light flex flex-col bg-[image:url('https://utfs.io/a/k9x3ychkn3/pneMvLq0K87MhKYqssYesUHoVIYSEXkGF6CQbmn5JAxlWiLr')] overflow-x-hidden"
        }
      >
        {children}
      </body>
    </html>
  );
}
