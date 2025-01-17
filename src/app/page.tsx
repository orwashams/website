import Image from "next/image";

import Hero from "@/components/layout/hero";
import { Navbar } from "@/components/layout/navbar";
import { Toolkit } from "@/components/layout/toolkit";
import { Services } from "@/components/layout/services";
import { Work } from "@/components/layout/work";
import { Process } from "@/components/layout/process";
import { AboutMe } from "@/components/layout/aboutme";
import { Showcase } from "@/components/layout/showcase";

// export async function generateStaticParams() {
//   const locales = ["en", "he", "ar"];
//   return locales.map((locale) => ({ locale }));
// }

export default async function Home() {
  return (
    <main className="flex flex-col gap-16 px-2 sm:px-16  lg:px-32 pb-16">
      <Navbar />

      <Hero />

      <Toolkit />

      <Services />

      <Work />

      <Process />

      <Showcase />

      <AboutMe />
    </main>
  );
}
