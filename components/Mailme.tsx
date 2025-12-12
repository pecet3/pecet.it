"use client";

import { useState } from "react";
import { BiMailSend } from "react-icons/bi";

import { motion, AnimatePresence } from "framer-motion"; // <-- Import AnimatePresence
import { MdOutlineEmail } from "react-icons/md";
import toast from "react-hot-toast";

const mailContent = {
  content: "Dzień dobry, \n\n",
};

export const Mailer = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<boolean>;
}) => {
  const [input, setInput] = useState(mailContent.content);
  const [email, setEmail] = useState("");
  const [isWritting, setIsWritting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | number>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, content: input }),
      });

      setStatus(res.status);

      if (res.ok) {
        setInput("");
        setEmail("");
        setIsWritting(false);
        setIsOpen(false);
        toast.success(
          "Wysłano pomyślnie Twoją wiadomość. Wkrótce wyślemy odpowiedź na podanego przez Ciebie maila"
        );
      }
    } catch {
      toast.error("Wysyłanie wiadomości się nie powiodło");
    } finally {
      setLoading(false);
    }
  };

  const initialAnimation = { scale: 0.3, top: 12, y: 160, x: 160, opacity: 0 };
  const animateAnimation = { scale: 1, left: 21, y: 0, x: 0, opacity: 1 };
  const transitionSettings = { ease: "easeOut", duration: 0.2 };

  return (
    <div className="bottom-4 right-4 fixed">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mail-form"
            initial={initialAnimation}
            animate={animateAnimation}
            exit={initialAnimation} // 👈 odwrotna animacja przy zamknięciu
            transition={transitionSettings}
          >
            <form
              onSubmit={handleSubmit}
              className="flex w-[56vh] flex-col gap-2 rounded-lg bg-white/15 
              px-2 pb-2 border backdrop-blur-sm border-gray-400 
              items-start relative shadow-lg shadow-gray-800"
            >
              <div className="flex items-end pt-2 m-0 gap-1">
                <button
                  className="w-4 h-4 bg-red-500 rounded-full hover:cursor-pointer"
                  type="button"
                  onClick={() => setIsOpen(false)}
                ></button>
                <button
                  className="w-4 h-4 bg-yellow-400 rounded-full"
                  type="button"
                ></button>
                <button
                  className="w-4 h-4 bg-green-500 rounded-full"
                  type="button"
                ></button>
              </div>

              <div className="flex justify-between m-auto w-full gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-lg p-2 border border-gray-400 w-full bg-slate-800"
                  placeholder="Podaj swój email"
                  required
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="self-end bg-white text-black duration-300 
                  hover:cursor-pointer
                  font-sans m-0 flex items-center gap-2 px-3 py-2 rounded-lg"
                >
                  <BiMailSend size={24} />
                </button>
              </div>

              <textarea
                rows={16}
                className="rounded-lg w-full p-2 border border-gray-400 resize-none bg-slate-800"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onClick={() => {
                  if (!isWritting) {
                    setInput(mailContent.content);
                    setIsWritting(true);
                  }
                }}
                required
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export const MailerButton = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<boolean>;
}) => {
  if (isOpen) return;
  return (
    <motion.button
      whileHover={{
        scale: 1.2, // zatrzymuje pulsowanie
        transition: { duration: 0 }, // natychmiastowa zmiana → brak animacji
      }}
      initial={{
        scale: 0,
      }}
      animate={{
        scale: [0.9, 1.2, 1],
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
        delay: 1,
      }}
      onClick={() => setIsOpen(true)}
      className="
       bottom-4 right-4 fixed
    btn
"
    >
      <motion.div
        whileHover={{
          scale: 1.2, // zatrzymuje pulsowanie
          transition: { duration: 0 }, // natychmiastowa zmiana → brak animacji
        }}
        animate={{
          scale: [1.2, 1, 1],
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className=" flex items-center flex-col"
      >
        <MdOutlineEmail size={48} />
      </motion.div>
    </motion.button>
  );
};
