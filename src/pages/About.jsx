import React from "react";
import Self from '../assets/Facundo.jpg';
import Card from '../components/Card'
import Tech from "../components/Tech";
import Tools from "../components/Tools";
import Layout from '../layout.jsx'

function About() {
    return (
        <Layout>
            <div>
                <div className="flex relative overflow-hidden justify-center">
                    <div className="relative justify-center pt-14 pb-12">
                        <h1 className="pb-2 text-5xl">
                            Meet <strong className="text-pink-700">ME</strong>
                        </h1>
                        <div className="mr-10">
                            <Card />
                        </div>
                    </div>
                    <div className="flex pt-28  h-screen relative">
                        <img src={Self} alt="photo"  className="max-h-96 relative"/>
                    </div>
                </div>
                <div className="relative">
                    <h1 className=" relative text-white text-4xl font-normal pt-3">
                    Professional <strong className="text-pink-700">Skillset </strong>
                    </h1>
                    <br />
                    <br />
                    <Tech />
                </div>
                <div className="relative">
                    <h1 className=" text-white text-4xl font-normal pt-3">
                        <strong className="text-pink-700">Tools </strong> | Use
                    </h1>
                    <Tools />
                </div>

            </div>
        </Layout>
    )
}

export default About