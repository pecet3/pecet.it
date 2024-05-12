"use client"
import { useState } from "react"
import { BiMailSend } from "react-icons/bi"
import { IoSend } from "react-icons/io5"
import TypewriterComponent from "typewriter-effect"

const mailContent = {
    content: "Dzień dobry, szukam osoby, która zrobi mi stronęeeeeeeee"
}

export const Mailme = () => {
    const [input, setInput] = useState("")
    const [isWritting, setIsWritting] = useState(false)
    return (


        <form className="rounded-2xl bg-slate-600 p-4 border-[5px] border-white
             flex flex-col m-auto justify-end gap-4 w-full relative">
            <div className="flex justify-end">
                <input type="email" className="rounded-lg p-2 border-[5px] border-white
                w-64 bg-slate-800" placeholder="Podaj swój email" />
                <button type="submit" className="self-end btn-secondary m-auto font-sans m-auto bg-fuchsia-500">Wyślij
                    <BiMailSend size={28} /></button>
            </div>
            <textarea rows={16}
                className="rounded-lg p-2 border-[5px] border-white  resize-none bg-slate-800"
                placeholder=""
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onClick={() => {
                    setInput(mailContent.content)
                    setIsWritting(true)
                }
                }
            />
            <div className="absolute top-24 left-8" >

                {!isWritting && input === "" ? <TypewriterComponent
                    options={{
                        strings: mailContent.content,
                        autoStart: true,
                        delay: 20,
                    }}
                /> : null}
            </div>

        </form >



    )
}