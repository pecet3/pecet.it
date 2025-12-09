import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/nav/Naviagtion";
import { Suspense } from "react";
import { ScrollBackground } from "@/components/ScrollBackground";

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
      <body
        className={
          inter.className +
          "text-white dark:text-white dark:bg-slate-800 bg-transparent/10"
        }
      >
        <ScrollBackground>
          <Navigation />
          <Suspense>{children}</Suspense>
        </ScrollBackground>
      </body>
    </html>
  );
}
