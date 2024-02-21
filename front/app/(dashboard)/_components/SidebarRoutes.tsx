"use client";

import { Compass, Layout, LucideIcon } from "lucide-react";
import React from "react";
import SidbarItems from "./SidbarItems";

type Props = {};

const guestRoutes:Array<{designation:LucideIcon,label:string,href:string}> = [
  {
   
    designation: Layout,
    label: "Dashboard",
    href: "/",
  },

  {
    
    designation: Compass,
    label: "Browse",
    href: "/search",
  },
];

const SidebarRoutes = (props: Props) => {
  const routes = guestRoutes;
  return (
    <div className="flex flex-col w-full px-5">
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
