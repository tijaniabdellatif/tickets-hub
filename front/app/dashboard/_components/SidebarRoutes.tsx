"use client";

import { BarChart, Compass, Layout, List, LucideIcon } from "lucide-react";
import React from "react";
import SidbarItems from "./SidbarItems";
import { usePathname } from "next/navigation";

const guestRoutes: Array<{
  designation: LucideIcon;
  label: string;
  href: string;
}> = [
  {
    designation: Layout,
    label: "Dashboard",
    href: "/dashboard",
  },

  {
    designation: Compass,
    label: "Browse",
    href: "/dashboard/search",
  },
];

const teacherRoutes: Array<{
  designation: LucideIcon;
  label: string;
  href: string;
}> = [
  {
    designation: List,
    label: "Courses",
    href: "/dashboard/teacher/courses",
  },

  {
    designation: BarChart,
    label: "Analytics",
    href: "/dashboard/teacher/analytics",
  },
];

type Props = {};
const SidebarRoutes = (props: Props) => {

  const pathname = usePathname();
  const isTeacher = pathname?.includes('/dashboard/teacher');
  const routes = isTeacher ? teacherRoutes : guestRoutes;
  return (
    <div className="flex flex-col w-full">
      {routes.map((item) => {
        return (
          <SidbarItems
            key={item.label}
            designation={item.designation}
            label={item.label}
            href={item.href}
          />
        );
      })}
    </div>
  );
};

export default SidebarRoutes;
