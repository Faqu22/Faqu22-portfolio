import './App.css';
import Header from "./components/Header";
import Footer from './components/Footer';
import Loader from './components/Loader';
import React, { useState, useEffect, useCallback } from 'react';
import { Particles } from "react-tsparticles";
import particlesOptions from "./particles.json";
import { loadFull } from "tsparticles";

export default function Layout(props) {
    const [loading, setLoading] = useState(true);
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])
    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }, []);
  
    return (
        <div className="section pt-0 min-h-screen">
            {loading && <Loader />}
            <Particles options={particlesOptions} init={particlesInit}/>
            <Header />
            { props.children }
            <Footer />
        </div>
    )
  }