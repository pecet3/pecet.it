"use client";
import Typewriter from "typewriter-effect";
import { AppleWindow } from "../AppleWindow";

export const CodeBlock = () => {
  const rangeArray = Array.from({ length: 15 }, (_, index) => index + 1);

  return (
    <AppleWindow>
      <div className="flex gap-2 w-[64vh]">
        <div className="flex flex-col w-4 text-sky-400 text-xl text-right">
          {rangeArray.map((v) => (
            <p className="text-right w-full" key={v}>
              {v}.
            </p>
          ))}
        </div>
        <div className="text-xl ml-4">
          <HTMLelement element="html" lang="pl">
            <HTMLelement element="head">
              <p className="text-fuchsia-400">
                &lt;meta
                <b className="text-teal-400">
                  {" "}
                  charset
                  <b className="text-amber-400">=</b>
                  <b className="text-red-400">&quot;utf-8&quot;</b>
                </b>
                &gt;
              </p>
              <HTMLelement element="title">Twoja wymarzona strona</HTMLelement>
            </HTMLelement>
            <HTMLelement element="body">
              <HTMLelement element="div" classes="container">
                <Typewriter
                  options={{
                    strings: `
                     Hej, jesteśmy pecet.it!<br>
                    chętnie wykonamy dla Ciebie <br>
                    piękną stronę internetową!`,
                    autoStart: true,
                    delay: 0,
                  }}
                />
              </HTMLelement>
            </HTMLelement>
          </HTMLelement>
        </div>
      </div>
    </AppleWindow>
  );
};

interface HTMLelementProps {
  element: string;
  classes?: string;
  lang?: string;
  children?: React.ReactNode;
  color?: string;
}

const HTMLelement: React.FC<HTMLelementProps> = ({
  element,
  classes,
  lang,
  color = "fuchsia-400",
  children,
}) => {
  return (
    <div>
      <p className={`text-${color}`}>
        &lt;{element}
        {classes ? (
          <b className="text-teal-400">
            {" "}
            class
            <b className="text-amber-400">=</b>
            <b className="text-red-400">&quot;{classes}&quot;</b>
          </b>
        ) : null}
        {lang ? (
          <b className="text-teal-400">
            {" "}
            lang
            <b className="text-amber-400">=</b>
            <b className="text-red-400">&quot;{lang}&quot;</b>
          </b>
        ) : null}
        &gt;
      </p>
      <div className="pl-6 text-white font-extrabold"> {children}</div>
      <p className={`text-${color}`}>&lt;/{element}&gt;</p>
    </div>
  );
};
