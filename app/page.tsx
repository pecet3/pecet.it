"use client"
import { CodeBlock } from "@/components/CodeBlock";
import Image from "next/image";
import { motion } from "framer-motion"
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";



export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center gap-12 justify-center p-24">
      <section className="flex md:flex-row flex-col gap-16 items-center">
        <motion.div
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1, delay: 4.0 }}
          className="flex flex-col gap-6 items-center">
          <div>
            <h1 className="text-4xl font-semibold">Przeraża Cię widok kodu?</h1>
            <h2 className="text-5xl font-thin text-center">Zostaw to mi!</h2>
          </div>
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 4.4 }}
            className="px-3 py-2 rounded-xl font-bold text-xl
             hover:bg-blue-500 duration-300 gap-1 bg-blue-600 flex items-center justify-center">
            <MdOutlineEmail size={30} />
            Napisz maila
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 3.8 }}>
          <CodeBlock />
        </motion.div>

      </section>
    </main>
  );
}
