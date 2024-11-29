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
    <html lang={locale} className={` ${rubik.variable}  scroll-smooth bg-dark`}>
      <body
        className={
          " text-light flex flex-col bg-[url('/low-contrast-linen.png')] "
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
