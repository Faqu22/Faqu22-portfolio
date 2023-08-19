import React from "react";
import {
    TbHexagonLetterC
} from "react-icons/tb"
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
  DiMysql,
  DiDjango,
  DiHtml5,
  DiCss3
} from "react-icons/di";
import {
    SiThreedotjs
} from "react-icons/si"
import {
    BiLogoFlask,
    BiLogoTailwindCss
} from "react-icons/bi";

function Tech() {
  return (
    <ul className="flex flex-wrap justify-center pb-12">
      <li className=" flex-row tech-icons  w-9/50">
        <DiPython />
        <span className="text-base">Python</span>

      </li>
      <li className="tech-icons  w-9/50">
        <DiDjango /> 
        <span className="text-base">Django</span>
      </li>
      <li className="flex tech-icons  w-9/50">
        <BiLogoFlask /> 
        <span className="text-base">Flask</span>
      </li>
      <li className="tech-icons  w-9/50">
        <DiMysql />
        <span className="text-base">MySQL</span>
      </li>
      <li className="tech-icons w-9/50">
        <DiJavascript1 />
        <span className="text-base">JavaScript</span>
      </li>
      <li className="tech-icons w-9/50">
        <DiReact />
        <span className="text-base">React Js</span>
      </li>
      <li className="tech-icons w-9/50">
        <SiThreedotjs />
        <span className="text-base">Three Js</span>
      </li>
      <li className="tech-icons w-9/50">
        <TbHexagonLetterC />
        <span className="text-base">C Language</span>
      </li>
      <li className="tech-icons  w-9/50">
        <DiGit />
        <span className="text-base">Git</span>
      </li>
      <li className="tech-icons  w-9/50">
        <DiHtml5 />
        <span className="text-base">HTML</span>
      </li>
      <li className="tech-icons w-9/50">
        <DiCss3 />
        <span className="text-base">CSS</span>
      </li>
      <li className="tech-icons w-9/50">
        <BiLogoTailwindCss />
        <span className="text-base">Tailwind</span>
      </li>
    </ul>
  );
}

export default Tech;
