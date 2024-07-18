"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();

  const onSelectChange = (nextLocale: string) => {
    startTransition(() => {
      const currentPath = window.location.pathname;
      const newPath = currentPath.replace(`/${localeActive}`, `/${nextLocale}`);
      router.replace(newPath);
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="border-2 rounded py-2" disabled={isPending}>
          {localeActive === "en" ? "English" : "Kannada"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onSelect={() => onSelectChange("en")}>English</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => onSelectChange("kn-IN")}>Kannada</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
