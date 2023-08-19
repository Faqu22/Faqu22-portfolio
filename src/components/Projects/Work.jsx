import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function Work(props) {
  return (
    <div className="project-card-view flex flex-col items-center">
            <img src={props.imgPath} alt="card-img" className="h-32 mt-6 "/>
            <div className="flex-col items-center">
                <p className="text-2xl mt-2"> <strong>{props.title}</strong></p>
                <p className="text-justify px-3">
                  {props.description}
                </p>
                <br />
                <div className="flex justify-center space-x-6 ">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold pt-1 px-3 my-4 rounded flex">
                        <a href={props.ghLink} target="_blank" rel="noopener noreferrer" className="no-underline text-white">
                            <BsGithub /> GitHub
                        </a>
                    </button>
                    <br />
                    {props.demoLink && (
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 my-4 rounded">
                            <a href={props.demoLink} target="_blank" rel="noopener noreferrer" className="no-underline text-white">
                            <CgWebsite />Click Me
                            </a>
                        </button>
                        ) 
                    }
                </div>
            </div>
    </div>
  );
}
export default Work;
