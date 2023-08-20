import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Button from "./Button";
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
                    <Button text="Github" actionType="navigate" target={props.ghLink} Image={BsGithub} />
                    <br />
                    {props.demoLink && (
                        <Button text="View" actionType="navigate" target={props.demoLink} Image={CgWebsite}/>
                        ) 
                    }
                </div>
            </div>
    </div>
  );
}
export default Work;
