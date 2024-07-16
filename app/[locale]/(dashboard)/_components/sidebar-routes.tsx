"use client";

import { BarChart, Compass, Layout, List, Bot } from "lucide-react";
import { usePathname } from "next/navigation";

import { SidebarItem } from "./sidebar-item";
import { useTranslations } from "next-intl";

const SidebarRoutes = () => {
  const pathname = usePathname();
  const t = useTranslations("Sidebar");
  const isTeacherPage = pathname?.includes("/teacher");

  const guestRoutes = [
    {
      icon: Layout,
      label: t("dashboard"),
      href: "/",
    },
    {
      icon: Compass,
      label: t("browse"),
      href: "/search",
    },
    {
      icon: Bot,
      label: t("ai"),
      href: "/chatbot",
    },
  ];

  const teacherRoutes = [
    {
      icon: List,
      label: t("course"),
      href: "/teacher/courses",
    },
    {
      icon: BarChart,
      label: t("analytics"),
      href: "/teacher/analytics",
    },
  ];

  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};

export default SidebarRoutes;
