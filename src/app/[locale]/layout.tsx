import type { Metadata } from "next";
import { Rubik } from "next/font/google";

import { cn } from "@/lib/utils";

import { getCurrentLocale } from "@/locales/server";

import Navbar from "@/components/layout/navbar";

import "../globals.css";

const rubik = Rubik({
  subsets: ["hebrew", "arabic", "latin"],
  variable: "--font-hebrew",
  weight: "300",
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

export default async function RootLayout({
  params,
  children,
}: {
  params: Promise<{ locale: string }>;
  children: React.ReactElement;
}) {
  const { locale } = await params;

  return (
    <html lang={locale} className={` ${rubik.variable}  scroll-smooth bg-dark`}>
      <body
        className={
          " text-light flex flex-col bg-[image:url('https://utfs.io/a/k9x3ychkn3/pneMvLq0K87MhKYqssYesUHoVIYSEXkGF6CQbmn5JAxlWiLr')] "
        }
      >
        {children}
      </body>
    </html>
  );
}

/**
 * url("https://www.transparenttextures.com/patterns/iron-grip.png");
 *
 *
 *
 *
 *
 *
 *  */
