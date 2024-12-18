"use client";

import { BarChart, Compass, Layout, List } from "lucide-react";
import { usePathname } from "next/navigation";

import { SidebarItem } from "./sidebar-item";

const guestRoutes = [
  {
    icon: Layout,
    label: "Басты бет",
    href: "/",
  },
  {
    icon: Compass,
    label: "Қарау",
    href: "/search",
  },
];

const teacherRoutes = [
  {
    icon: List,
    label: "Курстар",
    href: "/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Аналитика",
    href: "/teacher/analytics",
  },
];

export const SidebarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.includes("/teacher");

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
      <a href="https://wa.me/+7(702)673-98-69" ><i></i> <span>+7(702)673-98-69</span></a>
    </div>
  );
};
