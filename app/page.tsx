"use client";

import { motion, useAnimation } from "framer-motion";

import { MdOutlineEmail } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { About } from "@/components/About";
import { WelcomeSection } from "@/components/welcome/WelcomeSection";
import { MailmeOverlay } from "@/components/Mailme";
import { OurStack } from "@/components/OurStack";

export default function Home() {
  const ref = useRef(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 800);

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // scroll things
  const [scrollY, setScrollY] = useState(0);
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const { width, height } = window.screen;
    setScreenSize({ width, height });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // on scroll
  const mainControls = useAnimation();

  useEffect(() => {
    if (scrollY > 200) {
      mainControls.start("visible");
    }
    if (scrollY < 300) {
      mainControls.start("hidden");
    }
  }, [scrollY, mainControls]);

  useEffect(() => {
    const resizeHandler = () => {
      const width = window.innerWidth;
      if (width < 800) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);
  const openMailme = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("mailme", "true");
    router.replace(`?${params.toString()}`, { scroll: false });
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-48 sm:pt-0 px-8 lg:px-24 xl:px-64 pb-16">
      <WelcomeSection isMobile={isMobile} />

      <div className="flex flex-col items-center gap-48 max-w-7xl">
        <About ref={ref} mainControls={mainControls} />
        <OurStack ref={ref} mainControls={mainControls} />
        <div className="h-screen"></div>
      </div>
      {scrollY >= screenSize.height * 0.5 ? (
        <motion.button
          animate={{
            scale: [0.9, 1.2, 1],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          onClick={openMailme}
          className=" font-bold text-xl bottom-4 right-4 fixed
      duration-300 flex items-center justify-center hover:cursor-pointer
      hover:bg-fuchsia-500 p-2  bg-fuchsia-600 rounded-xl hover:scale-105
       hover:shadow-lg shadow-md shadow-gray-900"
        >
          <motion.div
            animate={{
              scale: [1.2, 1, 1],
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
            className=" flex items-center flex-col"
          >
            <MdOutlineEmail size={48} />
          </motion.div>
        </motion.button>
      ) : null}
      <MailmeOverlay />
    </main>
  );
}
