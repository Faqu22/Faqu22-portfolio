import React from 'react'
import { CgWebsite } from 'react-icons/cg'
import { BsGithub } from 'react-icons/bs'
import Button from './Button'

function Work(props) {
    return (
        <div className="project-card-view flex flex-col items-center relative">
            <img src={props.imgPath} alt="card-img" className="h-32 mt-6 " />
            <div className="flex-col items-center">
                <p className="text-2xl mt-2">
                    {' '}
                    <strong>{props.title}</strong>
                </p>
                <p className="text-justify px-3 text-slate-200 h-60 overflow-hidden text-ellipsis">
                    {props.description}
                </p>
                <h3 className="px-3 pt-3 text-white text-lg font-medium">Technologies:</h3>
                <p className="px-3 text-slate-200">{props.technologies}</p>
                <h3 className="pt-3 text-white text-lg font-medium">Status:</h3>
                <span
                    className={`text-justify pb-7 px-3 text-slate-200 text-base ${
                        props.status === 1 ? 'text-green-500' : 'text-yellow-300'
                    }`}
                >
                    {props.status === 0 ? 'In Process' : 'Finished'}
                </span>
                <div className="flex justify-center space-x-6 w-full bottom-2 absolute">
                    <Button
                        text="Github"
                        actionType="navigate"
                        target={props.ghLink}
                        Image={BsGithub}
                    />
                    <br />
                    {props.demoLink && (
                        <Button
                            text="View"
                            actionType="navigate"
                            target={props.demoLink}
                            Image={CgWebsite}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}
export default Work
