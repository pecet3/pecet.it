"use client";
import { motion } from "framer-motion";
import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CodeBlock } from "./CodeBlock";
import { useRouter, useSearchParams } from "next/navigation";

interface WelcomeSectionProps {
  isMobile: boolean;
  setIsOpen: React.Dispatch<boolean>;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({
  isMobile,
  setIsOpen,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <section className="flex md:flex-row flex-col gap-16 items-center h-screen">
      {isMobile ? (
        <>
          <motion.div
            initial={{ y: -400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1, delay: 1.0 }}
            className="flex flex-col gap-6 items-center"
          >
            <div className="text-center">
              <h1 className="text-4xl font-semibold">
                Przeraża Cię widok kodu?
              </h1>
              <h2 className="text-5xl text-gray-500 font-thin text-center">
                Zostaw to nam!
              </h2>
            </div>
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
              onClick={() => setIsOpen(true)}
              className="btn hover:scale-105 duration-300
               hover:shadow-lg shadow-md shadow-gray-900"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
              >
                <MdOutlineEmail size={30} />
              </motion.div>
              <motion.p> Napisz maila</motion.p>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ ease: "easeOut", duration: 0.5, delay: 0 }}
          >
            <CodeBlock />
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.6, delay: 1 }}
            className="flex flex-col gap-6 items-center"
          >
            <div>
              <h1 className="text-4xl font-semibold text-slate-200  text-center">
                Przeraża Cię widok kodu?
              </h1>
              <h2 className="text-5xl font-thin text-center">Zostaw to nam!</h2>
            </div>
            <motion.button
              onClick={() => setIsOpen(true)}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.4 }}
              className="btn bg-white/5 backdrop-blur-sm  hover:scale-105 duration-300 hover:shadow-lg
               shadow-md shadow-gray-900"
            >
              <MdOutlineEmail size={30} />
              Napisz maila
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ z: -240 }}
            animate={{ z: 0 }}
            transition={{ ease: "easeOut", duration: 0.5, delay: 2.5 }}
          >
            <CodeBlock />
          </motion.div>
        </>
      )}
    </section>
  );
};
