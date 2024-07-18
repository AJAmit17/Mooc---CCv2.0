"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      const currentPath = window.location.pathname;
      const newPath = currentPath.replace(`/${localeActive}`, `/${nextLocale}`);
      router.replace(newPath);
    });
  };

  return (
    <label className="border-2 rounded">
      <p className="sr-only">Change language</p>
      <select
        defaultValue={localeActive}
        className="bg-transparent py-2"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="en">English</option>
        <option value="kn-IN">Indonesian</option>
      </select>
    </label>
  );
}
