"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

type Props = {};

const NavbarRoutes = (props: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.includes("/chapter");
  return (
    <div className="flex gap-x-2 ml-auto">
      {isTeacherPage || isPlayerPage ? (
        <Button>
          <LogOut className="h-4 w-4 mr-2" /> Exit
        </Button>
      ) : (
        <Link href="/teacher/courses">
          <Button className="bg-sky-500 text-white transition-all hover:bg-white hover:text-black">
            Teacher Mode
          </Button>
        </Link>
      )}
      <h1>User button auth</h1>
    </div>
  );
};

export default NavbarRoutes;
