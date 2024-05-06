"use client"
import { useEffect, useRef, useState } from "react"
import { Logo } from "../Logo"
import { motion } from "framer-motion"

export const Navigation = () => {
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
    return (
        <>
            <motion.nav
                initial={{ y: -0, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 1, delay: 4.6 }}
                className="flex items-center justify-between bg-opacity-75 bg-gray-700 
            animate-fade-in fixed w-full py-2 px-4 duration-500 z-40 backdrop-blur-sm">
                <Logo />
                <div className="font-mono text-xl">
                    O Mnie
                // Oferta
                // Blog
                </div>
            </motion.nav>

        </>
    )
}