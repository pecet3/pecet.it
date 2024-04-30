"use client"
import { PL } from '@/content/content';
import Typewriter from 'typewriter-effect';

export const CodeBlock = () => {
    const rangeArray = Array.from({ length: 16 }, (_, index) => index + 1);

    return (
        <div className="font-mono text-sm sm:text-base  w-80 sm:w-[28rem] 
        bg-slate-700 px-2 py-2 rounded-lg  border-t-[20px] border-4 border-slate-200 
        shadow-lg shadow-black
        grid grid-cols-[32px_minmax(300px,_1fr)] gap-0 relative">
            <div className="absolute flex gap-1 -top-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex flex-col w-4 text-sky-400">
                {rangeArray.map((v) => (
                    <p>{v}.</p>
                ))}
            </div>
            <div>
                <HTMLelement element='html' lang='pl'>
                    <HTMLelement element='head' >
                        <HTMLelement element='title' >
                            Twoja wymarzona strona
                        </HTMLelement>
                    </HTMLelement>
                    <HTMLelement element='body' >
                        <HTMLelement element='div' classes='container'>
                            <Typewriter
                                options={{
                                    strings: `
                     Hej!, mam na imię Jakub <br>
                    chętnie wykonam dla Ciebie <br>
                    piękną stronę internetową!`
                                    ,
                                    autoStart: true,
                                    delay: 40,

                                }}
                            />
                        </HTMLelement>
                    </HTMLelement>

                </HTMLelement>




            </div>
        </div >
    )
}

interface HTMLelementProps {
    element: string;
    classes?: string;
    lang?: string;
    children: React.ReactNode
}

const HTMLelement: React.FC<HTMLelementProps> = ({ element, classes, lang, children }) => {
    return (
        <div>
            <p className="text-fuchsia-400">
                &lt;{element}{classes ? <b className="text-teal-400"> class
                    <b className="text-sky-400">=</b>
                    <b className='text-red-400'>"{classes}"</b></b> : null}
                {lang ? <b className="text-teal-400"> lang
                    <b className="text-sky-400">=</b>
                    <b className='text-red-400'>"{lang}"</b></b> : null}&gt;
            </p>
            <div className='pl-4 text-lime-300'> {children}</div>
            <p className="text-fuchsia-400">&lt;/{element}&gt;</p>
        </div>
    );
};
