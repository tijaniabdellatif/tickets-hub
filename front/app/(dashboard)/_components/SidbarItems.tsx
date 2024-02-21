"use client";
import { LucideIcon } from "lucide-react";
import React from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

interface SidebarItems {

  designation: LucideIcon;
  label: string;
  href: string;
}

const SidbarItems = ({  designation: Icon, label, href }: SidebarItems) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (pathname === '/' && href === "/") || 
  pathname === href || pathname?.startsWith(`${href}/`);

  return <div>SidbarItems</div>;
};

export default SidbarItems;
