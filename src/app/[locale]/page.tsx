import Image from "next/image";

import { getI18n } from "@/locales/server";

export default async function Home() {
  const t = await getI18n();

  return (
    <main className="flex  flex-col items-center justify-between p-24 ">
      <p>Translation: {t("orwa")}</p>
    </main>
  );
}
