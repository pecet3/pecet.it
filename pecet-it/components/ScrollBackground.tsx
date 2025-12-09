"use client";

import { useEffect, useState } from "react";

export function ScrollBackground({ children }: { children: React.ReactNode }) {
  const [bgClass, setBgClass] = useState("bg-transparent/10");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      if (scrollPercent < 10) {
        setBgClass("bg-transparent/10");
      } else if (scrollPercent < 20) {
        setBgClass("bg-emerald-950/5");
      } else if (scrollPercent < 30) {
        setBgClass("bg-emerald-950/10");
      } else if (scrollPercent < 40) {
        setBgClass("bg-emerald-950/20");
      } else if (scrollPercent < 50) {
        setBgClass("bg-emerald-950/30");
      } else if (scrollPercent < 60) {
        setBgClass("bg-emerald-950/40");
      } else if (scrollPercent < 70) {
        setBgClass("bg-purple-950/10");
      } else if (scrollPercent < 80) {
        setBgClass("bg-purple-950/20");
      } else if (scrollPercent < 90) {
        setBgClass("bg-purple-950/30");
      } else {
        setBgClass("bg-purple-950/30");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-700 ${bgClass}`}>
      {children}
    </div>
  );
}
