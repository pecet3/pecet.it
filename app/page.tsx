"use client"
import { CodeBlock } from "@/components/CodeBlock";
import Image from "next/image";
import { motion } from "framer-motion"
import Link from "next/link";



export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center gap-12 justify-center p-24">
      <CodeBlock />

    </main>
  );
}
