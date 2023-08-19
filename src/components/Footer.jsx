import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Footer() {  
  return (
    <div className="footer flex justify-evenly items-center bg-black bg-opacity-50 text-white p-6 fixed bottom-0 w-full space-x-4">
        <div className="footer-copywright left-6 absolute">
          <h3>Designed and Developed by Facundo Alvarez</h3>
        </div>
        <div className='flex items-center absolute right-6'>
        <a href="https://github.com/Faqu22" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-500 transition duration-300 mr-10">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/facundo-alvarez4/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-500 transition duration-300">
          <FaLinkedinIn />
        </a>
        </div>
    </div>
  );
}

export default Footer;