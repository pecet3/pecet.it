import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/nav/Naviagtion";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "pecet.it",
  description: "Profesjonalne strony internetowe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + "text-white dark:text-white dark:bg-slate-800"}>
        <Navigation />

        {children}
      </body>
    </html>
  );
}
