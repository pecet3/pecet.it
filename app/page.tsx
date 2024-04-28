"use client"
import { LogoTyping } from "@/components/LogoTyping";
import Image from "next/image";
import { motion } from "framer-motion"



export default function Home() {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 justify-center p-24">
      <LogoTyping />
      <motion.div
        animate={{ opacity: 100 }}
        transition={{ delay: 4 }}
        className="opacity-0"
      >
        Zacznij
      </motion.div>
    </main>
  );
}
