"use client"
import { CodeBlock } from "@/components/CodeBlock";
import Image from "next/image";
import { motion } from "framer-motion"
import Link from "next/link";



export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center gap-12 justify-center p-24">
      <CodeBlock />
      {/* <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 100, scale: 1 }}
        transition={{ opacity: { delay: 2, duration: 1 }, scale: { delay: 1.5, duration: 1 } }}

        className="font-mono border-2 group
         border-black rounded-full py-2 px-4 hover:bg-slate-600 duration-300
         hover:cursor-pointer shadow-xl shadow-slate-300 bg-zinc-100 hover:shadow-none
         "
      >

        <Link href="/home" className="text-black group-hover:text-slate-300 font-mono font-bold text-4xl tracking-tighter flex duration-300 ">
          &lt;<div className="group-hover:text-white text-slate-700">pecet</div>
          .<span className="text-blue-800 group-hover:text-sky-200 ">it</span>/&gt;
        </Link>


      </motion.div> */}
    </main>
  );
}
