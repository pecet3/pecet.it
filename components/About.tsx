import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { PiSubtractSquareDuotone } from "react-icons/pi";
import { AnimationControls, motion } from "framer-motion";
import React, { ForwardedRef, forwardRef, useState } from "react";
import { BsWordpress } from "react-icons/bs";
import { FaCode, FaTabletAlt } from "react-icons/fa"; // Example icons
import { IconType } from "react-icons"; // Type for react-icons

// --- 1. Define Service Structure and Data ---

// Define the shape of a single service item
interface Service {
  name: string;
  icon: IconType;
  content: React.ReactNode; // Use React.ReactNode for potentially complex content
}

// Define the keys for the services (used in the services hashmap and as state type)
type ServiceKey = "wordpress" | "custom_dev" | "rwd"; // Extend this as needed

// Define the services hashmap (Record)
const services: Record<ServiceKey, Service> = {
  wordpress: {
    name: "Strona Wordpress",
    icon: BsWordpress,
    content: (
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">Wordpress</h3>
        <p>
          Tworzenie profesjonalnych stron internetowych opartych na systemie
          **Wordpress**. Idealne dla blogów, małych i średnich firm. Łatwa
          edycja treści za pomocą panelu administracyjnego.
        </p>
        <ul className="list-disc pl-6 mt-2 text-lg">
          <li>Instalacja i konfiguracja</li>
          <li>Wybór i dostosowanie motywu</li>
          <li>Integracja niezbędnych wtyczek (SEO, bezpieczeństwo)</li>
        </ul>
      </div>
    ),
  },
  custom_dev: {
    name: "Własny Projekt",
    icon: FaCode,
    content: (
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">
          Własny Projekt (Custom Development)
        </h3>
        <p>
          Budowanie **dedykowanych aplikacji webowych** i stron od podstaw
          (React, Next.js, itp.). Pełna kontrola nad kodem i funkcjonalnością.
        </p>
        <ul className="list-disc pl-6 mt-2 text-lg">
          <li>Frontend/Backend Development</li>
          <li>Integracja z API</li>
          <li>Skalowalne rozwiązania</li>
        </ul>
      </div>
    ),
  },
  rwd: {
    name: "Responsywność (RWD)",
    icon: FaTabletAlt,
    content: (
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">Responsywność</h3>
        <p>
          Optymalizacja istniejących stron pod kątem **wyświetlania na
          wszystkich urządzeniach** (desktopy, tablety, smartfony).
        </p>
        <ul className="list-disc pl-6 mt-2 text-lg">
          <li>Mobile-First Design</li>
          <li>Testowanie na różnych rozdzielczościach</li>
          <li>Poprawa użyteczności mobilnej</li>
        </ul>
      </div>
    ),
  },
};

// --- 2. Update Component Props and State ---

interface AboutProps {
  mainControls: AnimationControls;
}

export const About = forwardRef(
  (props: AboutProps, ref: ForwardedRef<HTMLElement>) => {
    const { mainControls } = props;

    // State to track the currently selected service, initialized to 'wordpress'
    const [currentService, setCurrentService] =
      useState<ServiceKey>("wordpress");

    // Click handler function
    const handleServiceChange = (key: ServiceKey) => {
      setCurrentService(key);
    };

    // Get the current service object for displaying content
    const serviceContent = services[currentService].content;

    // --- 3. Component JSX with Picker Logic ---

    return (
      <motion.section
        ref={ref}
        variants={{
          hidden: { scaleY: 0.2, scaleX: 0, opacity: 0.2, y: 400 },
          visible: { scaleY: 1, scaleX: 1, opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.3,
          delay: 0,
        }}
        className="text-2xl w-full border-white rounded-2xl border-[6px] my-8 max-w-6xl bg-slate-800"
      >
        {/* Header/Title Bar (Unchanged) */}
        <div className="font-mono w-full border-b-[6px] border-white p-4 flex justify-between">
          C:\win32\Cennik
          <div className="flex justify-end gap-2">
            <div className="border-b-4 border-white w-6 mb-2.5"></div>

            <PiSubtractSquareDuotone />
            <IoClose />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-3 h-[64vh]">
          {/* Service Picker/List (Left Side) */}
          <div className="border-r-[6px] border-white p-2 ">
            <ul className="flex flex-col gap-1 ">
              {(Object.keys(services) as ServiceKey[]).map((key) => {
                const service = services[key];
                const Icon = service.icon; // Get the component for the icon

                const isSelected = key === currentService;

                return (
                  <li
                    key={key}
                    // Apply different styling if selected, and add hover effect
                    className={`flex 
                      items-center gap-2 p-1 cursor-pointer transition-colors duration-200 ${
                        isSelected
                          ? "bg-white text-slate-800 font-bold border-slate-800 rounded-lg"
                          : "hover:bg-slate-700 rounded-lg"
                      }`}
                    // Set the click handler
                    onClick={() => handleServiceChange(key)}
                  >
                    <Icon className="text-3xl" /> {service.name}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Service Content Display (Right Side) */}
          <div className="flex-grow text-xl">{serviceContent}</div>
        </div>
      </motion.section>
    );
  }
);

About.displayName = "About";
