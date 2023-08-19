import React from "react";
import Man from '../assets/man-programmed.png';
import Type from "./Type";
import Bg from '../assets/bg.jpg';

function Home() {
    return (
        <div className=" relative overflow-hidden">
            <img src={Bg} className="absolute opacity-20 "></img>
            <div className="flex justify-around pt-28 items-center ">
                <div className="text-left ml-24 mb-32">
                    <h1 className="mb-6 relative">
                        Hi There!
                    </h1>
                    <h1 >
                        I'm
                        <strong className="text-pink-700 relative"> Facundo Alvarez</strong>
                    </h1>
                    <div className="text-2xl font-semibold relative p-10  px-1">
                        <Type />
                    </div>
                </div>
                <img src={Man} alt="Image of developer" className="max-h-96 relative"/>
            </div>
        </div>
    )
}

export default Home