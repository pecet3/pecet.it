"use client";

import { useState } from "react";
import { BiMailSend } from "react-icons/bi";

import { motion, AnimatePresence } from "framer-motion"; // <-- Import AnimatePresence
import { MdOutlineEmail } from "react-icons/md";

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
        body: JSON.stringify({ from: email, message: input }),
      });

      setStatus(res.status);

      if (res.ok) {
        setInput("");
        setEmail("");
        setIsWritting(false);
      }
    } catch {
      setStatus(500);
    } finally {
      setLoading(false);
    }
  };

  const initialAnimation = { scale: 0.3, top: 12, y: 160, x: 160, opacity: 1 };
  const animateAnimation = { scale: 1, left: 21, y: 0, x: 0, opacity: 1 };
  const transitionSettings = { ease: "easeOut", duration: 0.2, delay: 0 };

  return (
    <div className=" bottom-4 right-4 fixed">
      {/* 1. Owiń animowaną zawartość w AnimatePresence.
        2. Ustaw onExitComplete na funkcję, jeśli potrzebujesz jakiegoś działania po zakończeniu animacji zamykania.
      */}
      {isOpen ? (
        <motion.div
          key="mail-form"
          initial={initialAnimation}
          animate={animateAnimation}
          // Ustaw exit na te same wartości co initial, aby animacja zamknięcia była taka sama jak animacja otwarcia (odwrotna)
          exit={initialAnimation}
          transition={transitionSettings}
        >
          <form
            onSubmit={handleSubmit}
            className="flex w-[56vh] flex-col gap-2 bg-white/10 rounded-lg backdrop-blur-sm
 bg- px-2 pb-2 border-2 items-start relative shadow-lg shadow-gray-800"
          >
            <div className="flex items-end pt-3 m-0 gap-1">
              {" "}
              <button
                className="w-4 h-4 bg-red-500 rounded-full "
                onClick={() => setIsOpen(false)}
                type="button" // Dodaj type="button", aby nie wysyłał formularza
              ></button>
              <button
                className="w-4 h-4 bg-yellow-500 rounded-full"
                type="button" // Dodaj type="button"
              ></button>
              <button
                className="w-4 h-4 bg-green-500 rounded-full"
                type="button" // Dodaj type="button"
              ></button>
            </div>
            <div className="flex  justify-between m-auto w-full gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg p-2 border-1 border-gray-400  w-full
                bg-slate-800"
                placeholder="Podaj swój email"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="self-end 
           bg-white text-black duration-300 hover:cursor-pointer
        font-sans m-0 bg flex items-center gap-2 px-3 py-2 rounded-lg"
              >
                <BiMailSend size={24} />
              </button>
            </div>
            <textarea
              rows={16}
              className="rounded-lg w-full p-2 border-1 border-gray-400 resize-none bg-slate-800"
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
            {status && (
              <p
                className={`text-center font-bold mt-2 ${
                  status === 200
                    ? "text-green-400"
                    : status === 400
                    ? "text-yellow-400"
                    : "text-red-500"
                }`}
              >
                {status === 200 && "Wiadomość wysłana ✅"}
                {status === 400 && "Brak wymaganych danych ⚠️"}
                {status === 500 && "Błąd serwera ❌"}
              </p>
            )}
          </form>
        </motion.div>
      ) : (
        <motion.button
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
          className=" font-bold text-xl
      duration-1000 flex items-center justify-center hover:cursor-pointer
      backdrop-blur-lg bg-white text-black p-2   rounded-xl hover:scale-105
       hover:shadow-lg shadow-md shadow-gray-900"
        >
          <motion.div
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
      )}
    </div>
  );
};
