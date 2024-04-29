"use client"
import { PL } from '@/content/content';
import Typewriter from 'typewriter-effect';

export const CodeBlock = () => {
    return (
        <div className="font-mono text-base sm:text-xl w-72 sm:w-96 
        bg-slate-700 px-2 py-4 rounded-lg  border-t-[20px] border-4 border-slate-200 
        shadow-lg shadow-black
        grid grid-cols-[32px_minmax(400px,_1fr)_100px] gap-0 relative">
            <div className="absolute flex gap-1 -top-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex flex-col w-4 text-sky-400">
                <p>
                    1.
                </p>
                <p>
                    2.
                </p>
                <p>
                    3.
                </p>
                <p>
                    4.
                </p>
                <p>
                    5.
                </p>
                <p>
                    6.
                </p>

            </div>
            <div>
                <p className="text-fuchsia-400">&lt;div&gt; </p>
                <div className="text-lime-300 pl-4">
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
                </div>
                <p className="text-fuchsia-400">&lt;/div&gt; </p>
            </div>
        </div>
    )
}