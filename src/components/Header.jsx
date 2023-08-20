import React from 'react'
import logoImage from '../assets/name.svg'
import homeIcon from '../assets/home-icon.png'
import aboutIcon from '../assets/about-icon.png'
import projectIcon from '../assets/project-icon.png'
import resumeIcon from '../assets/resume-icon.png'
import githubIcon from '../assets/github-icon.png'
import githubCat from '../assets/github-cat.png'
import { Link } from 'react-router-dom'

import Icon from './Icon'

function Header() {
    return (
        <div className=" relative bg-violet-900 bg-opacity-10 h-full w-full flex items-center justify-around space-x-80">
            <img src={logoImage} alt="Name" className="h-16 w-30 object-cover mr-10 ml-5" />
            <nav className="flex space-x-10 text-lg">
                <Icon name="Home" icon={homeIcon} path="/" />
                <Icon name="About" icon={aboutIcon} path="/about" />
                <Icon name="Projects" icon={projectIcon} path="/projects" />
                <Icon name="Resume" icon={resumeIcon} path="/resume" />
                <a
                    href="https://github.com/Faqu22/Faqu22-Portfolio"
                    role="link"
                    className="flex items-center border-b-4 rounded-3xl py-1 px-2 border-transparent hover:border-blue-500 transition duration-300"
                >
                    <img src={githubIcon} alt="Github Icon" className="h-6 pr-3 pl-3" />
                    <img src={githubCat} alt="Github Cat" className="h-6 pr-3" />
                </a>
            </nav>
        </div>
    )
}

export default Header
