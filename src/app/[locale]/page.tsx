import Image from "next/image";

import { getI18n } from "@/locales/server";
import Hero from "@/components/layout/hero";
import Navbar from "@/components/layout/navbar";
import { Texture } from "@/components/layout/layout-texture";

export default async function Home() {
  const t = await getI18n();

  return (
    <main className="flex flex-col   px-72">
      <Navbar />

      <Hero />

      <Hero />
    </main>
  );
}
