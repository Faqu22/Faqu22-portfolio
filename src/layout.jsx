import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import React, { useState, useEffect, useCallback } from 'react'
import { Particles } from 'react-tsparticles'
import particlesOptions from './particles.json'
import { loadFull } from 'tsparticles'

export default function Layout(props) {
    const particlesInit = useCallback((main) => {
        loadFull(main)
    }, [])

    return (
        <div className="section pt-0 min-h-screen">
            <Particles options={particlesOptions} init={particlesInit} />
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}
