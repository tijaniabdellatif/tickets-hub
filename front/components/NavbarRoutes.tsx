"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import Header from "./Header";

const NavItemsData: { name: string; url: string }[] = [
  {
    name: "Home",
    url: "/home",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Policy",
    url: "/policy",
  },
  {
    name: "FAQ",
    url: "/faq",
  },
];

type Props = {};

const NavbarRoutes = (props: Props) => {
  const pathname = usePathname();
  const isTeacherPage = pathname?.startsWith("/dashboard/teacher");
  const isPlayerPage = pathname?.includes("/dashboard/chapter");
  const isHomePage = pathname.startsWith("/home");
  console.log(isHomePage);

  return (
    <div className="ml-auto">
      <>
      {
        isHomePage ? (<> <Header /> </>): (<> {isTeacherPage || isPlayerPage ? (
          <Link href={"/dashboard"}>
            <Button variant={"ghost"}>
              <LogOut className="h-4 w-4 mr-2" /> Exit
            </Button>
          </Link>
        ) : (
          <Link href="/dashboard/teacher/courses">
            <Button variant={"ghost"}>Teacher Mode</Button>
          </Link>
        )}</>)
      }
       

        <Button variant={"ghost"} className="hidden">
          <LogOut className="h-4 w-4 mr-2" /> Exit
        </Button>
      </>
    </div>
  );
};

export default NavbarRoutes;
