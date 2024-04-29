"use client"
import { LogoTyping } from "@/components/LogoTyping";
import Image from "next/image";
import { motion } from "framer-motion"
import Link from "next/link";



export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center gap-16 justify-center p-24">
      <LogoTyping />
      <motion.div
        animate={{ opacity: 100 }}
        transition={{ delay: 2, duration: 1, x: { duration: 1 } }}

        className="opacity-0 text-8xl font-mono border-2 group
         border-black rounded-full py-3 px-5 hover:bg-slate-800 duration-300
         bg-slate-100 hover:cursor-pointer shadow-xl shadow-slate-200
         "
      >

        <Link href="/home" className="text-gray-700 font-mono font-bold text-6xl tracking-tighter flex duration-300 hover:text-white">
          &lt;<div className=" ">pecet</div>
          .<span className="text-blue-700 group-hover:text-sky-400 ">it</span>/&gt;
        </Link>


      </motion.div>
    </main>
  );
}
