import Image from "next/image";
import {
  AnimationControls,
  motion,
  useAnimationControls,
  useInView,
  Variant,
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
import { SiN8N, SiWordpress } from "react-icons/si";
import { HiOutlineTerminal } from "react-icons/hi";
import { FaServer, FaDiscord } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";

// --- Typy i Dane ---
const AiIcon = () => {
  return <div className="text-[64px] font-extrabold">AI</div>;
};
interface ServiceTileProps {
  icon: IconType;
  title: string;
  description: string;
  variants: Variants;
}
export type TileInfo = {
  icon: IconType;
  title: string;
  description: string;
};

export const serviceData = [
  {
    icon: AiIcon,
    title: "Aplikacja AI",
    description:
      "Tworzymy przejrzyste, estetyczne i konwersyjne interfejsy. Projektujemy doświadczenia użytkownika oparte na researchu, analizie i dobrych praktykach.",
  },
  {
    icon: SiN8N,
    title: "Automatyzacja",
    description:
      "Specjalizujemy się w zaawansowanych automatyzacjach procesów biznesowych i integracjach z wykorzystaniem Sztucznej Inteligencji, używając platform make.com i n8n.",
  },
  {
    icon: FaDiscord,
    title: "Bot Discord",
    description:
      "Konfigurujemy i profesjonalnie zarządzamy serwerami Discord, w tym botami, automatyzacjami, rolami, zabezpieczeniami oraz pełną strukturą społeczności.",
  },
  {
    icon: BsGlobe,
    title: "Strona Fullstack",
    description:
      "Budujemy dedykowane aplikacje fullstack oparte na technologiach takich jak React, Next.js, Go i Node.js – skalowalne, szybkie i gotowe do dalszego rozwoju.",
  },
  {
    icon: SiWordpress,
    title: "Strona WordPress",
    description:
      "Projektujemy i wdrażamy nowoczesne, szybkie i łatwe w zarządzaniu strony WordPress, tworząc motywy, integracje oraz personalizacje idealnie dopasowane do Twojego biznesu.",
  },
  {
    icon: MdDesignServices,
    title: "UI/UX Design",
    description:
      "Projektujemy intuicyjne i żywe strony WWW. Tworzymy doświadczenia, które zwiększają skuteczność Twojego produktu.",
  },
];

// 2. Warianty dla pojedynczego kafelka (bez zmian w stosunku do poprzedniej wersji)

const MainTile: React.FC<ServiceTileProps> = ({
  icon: Icon,
  title,
  description,
  variants,
}) => {
  return (
    <motion.div
      variants={variants}
      className="flex flex-col items-center hover:scale-105 pt-4 px-3 pb-4
    border border-gray-500 hover:cursor-pointer
          bg-white/5 hover:bg-cyan-400/5 backdrop-blur-sm  hover:ring-cyan-400 hover:ring-2 hover:shadow-xl hover:shadow-cyan-400/20
        rounded-xl shadow-lg  transition duration-300 min-h-[360px] w-full"
    >
      <div className="text-4xl text-fuchsia-500 mb-4">
        <Icon size={72} />
      </div>
      <h3 className="text-3xl font-mono font-semibold text-white mb-2 text-center mx-4">
        {title}
      </h3>
      <p className="text-gray-300 text-center text-xl">{description}</p>
    </motion.div>
  );
};

const MainTile2: React.FC<ServiceTileProps> = ({
  icon: Icon,
  title,
  description,
  variants,
}) => {
  return (
    <motion.div
      variants={variants}
      className="flex flex-col items-center hover:scale-105 pt-4 px-3 pb-4
    border border-gray-500 hover:cursor-pointer
          bg-white/5 hover:bg-cyan-400/5 backdrop-blur-sm  hover:ring-cyan-400 hover:ring-2 hover:shadow-xl hover:shadow-cyan-400/20
        rounded-xl shadow-lg  transition duration-300 min-h-[360px] w-full"
    >
      <div className="text-4xl text-cyan-400 mb-4">
        <Icon size={72} />
      </div>
      <h3 className="text-3xl font-mono font-semibold text-white mb-2 text-center mx-4">
        {title}
      </h3>
      <p className="text-gray-300 text-center text-xl">{description}</p>
    </motion.div>
  );
};

// --- Komponent About ---
interface AboutProps {
  tiles: TileInfo[];
  header: React.ReactNode;
  variant?: "fuchsia" | "cyan";
}
const tileVariants: Variants = {
  hidden: { top: -30, x: -40, z: -200, opacity: 0, scaleY: 0.4, scaleX: 0.6 },
  visible: {
    top: 0,
    x: 0,
    z: 0,
    opacity: [0, 0, 1],
    scaleY: [0.6, 0.8, 1],
    scaleX: [0.6, 0.8, 1],
    transition: {
      duration: 0.3,
      ease: "circInOut",
    },
  },
};
export const Tiles: React.FC<AboutProps> = ({
  tiles,
  header,
  variant = "fuchsia",
}) => {
  const headerControl = useAnimationControls();
  const tilesControl = useAnimationControls();
  const tilesVariants: Variants = {
    visible: {
      transition: {
        delayChildren: 0.2,
        // ZMIANA: Ustawiamy staggerChildren na >= 0.6s (czas trwania animacji kafelka)
        staggerChildren: 0.2, // Zapewnia pełny pop-up jednego kafelka, zanim rozpocznie się kolejny
      },
    },
    hidden: {},
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 100px -50px 0px" });
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2);

  useEffect(() => {
    if (isInView) {
      headerControl.start("visible");
    } else if (!isInView && !isInView2) {
      headerControl.start("hidden");
    }
  }, [isInView, isInView2, headerControl]);

  useEffect(() => {
    if (isInView2) {
      tilesControl.start("visible");
    } else {
      tilesControl.start("hidden");
    }
  }, [isInView2, tilesControl]);

  return (
    <>
      <motion.section exit="exit" className="flex flex-col gap-16">
        <div ref={ref} />
        <motion.div
          className="text-4xl h-12 font-bold m-auto text-center  tracking-wide"
          initial={{ clipPath: "inset( 0 100% 0 0)" }}
          whileInView={{
            clipPath: "inset(0% 0 0 0)",
            transition: { duration: 0.6, ease: "easeOut", delay: 0 },
          }}
        >
          {header}
        </motion.div>

        <div className="max-w-7xl w-full flex flex-col gap-8">
          <motion.div
            variants={tilesVariants}
            ref={ref2}
            initial="hidden"
            animate={tilesControl} // Kontrola także elementów wewnętrznych
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {tiles.map((service, index) => (
              <MainTile
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                variants={tileVariants}
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
    alignment: "center",
    isItalic: false,
  },
  {
    text: "Przejrzystą komunikację na każdym etapie projektu.",
    fontWeight: "normal",
    alignment: "center",
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
    alignment: "center",
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

export const About2: React.FC = () => {
  const headerControl = useAnimationControls(); // Używamy własnych kontrolerów

  const tilesVariants: Variants = {
    hidden: { scaleY: 0, scaleX: 0, opacity: 1, y: 0 },
    visible: { scaleY: 1, scaleX: 1, opacity: 1, y: 0 },
  };

  const ref = useRef(null);
  const isInView = useInView(ref); // Animacja tylko raz

  // Użycie isInView
  useEffect(() => {
    if (isInView) {
      headerControl.start("visible");
    } else {
      // Możesz usunąć "else" jeśli chcesz, aby animacja uruchomiła się tylko raz
      // i pozostała w stanie 'visible'.
      headerControl.start("hidden");
    }
  }, [isInView, headerControl]);

  return (
    <>
      <motion.section
        ref={ref}
        variants={tilesVariants}
        initial="hidden"
        animate={headerControl}
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
          className="text-4xl max-w-4xl m-auto  text-center font-thin tracking-widest"
        >
          W pracy z klientem stawiamy przede wszystkim na:
        </motion.div>

        <div className="max-w-7xl w-full mx-auto">
          <motion.div
            variants={containerVariants2}
            initial="hidden"
            animate={headerControl} // Kontrola także elementów wewnętrznych
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
