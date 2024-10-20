import Image from "next/image";

import { getI18n } from "@/locales/server";
import Hero from "@/components/layout/hero";
import Navbar from "@/components/layout/navbar";

export default async function Home() {
  const t = await getI18n();

  return (
    <main className="relative">
      <Navbar />

      <Hero />
    </main>
  );
}
