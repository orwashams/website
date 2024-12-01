import Image from "next/image";

import { getI18n } from "@/locales/server";
import Hero from "@/components/layout/hero";
import Navbar from "@/components/layout/navbar";
import { Toolkit } from "@/components/layout/toolkit";

export default async function Home() {
  const t = await getI18n();

  return (
    <main className="flex flex-col   px-72 text-light">
      <Navbar />

      <Hero />

      <Toolkit />
      {/* <Hero /> */}
    </main>
  );
}
