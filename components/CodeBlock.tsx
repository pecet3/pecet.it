"use client"
import { PL } from '@/content/content';
import Typewriter from 'typewriter-effect';

export const CodeBlock = () => {
    const rangeArray = Array.from({ length: 15 }, (_, index) => index + 1);

    return (
        <div className="font-mono text-sm md:text-base  w-96 md:w-[30rem] 
        bg-slate-700 px-2 py-2 rounded-lg  border-t-[20px] border-4 border-slate-200 
        shadow-lg shadow-black z-0
        grid grid-cols-[32px_minmax(0px,_1fr)] gap-0 relative">
            <div className="absolute flex gap-1 -top-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex flex-col w-4 text-sky-400">
                {rangeArray.map((v) => (
                    <p key={v}>{v}.</p>
                ))}
            </div>
            <div>
                <HTMLelement element='html' lang='pl'>
                    <HTMLelement element='head' >
                        <p className="text-fuchsia-400">
                            &lt;meta
                            <b className="text-teal-400"> charset
                                <b className="text-amber-400">=</b>
                                <b className='text-red-400'>&quot;utf-8&quot;</b></b>&gt;
                        </p>
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
                                    delay: 20,

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
    children?: React.ReactNode
}

const HTMLelement: React.FC<HTMLelementProps> = ({ element, classes, lang, children }) => {
    return (
        <div>
            <p className="text-fuchsia-400">
                &lt;{element}{classes ? <b className="text-teal-400"> class
                    <b className="text-amber-400">=</b>
                    <b className='text-red-400'>&quot;{classes}&quot;</b></b> : null}
                {lang ? <b className="text-teal-400"> lang
                    <b className="text-amber-400">=</b>
                    <b className='text-red-400'>&quot;{lang}&quot;</b></b> : null}&gt;
            </p>
            <div className='pl-6 text-white font-extrabold'> {children}</div>
            <p className="text-fuchsia-400">&lt;/{element}&gt;</p>
        </div>
    );
};
