import './App.css';
import Header from "./components/Header";
import Footer from './components/Footer';
import Loader from './components/Loader';
import React, { useState, useEffect } from 'react';
import { tsParticles } from "tsparticles";
import particlesOptions from "./particles.json";

export default function Layout(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        tsParticles.load("tsparticles", particlesOptions);

        setTimeout(() => {
            setLoading(false);
        }, 500);

        // Limpiar las partículas cuando el componente se desmonte
        return () => {
            tsParticles.domItem(0)?.destroy();
        };
    }, []);

    return (
        <div className="section pt-0 min-h-screen">
            {loading && <Loader />}
            <div id="tsparticles" style={{ position: "absolute", width: "100%", height: "100%" }}></div>
            <Header />
            { props.children }
            <Footer />
        </div>
    );
}
