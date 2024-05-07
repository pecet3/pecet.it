import { BiMailSend } from "react-icons/bi"
import { IoSend } from "react-icons/io5"

export const Mailme = () => {
    return (

        <form className="rounded-2xl bg-slate-600 p-4 border-[5px] border-white
             flex flex-col m-auto justify-center gap-4 w-full ">
            <input type="email" className="rounded-lg p-2 border-[5px] border-white
                w-64 bg-slate-800" placeholder="Podaj swój email" />
            <textarea rows={16}
                className="rounded-lg p-2 border-[5px] border-white  resize-none bg-slate-800"
                placeholder="tresc maila" />
            <button type="submit" className="btn-secondary font-sans m-auto bg-fuchsia-500">Wyślij
                <BiMailSend size={28} /></button>
        </form>

    )
}