"use client"

import { motion, useAnimation } from "framer-motion"

import { MdOutlineEmail } from "react-icons/md";
import { useEffect, useRef, useState } from "react";

import { IoClose } from "react-icons/io5";
import { Mailme } from "@/components/Mailme";
import { About } from "@/components/About";
import { WelcomeSection } from "@/components/welcome/WelcomeSection";



export default function Home() {
  const ref = useRef(null);
  const [isMailme, setIsMailme] = useState(false)

  useEffect(() => {
    window.history.pushState(null, "", `?mailme=${isMailme}`)
  }, [isMailme])


  const getIsMobile = () => {
    const width = window.innerWidth
    if (width < 800) {
      return true
    } else {
      return false
    }
  };
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
  const mainControls = useAnimation()

  useEffect(() => {
    if (scrollY > 200) {
      mainControls.start("visible")
    }
    if (scrollY < 300) {
      mainControls.start("hidden")
    }
  }, [scrollY])

  const [isMobile, setIsMobile] = useState(getIsMobile())

  useEffect(() => {
    const resizeHandler = () => {
      const width = window.innerWidth
      if (width < 800) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    };
    resizeHandler()
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center pt-48 sm:pt-0 px-8 lg:px-24 xl:px-64 pb-16">
      <WelcomeSection isMobile={isMobile} />

      <About ref={ref} mainControls={mainControls} />
      {
        scrollY >= screenSize.height * 0.5 ? <motion.button
          animate={{
            scale: [0.9, 1.2, 1],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          onClick={() => setIsMailme(!isMailme)}
          className=" font-bold text-xl bottom-4 right-4 fixed
      duration-300 flex items-center justify-center
      hover:bg-blue-500 p-2  bg-blue-600 rounded-xl">

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
            className=" ">

            <MdOutlineEmail size={40} />

          </motion.div>
        </motion.button>
          : null
      }
      {
        isMailme ?
          <motion.section
            initial={{ y: -400, }}
            animate={{ y: 0, }}
            transition={{ duration: 0.4 }}
            className="bg-black w-full fixed top-0 right-0 bg-opacity-80 h-full backdrop-blur-sm
            z-50 flex flex-col justify-center items-center font-mono px-8 lg:px-24 xl:px-64"
          >
            <Mailme />
            <motion.button
              initial={{ x: 0, opacity: 0, rotate: 0 }}
              animate={{ x: 0, opacity: 1, rotate: 180 }}
              transition={{ ease: "easeOut", duration: 0.3, delay: 0.4 }}
              className="fixed z-50 top-4 right-4 " onClick={() => setIsMailme(false)}>
              <IoClose size={32} />
            </motion.button>
          </motion.section> : null
      }
    </main >
  );
}
