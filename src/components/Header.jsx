import React from "react";
import logoImage from '../assets/name.png';
import homeIcon from '../assets/home-icon.png';
import aboutIcon from '../assets/about-icon.png';
import projectIcon from '../assets/project-icon.png';
import resumeIcon from '../assets/resume-icon.png';
import githubIcon from '../assets/github-icon.png';
import githubCat from '../assets/github-cat.png';
import Icon from './Icon';

function Header() {
    return (
        <div className="h-full w-full flex items-center justify-around space-x-80">
            <a href="/">
                <img src={logoImage} alt="Name" className="h-16 w-30 object-cover mr-10 ml-5" />
            </a>
            <nav className="flex space-x-10 text-lg"> 
            <Icon name="Home" icon={homeIcon} />
            <Icon name="About" icon={aboutIcon} />
            <Icon name="Projects" icon={projectIcon} />
            <Icon name="Resume" icon={resumeIcon} />
                <button role="link" className="flex items-center border-b-4 rounded-3xl py-1 px-2 border-transparent hover:border-blue-500 transition duration-300">
                    <img src={githubIcon} alt="Github Icon" className="h-6 mr-3" />
                    <img src={githubCat} alt="Github Cat" className="h-6 mr-3" />
                </button>
            </nav>
        </div>
    )
}


export default Header;