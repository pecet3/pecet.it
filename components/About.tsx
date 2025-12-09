import Image from "next/image";
import {
  AnimationControls,
  motion,
  useAnimationControls,
  useInView,
  Variants,
} from "framer-motion";
import React, {
  ForwardedRef,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
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
    title: "Strony Internetowe oraz UI/UX Design",
    description:
      "Tworzymy kompleksowe, fullstackowe strony internetowe, od projektu graficznego po wdrożenie, wykorzystując nowoczesne technologie jak React, Next.js, Node.js i Go. Budujemy zarówno zaawansowane aplikacje, jak i responsywne serwisy oparte na systemach CMS, dbając o ich skalowalność i wydajność.",
  },
  {
    icon: SiN8N,
    title: " Automatyzacje oraz Integracje AI",
    description:
      "Specjalizujemy się w zaawansowanych automatyzacjach procesów biznesowych i integracjach z wykorzystaniem Sztucznej Inteligencji, używając platform make.com i n8n. Pomagamy w budowaniu spersonalizowanych agentów AI, które zwiększają efektywność i redukują koszty Twojej działalności.",
  },
  {
    icon: HiOutlineTerminal,
    title: "Serwery oraz zarządzanie nimi",
    description:
      "Zapewniamy kompleksowe usługi hostingowe i stałą opiekę techniczną nad wdrożonymi aplikacjami, koncentrując się na bezpieczeństwie i optymalizacji kosztów. Nasze zarządzanie serwerami obejmuje ciągłe monitorowanie i szybką reakcję, gwarantując wysoką dostępność usług.",
  },
];

// 1. ZMODYFIKOWANE Warianty dla kontenera - Animacja Sekwencyjna
const containerVariants: Variants = {
  visible: {
    transition: {
      delayChildren: 0.4,
      // ZMIANA: Ustawiamy staggerChildren na >= 0.6s (czas trwania animacji kafelka)
      staggerChildren: 0.3, // Zapewnia pełny pop-up jednego kafelka, zanim rozpocznie się kolejny
    },
  },
  hidden: {},
};

// 2. Warianty dla pojedynczego kafelka (bez zmian w stosunku do poprzedniej wersji)
const tileVariants: Variants = {
  hidden: { y: 200, opacity: 0, scale: 0.4 },
  visible: {
    y: [0],
    opacity: [0, 0, 1],
    scale: [0.2, 1.5, 1],
    transition: {
      duration: 0.4,
      ease: "backInOut",
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
      className="flex flex-col items-center hover:scale-105 p-6
       bg-white/5 hover:bg-fuchsia-500/5 backdrop-blur-sm border border-gray-500 hover:cursor-pointer
       hover:ring-cyan-400 hover:ring-2 hover:shadow-xl hover:shadow-cyan-400/20
        rounded-xl shadow-lg  transition duration-300 min-h-[360px] w-full"
    >
      <div className="text-4xl text-cyan-400 mb-4">
        <Icon size={64} />
      </div>
      <h3 className="text-2xl font-semibold text-white mb-3 text-center">
        {title}
      </h3>
      <p className="text-gray-300 text-center text-">{description}</p>
    </motion.div>
  );
};

const ServiceTile1: React.FC<ServiceTileProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <motion.div
      variants={tileVariants}
      className="flex flex-col items-center hover:scale-105 p-6
       bg-white/5 hover:bg-fuchsia-500/5 backdrop-blur-sm border border-gray-500 hover:cursor-pointer
       hover:ring-fuchsia-500 hover:ring-2 hover:shadow-xl hover:shadow-fuchsia-500/20
        rounded-xl shadow-lg  transition duration-300 min-h-[360px] w-full"
    >
      <div className="text-4xl text-cyan-400 mb-4">
        <Icon size={64} />
      </div>
      <h3 className="text-2xl font-semibold text-white mb-3 text-center">
        {title}
      </h3>
      <p className="text-gray-300 text-center text-sm">{description}</p>
    </motion.div>
  );
};

const MainTile: React.FC<ServiceTileProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <motion.div
      variants={tileVariants}
      className="flex flex-col items-center hover:scale-105 pt-4 px-3 pb-4
       bg-white/5 hover:bg-fuchsia-500/5 backdrop-blur-sm border border-gray-500 hover:cursor-pointer
       hover:ring-cyan-400 hover:ring-2 hover:shadow-xl hover:shadow-cyan-400/20
        rounded-xl shadow-lg  transition duration-300 min-h-[360px] w-full"
    >
      <div className="text-4xl text-fuchsia-500 mb-4">
        <Icon size={72} />
      </div>
      <h3 className="text-3xl font-mono font-semibold text-white mb-2 text-center mx-4">
        {title}
      </h3>
      <p className="text-gray-300 text-center text-lg">{description}</p>
    </motion.div>
  );
};

import { useMotionValue, useTransform } from "framer-motion";
import TypewriterComponent from "typewriter-effect";

const MainTile3d: React.FC<ServiceTileProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={tileVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex flex-col items-center hover:scale-105 pt-4 px-3 pb-4
       bg-white/5 hover:bg-fuchsia-500/5 backdrop-blur-sm border border-gray-500 hover:cursor-pointer
       hover:ring-cyan-400 hover:ring-2 hover:shadow-xl hover:shadow-cyan-400/20
        rounded-xl shadow-lg transition duration-300 min-h-[360px] w-full"
    >
      <div className="text-4xl text-fuchsia-500 mb-4">
        <Icon size={72} />
      </div>
      <h3 className="text-3xl font-mono font-semibold text-white mb-2 text-center mx-4">
        {title}
      </h3>
      <p className="text-gray-300 text-center text-lg">{description}</p>
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
    } else {
      sectionControls.start("hidden");
    }
  }, [isInView, sectionControls]);

  const ref2 = useRef(null);
  const isInView2 = useInView(ref);

  return (
    <>
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
        className="flex flex-col gap-16 mt-16"
      >
        <motion.div
          initial={{ scaleY: 0, scaleX: 0, opacity: 1, y: -500 }}
          animate={{ scaleY: 1, scaleX: 1, opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 0,
          }}
          className="text-4xl max-w-2xl m-auto my-4 text-center font-thin tracking-widest"
        >
          U nas możesz zawsze liczyć na{" "}
          <i className="font-bold underline decoration-cyan-400">
            profesjonalne:
          </i>
        </motion.div>

        <div className="max-w-7xl w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={sectionControls} // Kontrola także elementów wewnętrznych
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            transition={{
              duration: 0.5,
              delay: 3,
            }}
          >
            {serviceData.map((service, index) => (
              <MainTile
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};
// Typ dla pojedynczego elementu wartości
interface ValueData {
  text: string;
  fontWeight: "thin" | "normal" | "bold"; // Możesz rozszerzyć
  alignment: "left" | "center" | "right";
  isItalic: boolean;
}

const valuesData: ValueData[] = [
  {
    text: "Wysoką jakość i dbałość o szczegóły.",
    fontWeight: "thin",
    alignment: "left",
    isItalic: false,
  },
  {
    text: "Przejrzystą komunikację na każdym etapie projektu.",
    fontWeight: "normal",
    alignment: "right",
    isItalic: true,
  },
  {
    text: "Elastyczność i dopasowanie do potrzeb klienta.",
    fontWeight: "bold",
    alignment: "center",
    isItalic: false,
  },
  {
    text: "Terminowość i odpowiedzialność.",
    fontWeight: "thin",
    alignment: "left",
    isItalic: true,
  },
];
// --- End Data Structure ---

// Warianty dla elementów wewnętrznych (używane w mapowaniu)
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Warianty dla kontenera
const containerVariants2: Variants = {
  hidden: { opacity: 1 }, // Kontener jest widoczny by animować dzieci
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Uruchom animacje dzieci z opóźnieniem
      delayChildren: 0.5, // Opóźnienie przed rozpoczęciem animacji dzieci
    },
  },
};

export const About2: React.FC<AboutProps> = () => {
  const sectionControls = useAnimationControls(); // Używamy własnych kontrolerów

  const sectionVariants: Variants = {
    hidden: { scaleY: 0, scaleX: 0, opacity: 1, y: 0 },
    visible: { scaleY: 1, scaleX: 1, opacity: 1, y: 0 },
  };

  const ref = useRef(null);
  const isInView = useInView(ref); // Animacja tylko raz

  // Użycie isInView
  useEffect(() => {
    if (isInView) {
      sectionControls.start("visible");
    } else {
      // Możesz usunąć "else" jeśli chcesz, aby animacja uruchomiła się tylko raz
      // i pozostała w stanie 'visible'.
      sectionControls.start("hidden");
    }
  }, [isInView, sectionControls]);

  return (
    <>
      <motion.section
        ref={ref}
        variants={sectionVariants}
        initial="hidden"
        animate={sectionControls}
        transition={{
          duration: 0.5,
          delay: 0,
        }}
        exit="exit"
        className="flex flex-col gap-16 "
      >
        <motion.div
          initial={{ scaleY: 0, scaleX: 0, opacity: 1, y: -500 }}
          animate={{ scaleY: 1, scaleX: 1, opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 0,
          }}
          className="text-5xl max-w-4xl m-auto my-4 text-center font-thin tracking-widest"
        >
          W pracy z klientem stawiamy przede wszystkim na:
        </motion.div>

        <div className="max-w-7xl w-full mx-auto">
          <motion.div
            variants={containerVariants2}
            initial="hidden"
            animate={sectionControls} // Kontrola także elementów wewnętrznych
            className="flex flex-col gap-16 p-4" // Użycie grid dla lepszego układu
          >
            {/* --- MAPOWANIE ELEMENTÓW --- */}
            {valuesData.map((value, index) => {
              // Dynamiczne tworzenie klas CSS
              const fontWeightClass = `font-${value.fontWeight}`; // np. font-thin
              const textAlignClass = `text-${value.alignment}`; // np. text-left
              const italicClass = value.isItalic ? "italic" : "not-italic";

              return (
                <motion.div
                  key={index}
                  variants={itemVariants} // Użyj wariantów dla każdego elementu
                  className={`
                       ${fontWeightClass} ${textAlignClass} ${italicClass} text-2xl`}
                >
                  {value.text}
                </motion.div>
              );
            })}
            {/* --- KONIEC MAPOWANIA --- */}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};
