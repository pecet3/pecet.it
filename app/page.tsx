"use client";

import { motion, useAnimation } from "framer-motion";

import { MdOutlineEmail } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Pricing } from "@/components/Pricing";
import { WelcomeSection } from "@/components/welcome/WelcomeSection";
import { Mailer, MailerButton } from "@/components/Mailme";
import { OurStack } from "@/components/OurStack";
import { RotatingCube } from "@/components/Cube";
import { SceneContainer } from "@/components/Macbook";
import { About2, serviceData, Tiles } from "@/components/About";
import Image from "next/image";
import {
  Terminal,
  HostingDescription,
  MainDescription,
} from "@/components/Description";

export default function Home() {
  const ref = useRef(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isMobile, setIsMobile] = useState(false);
  const [isMailOpen, setIsMailOpen] = useState(false);
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

  useEffect(() => {});
  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-48 sm:pt-0 px-8 lg:px-24 xl:px-64 pb-16">
      <WelcomeSection setIsOpen={setIsMailOpen} isMobile={isMobile} />

      <div className="flex flex-col items-center gap-64 max-w-6xl my-16">
        <MainDescription />
        <div className="flex flex-col gap-32">
          <Tiles
            tiles={serviceData.slice(3, 6)}
            header={
              <div
                className="tracking-wide underline decoration-cyan-400 
              decoration-wavy decoration-2"
              >
                Pokaż się z jak <i className="">najlepszej</i> strony
              </div>
            }
          />
          <Tiles
            tiles={serviceData.slice(0, 3)}
            header={
              <div
                className="tracking-wide underline decoration-cyan-400 
              decoration-wavy decoration-2"
              >
                Usprawnij swoją <i>cudowną</i> firmę
              </div>
            }
          />
        </div>
        <HostingDescription />
        {/* <About2 /> */}
        <Pricing />
      </div>
      {scrollY >= screenSize.height * 0.2 ? (
        <MailerButton isOpen={isMailOpen} setIsOpen={setIsMailOpen} />
      ) : null}
      <Mailer isOpen={isMailOpen} setIsOpen={setIsMailOpen} />
    </main>
  );
}
