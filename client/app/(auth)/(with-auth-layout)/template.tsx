"use client";
import Link from "next/link";
import { navLinks } from "../../../data/data";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [input, setInput] = useState("");
  return (
    <>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="text-black m-3 p-2"
        />
      </div>
      {navLinks.map((link: { name: string; uri: string }) => {
        const IsActive = pathname.startsWith(link.uri);
        return (
          <Link
            className={IsActive ? "font-bold mt-4" : "text-blue-500 mr-4"}
            href={link.uri}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </>
  );
}
