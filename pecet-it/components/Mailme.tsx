"use client";

import { useState } from "react";
import { BiMailSend } from "react-icons/bi";

const mailContent = {
  content: "Dzień dobry, \n\n",
};

export const Mailme = () => {
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

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-slate-600 p-4 border-[5px] border-white
             flex flex-col m-auto justify-end gap-4 w-full relative max-w-6xl"
    >
      <div className="flex justify-end gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg p-2 border-[5px] border-white
                w-64 bg-slate-800"
          placeholder="Podaj swój email"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="self-end btn-secondary font-sans m-auto bg flex items-center gap-2 px-3 py-2 rounded-lg"
        >
          {loading ? "Wysyłanie..." : "Wyślij"}
          <BiMailSend size={24} />
        </button>
      </div>

      <textarea
        rows={16}
        className="rounded-lg p-2 border-[5px] border-white resize-none bg-slate-800"
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

      {/* <div className="absolute top-24 left-8 text-white">
        {!isWritting && input === "" ? (
          <TypewriterComponent
            options={{
              strings: mailContent.content,
              autoStart: true,
              delay: 20,
            }}asf
          />
        ) : null}
      </div> */}

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
  );
};

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

export const MailmeOverlay = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isMailme, setIsMailme] = useState(false);

  // obserwuj query param
  useEffect(() => {
    setIsMailme(searchParams.get("mailme") === "true");
  }, [searchParams]);

  const closeMailme = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("mailme");
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  if (!isMailme) return null;

  return (
    <motion.section
      initial={{ y: -400 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-black w-full fixed top-0 right-0 bg-opacity-80 h-full backdrop-blur-sm
        z-50 flex flex-col justify-center items-center font-mono px-8 lg:px-24 xl:px-64"
    >
      <Mailme />
      <motion.button
        initial={{ x: 0, opacity: 0, rotate: 0 }}
        animate={{ x: 0, opacity: 1, rotate: 180 }}
        transition={{ ease: "easeOut", duration: 0.3, delay: 0.4 }}
        className="fixed z-50 top-4 right-4"
        onClick={closeMailme}
      >
        <IoClose size={32} />
      </motion.button>
    </motion.section>
  );
};
