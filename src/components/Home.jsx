import React from "react";
import Man from '../assets/man-programmed.png';
import Type from "./Type";
import Bg from '../assets/bg.jpg';
import Self from '../assets/Facundo.jpg';

function Home() {
    return (
        <div className="bg-image relative">
            <img src={Bg} className="absolute opacity-20"></img>
            <div className="flex justify-around pt-28 items-center ">
                <div className="text-left ml-24 mb-32">
                    <h1 className="mb-6 relative">
                        Hi There!
                    </h1>
                    <h1 >
                        I'm
                        <strong className="text-pink-700 relative"> Facundo Alvarez</strong>
                    </h1>
                    <div style={{ padding: 50, textAlign: "left", position: "relative"}}>
                        <Type />
                    </div>
                </div>
                <img src={Man} alt="Image of developer" className="max-h-96 relative"/>
            </div>
            <div className="flex pt-28 items-start justify-evenly h-screen mt-20">
                <div className="text-left ml-24 mb-32 max-w-xl">
                    <h1 className="text-4xl font-bold mb-6">
                        LET ME INTRODUCE MYSELF
                    </h1>
                    <p className="text-lg mb-4">
                        I am a developer with a deep passion for backend technologies. 
                    </p>
                    <p className="text-lg mb-6">
                        In addition, I am always willing to collaborate, actively listen, and adapt to achieve effective team solutions.
                    </p>
                    <h2 className="text-xl mb-4">
                        Fluent in Python, C, and JavaScript, I have honed my technical toolset with tools like Docker, Postman, and frameworks like Django-Ninja and Flask. 
                        Beyond my technical prowess, I pride myself on my teamwork, adaptability, and problem-solving skills. 
                    </h2>
                    <h2 className="text-xl ">
                        In this constantly evolving technology landscape, I am constantly looking for the next challenge to overcome, both technically and interpersonally.
                    </h2>
                </div>
                    <img src={Self} alt="photo"  className="max-h-96 relative"/>
            </div>
        </div>
    )
}

export default Home