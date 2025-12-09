import Image from "next/image";
import {
  AnimationControls,
  motion,
  useAnimationControls,
  useInView,
  Variants,
} from "framer-motion";
import React, { ForwardedRef, forwardRef, useEffect, useRef } from "react";
import { BsWordpress, BsGlobe } from "react-icons/bs";
import { FaCode, FaTabletAlt } from "react-icons/fa";
import { IconType } from "react-icons";
import { SiN8N } from "react-icons/si";
import { HiOutlineTerminal } from "react-icons/hi";

// --- Typy i Dane ---

interface ServiceTileProps {
  icon: IconType;
  title: string;
  description: string;
}

const serviceData = [
  {
    icon: BsGlobe,
    title: "Strony Internetowe",
    description:
      "Building robust, scalable applications using modern frameworks like React, Next.js, and Node.js.",
  },
  {
    icon: SiN8N,
    title: "Automatyzacje",
    description:
      "Expert integration and custom development for platforms like WordPress and various e-commerce solutions.",
  },
  {
    icon: HiOutlineTerminal,
    title: "Serwery",
    description:
      "Ensuring seamless, pixel-perfect user experiences across all devices, from mobile to desktop.",
  },
];

// 1. ZMODYFIKOWANE Warianty dla kontenera - Animacja Sekwencyjna
const containerVariants: Variants = {
  visible: {
    transition: {
      delayChildren: 0.1,
      // ZMIANA: Ustawiamy staggerChildren na >= 0.6s (czas trwania animacji kafelka)
      staggerChildren: 0.2, // Zapewnia pełny pop-up jednego kafelka, zanim rozpocznie się kolejny
    },
  },
  hidden: {},
};

// 2. Warianty dla pojedynczego kafelka (bez zmian w stosunku do poprzedniej wersji)
const tileVariants: Variants = {
  hidden: { y: 200, opacity: 0, scale: 0.0 },
  visible: {
    y: [30, 0],
    opacity: [0, 1],
    scale: [0.9, 1.2, 1],
    transition: {
      duration: 0.2, // CZAS TRWANIA: 0.6s
      ease: "easeOut",
    },
  },
};

// --- Komponent Kafelka ---

const ServiceTile: React.FC<ServiceTileProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <motion.div
      variants={tileVariants}
      className="flex flex-col items-center hover:scale-105 p-6 bg-white/5 backdrop-blur-sm border border-gray-500 rounded-xl shadow-lg hover:bg-white/10 transition duration-300 min-h-[250px] w-full"
    >
      <div className="text-4xl text-cyan-400 mb-4">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3 text-center">
        {title}
      </h3>
      <p className="text-gray-300 text-center text-sm">{description}</p>
    </motion.div>
  );
};

// --- Komponent About ---
interface AboutProps {
  // mainControls nie jest już potrzebne jako prop
}

export const About: React.FC<AboutProps> = () => {
  const sectionControls = useAnimationControls(); // Używamy własnych kontrolerów

  const sectionVariants: Variants = {
    hidden: { scaleY: 0, scaleX: 0, opacity: 1, y: 0 },
    visible: { scaleY: 1, scaleX: 1, opacity: 1, y: 0 },
  };

  const ref = useRef(null);
  const isInView = useInView(ref); // Dodaj { once: true } aby animacja uruchomiła się tylko raz

  // Użycie isInView
  useEffect(() => {
    if (isInView) {
      sectionControls.start("visible");
    }
  }, [isInView, sectionControls]);

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden" // Stan początkowy
      animate={sectionControls} // Teraz kontrolujemy animację lokalnie
      transition={{
        duration: 0.5,
        delay: 0,
      }}
      exit="exit"
    >
      <div className="max-w-6xl w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={sectionControls} // Kontrola także elementów wewnętrznych
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {serviceData.map((service, index) => (
            <ServiceTile
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
