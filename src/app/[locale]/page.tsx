import Image from "next/image";

import { getI18n } from "@/locales/server";
import Hero from "@/components/layout/hero";

export default async function Home() {
  const t = await getI18n();

  return (
    <main className="flex  flex-col items-center justify-between ">
      <Hero />
    </main>
  );
}
