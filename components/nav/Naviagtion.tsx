"use client"
import { Logo } from "../Logo"
import { motion } from "framer-motion"

export const Navigation = () => {
    return (
        <motion.nav
            initial={{ y: -0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1, delay: 3.8 }}
            className="flex items-center justify-between bg-opacity-65 bg-gray-700 animate-fade-in fixed w-full py-2 px-4 duration-500">
            <Logo />
            <div className="font-mono text-xl">
                O Mnie
            // Oferta
            // Blog
            </div>
        </motion.nav>
    )
}