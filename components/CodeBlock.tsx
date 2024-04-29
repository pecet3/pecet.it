import { PL } from '@/content/content';
import Typewriter from 'typewriter-effect';

export const CodeBlock = () => {
    return (
        // <div className="font-mono text-base sm:text-xl w-72 sm:w-96 pl-10
        //  bg-slate-600 p-4 rounded-lg  border-t-[16px] border-4 border-slate-400">
        //     <ul className='list-decimal'>
        //         <li className="text-black">
        //             <p className='text-fuchsia-500'>&lt;body&gt;</p>
        //         </li>
        //         <li className="text-black">
        //             <p className='text-lime-300'>
        //                 <Typewriter
        //                     options={{
        //                         strings: `Hej!, mam na imię Jakub`,
        //                         autoStart: true,
        //                         delay: 30,

        //                     }}
        //                 />
        //             </p>
        //         </li>
        //         <li className="text-black">
        //             <p className='text-fuchsia-500'>&lt;/body&gt;</p>
        //         </li>
        //     </ul>


        // </div>
        <div className="font-mono text-base sm:text-xl w-72 sm:w-96 
        bg-slate-600 p-4 rounded-lg  border-t-[16px] border-4 border-slate-400 
        grid grid-cols-[24px_minmax(300px,_1fr)_100px] gap-0">

            <div className="flex flex-col w-4">
                <p className='text-black'>
                    1.
                </p>
                <p className='text-black'>
                    2.
                </p>
                <p className='text-black'>
                    3.
                </p>
            </div>
            <Typewriter
                options={{
                    strings: `
                    <p class="text-fuchsia-400"> Hej!, mam na imię Jakub </p>
                    
                    `,
                    autoStart: true,
                    delay: 30,

                }}
            />
        </div>
    )
}