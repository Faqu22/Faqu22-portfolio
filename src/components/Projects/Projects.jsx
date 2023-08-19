import React from "react";
import Work from './Work';
import Fixermate from '../../assets/fixermate.png';
import Gieben from '../../assets/gieben.png';
import Portfolio from '../../assets/name.svg'
function Projects() {
    const projectData = [
        {
            imgPath: Fixermate,
            title: "Fixermate",
            description: "FixerMate is an intuitive web application tailored for technicians and businesses in the mobile repair sector. Developed of Django-Ninja and the interactivity of ReactJS, it streamlines the management of device repairs, customer data, and even has a marketplace for spare parts. Real-time updates, efficient inventory management, and user-friendly interfaces make it an indispensable tool in the repair industry. In Process...",
            ghLink: "https://github.com/TechWave-Organization/fixermate-backend"
        },
        {
            imgPath: Gieben,
            title: "Gieben",
            description: "Step into the world of digital sculpting with my unique landing page dedicated to plaster sculptures. Harnessing the power of Three.js, I've recreated 3D models that not only exhibit the beauty of the art form but also provide an interactive experience. Dive in and customize sections of the body, tweaking and tailoring as you see fit, offering a blend of traditional artistry and modern technology.",
            ghLink: "https://github.com/Faqu22/Gieben",
            demoLink: "https://google.com"
        },
        {
            imgPath: Portfolio,
            title: "Portfolio",
            description: "Dive into my portfolio to witness a blend of technical expertise and creativity. From robust backend solutions to  frontend designs, explore projects that mirror my passion for coding. Whether you're seeking collaboration or just curious, you're bound to find something that resonates.",
            ghLink: "https://github.com/Faqu22/Faqu22-portfolio",
            demoLink: "/"
        }
    ];

    return (
        <div className="relative pt-20 pb-8">
            <div>
                <h1 className="pb-2 text-5xl font-normal">
                    My <strong className="text-pink-600">Works</strong>
                </h1>
                <span className="text-2xl">Browse a selection of my latest <strong>projects.</strong></span>
            </div>
            <div className="flex justify-center">
                {projectData.map((project, index) => (
                    <div className="project-card flex w-1/3 h-auto" key={index}>
                        <Work 
                            imgPath={project.imgPath}
                            title={project.title}
                            description={project.description}
                            ghLink={project.ghLink}
                            demoLink={project.demoLink}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
