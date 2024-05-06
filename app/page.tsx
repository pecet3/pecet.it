"use client"
import { CodeBlock } from "@/components/CodeBlock";
import Image from "next/image";
import { motion, useAnimate, useAnimation, useInView, useScroll, useTransform } from "framer-motion"
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { PiSubtractSquareDuotone } from "react-icons/pi";
import { IoIosCloseCircleOutline, IoMdCloseCircle } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Mailme } from "@/components/Mailme";



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
      <section className="flex md:flex-row flex-col gap-16 items-center h-screen">
        {isMobile ?
          <>
            <motion.div
              initial={{ y: -400, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1, delay: 4.0 }}
              className="flex flex-col gap-6 items-center">
              <div className="text-center">
                <h1 className="text-4xl font-semibold">Przeraża Cię widok kodu?</h1>
                <h2 className="text-5xl font-thin text-center">Zostaw to mi!</h2>
              </div>
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 4.5, ease: "easeOut" }}
                className="px-3 py-2 rounded-xl font-bold text-xl
             hover:bg-blue-500 duration-300 gap-1 bg-blue-600 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 4.5, ease: "easeOut" }}
                >
                  <MdOutlineEmail size={30} />
                </motion.div>
                <motion.p> Napisz maila</motion.p>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ y: -200 }}
              animate={{ y: 0 }}
              transition={{ ease: "easeOut", duration: 0.5, delay: 4.2 }}>
              <CodeBlock />
            </motion.div>


          </>

          :
          <>
            <motion.div
              initial={{ x: -400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1, delay: 4.0 }}
              className="flex flex-col gap-6 items-center">
              <div>
                <h1 className="text-4xl font-semibold text-center">Przeraża Cię widok kodu?</h1>
                <h2 className="text-5xl font-thin text-center">Zostaw to mi!</h2>
              </div>
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 5 }}
                className="btn">
                <MdOutlineEmail size={30} />
                Napisz maila
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ x: -240 }}
              animate={{ x: 0 }}
              transition={{ ease: "easeOut", duration: 0.5, delay: 4.0 }}>
              <CodeBlock />
            </motion.div>

          </>
        }

      </section>
      <motion.section
        ref={ref}
        variants={{
          hidden: { scale: 0, opacity: 0, y: 0 },
          visible: { scale: 1, opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.5, delay: 0
        }}
        className="text-4xl border-white rounded-2xl border-[6px] my-8">
        <div className="font-mono w-full border-b-[6px] border-white p-4 flex justify-between">
          C:\win32\O mnie
          <div className="flex justify-end gap-2">
            <div className="border-b-4 border-white w-6 mb-2.5"></div>

            <PiSubtractSquareDuotone />
            <IoClose />
          </div>
        </div>
        <div className="px-4 flex flex-col md:flex-row-reverse items-center m-auto text-2xl
         md:text-4xl p-2 sm:p-4 ">
          <Image src="/myFace.jpg" width={480} height={480} alt="my face"
            className="rounded-full border-[6px] shadow-xl h-48 sm:h-72 w-48 sm:w-72 shadow-gray-800 border-white
          " />

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim adipisci tenetur sequi provident perferendis porro, ut exercitationem natus,
          dolorum quasi minus, accusantium amet rerum unde. Provident inventore optio nulla facilis?

        </div>
        <div className="px-4 flex flex-col md:flex-row gap-4 items-center m-auto text-2xl 
        md:text-4xl p-2 sm:p-4">
          <Image src="/space-invaders.jpg" width={480} height={480} alt="space invaders logo"
            className=" h-48 sm:h-72 w-48 sm:w-72
             shadow-gray-800 
          " />

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim adipisci tenetur sequi provident perferendis porro, ut exercitationem natus,
          dolorum quasi minus, accusantium amet rerum unde. Provident inventore optio nulla facilis?

        </div>

      </motion.section>
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
