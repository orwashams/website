import { getI18n } from "@/locales/server";
import Image from "next/image";

export default async function Home() {
  const t = await getI18n();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-secondary">
      <p>{t("orwa")}</p>
    </main>
  );
}
