"use client";

import Image from "next/image";
import { motion, AnimationControls } from "framer-motion";
import React, { ForwardedRef, forwardRef } from "react";

const logos = [
  "/golang.svg",
  "/nextjs.svg",
  "/react.svg",
  "/docker.svg",
  "/javascript.svg",
  "/wordpress.svg",
];

interface OurStackProps {
  mainControls: AnimationControls;
}

export const OurStack = forwardRef(
  (props: OurStackProps, ref: ForwardedRef<HTMLElement>) => {
    const { mainControls } = props;

    return (
      <motion.section
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full overflow-hidden py-6 bg-white/5 rounded-2xl"
      >
        <motion.div
          className="flex gap-12 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {[...logos, ...logos].map((logo, index) => {
            if (logo === "nextjs.svg") {
              return (
                <div key={index} className="relative h-32 w-32 flex-shrink-0">
                  <Image
                    src={logo}
                    alt={`logo-${index}`}
                    fill
                    className="object-contain"
                  />
                </div>
              );
            }
            return (
              <div key={index} className="relative h-64 w-72 flex-shrink-0">
                <Image
                  src={logo}
                  alt={`logo-${index}`}
                  fill
                  className="object-contain"
                />
              </div>
            );
          })}
        </motion.div>
      </motion.section>
    );
  }
);

OurStack.displayName = "OurStack";
