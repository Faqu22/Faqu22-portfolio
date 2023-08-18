import React from "react";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {  
  return (
    <div className="footer  flex justify-center align-sub bg-black">
      <div>
      </div>
      <div>
        <a href="https://github.com/Faqu22" target="_blank" rel="noopener noreferrer">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/facundo-alvarez4/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
}

export default Footer;