import React, { useRef } from "react";
import { delay, motion, useAnimation, useInView } from "framer-motion";
import TypewriterComponent from "typewriter-effect";
import { transition } from "three/examples/jsm/tsl/display/TransitionNode.js";
import { AppleWindow } from "./AppleWindow";

export const MainDescription = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 },
    },
  };

  const imgVariants = {
    hidden: { opacity: 0, y: 0, scale: 0.2 },
    visible: {
      opacity: 1,
      y: 0,
      scale: [0.4, 1.2, 1],
      transition: { duration: 0.4 },
    },
  };
  const t1Variants = {
    hidden: { opacity: 0, y: -100, x: 0 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.3, delay: 0.4 },
    },
  };
  const t2Variants = {
    hidden: { opacity: 0, y: 40, x: 0 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.2, delay: 0.7 },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="text-3xl max-w-7xl m-auto text-center font-thin tracking-wide flex gap-16 items-center"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.img
        src="/cpu.png"
        alt="CPU Icon"
        className="w-96 h-auto"
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        whileInView={{
          clipPath: "inset(0 0 0% 0)",
          transition: { duration: 0.6, ease: "easeOut" },
        }}
      />
      <motion.div
        className="text-3xl m-auto
       text-center font-extralight tracking-wider flex flex-col gap-8 items-center"
      >
        <motion.div
          className="text-3xl m-auto text-center font-extralight tracking-wide"
          variants={t1Variants}
        >
          W świecie, w którym{" "}
          <span className="font-bold">
            technologia decyduje o przewadze konkurencyjnej,<br></br>
          </span>
          każda organizacja musi być <br />
          <span className="italic ">
            online, zautomatyzowana i gotowa na AI
          </span>
          .
          <br />
        </motion.div>
        <motion.div variants={t2Variants}>
          <span className="font-bold">Naszą misją jest </span>
          dostarczać małym i średnim firmom{" "}
          <span className="underline decoration-cyan-400 font-bold">
            rozwiązania IT
          </span>
          , które są
          <span className="italic "> niezbędne dla nowoczesnych frim</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export const HostingDescription = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 0,
      transition: {
        delay: 1,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 },
    },
  };
  const baseDelay = 0.1;

  const imgVariants = {
    hidden: { opacity: 0, y: 0, scale: 0.2 },
    visible: {
      opacity: 1,
      y: 0,
      scale: [0.4, 1.2, 1],
      transition: { duration: 0.4, delay: baseDelay + 1 },
    },
  };
  const tVariants = {
    hidden: { opacity: 0, y: 0, x: 100 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.3, delay: baseDelay },
    },
  };
  const t1Variants = {
    hidden: { opacity: 0, y: -100, x: 0 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.3, delay: baseDelay + 0.3 },
    },
  };
  const t2Variants = {
    hidden: { opacity: 0, y: -40, x: 0 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.3, delay: baseDelay + 0.7 },
    },
  };
  const t3Variants = {
    hidden: { opacity: 0, y: -40, x: 0 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.3, delay: baseDelay + 1 },
    },
  };

  const refT = useRef(null);
  const isInView = useInView(refT);
  return (
    <section className="flex flex-col gap-16">
      <div ref={refT} />
      <motion.div
        className="text-5xl h-16 font-bold m-auto text-center  tracking-wide"
        initial={{ clipPath: "inset( 0 100% 0 0)" }}
        whileInView={{
          clipPath: "inset(0% 0 0 0)",
          transition: { duration: 0.6, ease: "easeOut", delay: 0 },
        }}
      >
        <p> Wszystkim się zajmiemy...</p>
      </motion.div>
      <motion.div
        ref={ref}
        className="text-2xl max-w-6xl m-auto text-slate-300
       text-center font-thin tracking-wide flex flex-row-reverse gap-16 items-center"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.img
          src="/hosting.png"
          alt="Hosting Icon"
          className="w-96 h-auto"
          initial={{ clipPath: "inset(100% 0% 0 0)" }}
          whileInView={{
            clipPath: "inset(0% 0% 0 0)",
            transition: { duration: 0.6, ease: "easeOut", delay: 0.6 },
          }}
        />
        <motion.div
          className=" m-0
       text-center font-extralight tracking-wider flex flex-col gap-8 items-center"
        >
          <motion.div
            className=" m-auto text-center font-extralight tracking-wide"
            variants={t1Variants}
          >
            Oferujemy również pełny{" "}
            <span className="font-bold">hosting i opiekę techniczną</span> nad
            wszystkimi tworzonymi przez nas systemami — aktualizacje, zmiany,
            optymalizacje i ciągłe monitorowanie działania.
          </motion.div>
          <motion.div variants={t2Variants}>
            Stawiamy na{" "}
            <span className="font-bold">przejrzystość i niezależność</span> — w
            każdej chwili możesz pobrać wszystkie swoje pliki, dane i projekty,
            bez żadnych ukrytych ograniczeń.
          </motion.div>
          <motion.div variants={t3Variants}>
            Prowadzimy również hosting dla{" "}
            <span className="font-bold">zewnętrznych projektów</span> – jeśli
            masz już gotowe rozwiązanie, możemy zająć się jego utrzymaniem i
            dalszym rozwojem.
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
export const Terminal = () => {
  return (
    <section className="flex flex-col text-4xl scale-75">
      <AppleWindow>
        <div className="flex text-2xl flex-col w-[96vh] justify-between m-0 h-[64vh]">
          {/* Listing folderów */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0 }}
          >
            <motion.div
              className="flex items-center gap-2 
            text-2xl font-mono m-0 font-thin"
            >
              <p className="text-fuchsia-500 font-bold">
                root@master:/home<b className="text-slate-400">$</b>
              </p>
              ls
            </motion.div>

            <div className="grid grid-cols-2">
              <ul className="font-mono text-2xl flex flex-col gap-1">
                <li className="text-cyan-400">automations/</li>
                <li className="text-cyan-400">ai-apps/</li>
                <li className="text-cyan-400">fullstack-projects/</li>
                <li className="text-cyan-400">discord-bots/</li>
                <li className="text-cyan-400">logs/</li>
                <li className="text-cyan-400">configs/</li>
                <li className="text-lime-400">we_love_linux.txt</li>
              </ul>

              <ul className="font-mono text-2xl flex flex-col gap-1">
                <li className="text-cyan-400">cdn/</li>
                <li className="text-cyan-400">wordpress-sites/</li>
                <li className="text-cyan-400">hosting/</li>
                <li className="text-cyan-400">client-files/</li>
                <li className="text-cyan-400">maintenance/</li>
                <li className="text-cyan-400">archives/</li>
                <li className="text-lime-400">README.md</li>
              </ul>
            </div>
          </motion.div>

          {/* cat ./we_love_linux.txt */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0 }}
            className="tems-center gap-2 text-2xl font-mono font-thin"
          >
            <div className="flex items-center gap-2 text-2xl font-mono font-thin">
              <p className="text-fuchsia-500 font-bold">
                root@master:/home<b className="text-slate-400">$</b>
              </p>

              <p> cat ./we_love_linux.txt</p>
            </div>
            <p className="text-2xl text-green-400">
              {`We ❤️ Linux.
                    Stawiamy na przejrzystość, bezpieczeństwo i pełną kontrolę.

                    Twoje projekty zawsze należą do Ciebie — 
                    możesz pobrać wszystkie pliki w każdej chwili.

                    A my zajmujemy się hostingiem, aktualizacjami
                    i stabilnym działaniem Twoich usług.
                    `}
            </p>
          </motion.div>

          {/* Output of we_love_linux.txt */}
          <motion.div className="flex items-center gap-2 text-2xl font-mono font-thin">
            <p className="text-fuchsia-500 font-bold">
              root@master:/home<b className="text-slate-400">$</b>
            </p>

            <TypewriterComponent
              options={{
                strings: ["ls", "cat ./we_love_linux.txt", ""],
                autoStart: true,
                delay: 0,
                deleteSpeed: 0,
              }}
            />
          </motion.div>
        </div>
      </AppleWindow>
    </section>
  );
};
