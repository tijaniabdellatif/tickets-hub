import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Tdemy",
    template: "%s  | Tdemy",
  },
  description:
    "The first Moroccan E learning platform to help developers and students learn actively about new technologies and programming languages",
  keywords:
    "Morocco, E-learning, e-learning, programming, programming languages, data analysis, data science, teaching, active learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black duration-300`}
      >
        <Providers>
          <main className="">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
