import { PL } from '@/content/content';
import Typewriter from 'typewriter-effect';

export const LogoTyping = () => {
    return (
        <div className="font-mono text-4xl text-center">
            <Typewriter
                options={{
                    strings: PL.greetings,
                    autoStart: true,
                    delay: 60,

                }}
            />
        </div>
    )
}