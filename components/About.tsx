import Image from "next/image"
import { IoClose } from "react-icons/io5"
import { PiSubtractSquareDuotone } from "react-icons/pi"
import { AnimationControls, motion, useAnimate, useAnimation, useInView, useScroll, useTransform } from "framer-motion"
import React, { ForwardedRef, forwardRef } from "react"

interface AboutProps {
    mainControls: AnimationControls
}



export const About = forwardRef((props: AboutProps, ref: ForwardedRef<HTMLElement>) => {
    const { mainControls } = props;
    return (
        <motion.section
            ref={ref}
            variants={{
                hidden: { scale: 0, opacity: 0, y: 400 },
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
    )
})