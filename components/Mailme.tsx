export const Mailme = () => {
    return (
        <section className="bg-black fixed top-0 right-0 bg-opacity-80  w-full h-full 
        z-50 flex flex-col justify-center">
            <form className="rouned-lg bg-slate-600 p-6 border-6 border-white
             flex flex-col m-auto justify-center gap-6">
                <input type="text" className="rounded-lg p-2 bg-slate-800" placeholder="Podaj swój email" />
                <input type="input" className="rounded-lg p-2 bg-slate-800" placeholder="tresc maila" />
            </form>
        </section>
    )
}