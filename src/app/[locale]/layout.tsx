import type { Metadata } from "next";
import { Inter, Rubik, Vazirmatn, Syncopate } from "next/font/google";

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
  title: "Orwa",
  description: "Orwa",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logos/brand_black.svg",
        href: "/logos/brand_black.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logos/brand_white.svg",
        href: "/logos/brand_white.svg",
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
    <html
      lang={locale}
      className={` ${rubik.variable}  scroll-smooth bg-primary`}
    >
      <body
        className={
          "  text-secondary flex flex-col bg-[url('https://www.transparenttextures.com/patterns/light-sketch.png')] "
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
