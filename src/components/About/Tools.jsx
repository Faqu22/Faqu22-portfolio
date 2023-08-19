import React from "react";

import {
    BiLogoDocker,
} from "react-icons/bi";
import {
    SiPostman,
    SiNotion,
    SiSlack
} from "react-icons/si";

import {
    TbBrandVscode
} from "react-icons/tb";

function Tools() {
  return (
    <ul className="flex flex-wrap justify-center pb-12">
      <li className=" flex-row tech-icons  w-9/50">
        <BiLogoDocker />
        <span className="text-base">Docker</span>
      </li>
      <li className=" flex-row tech-icons  w-9/50">
        <SiPostman />
        <span className="text-base">Postman</span>
      </li>
      <li className="flex-row tech-icons w-9/50">
      <SiNotion />
      <span className="text-base">Notion</span>
      </li>
      <li className="flex-row tech-icons w-9/50">
      <TbBrandVscode />
      <span className="text-base">Vscode</span>
      </li>
      <li className="flex-row tech-icons w-9/50">
      <SiSlack />
      <span className="text-base">Slack</span>
      </li>
    </ul>
  );
}

export default Tools;
