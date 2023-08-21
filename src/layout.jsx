import './App.css'
import Loader from './components/Loader'
import React, { useState, useEffect, useCallback } from 'react'
import particlesOptions from './particles.json'
import { loadFull } from 'tsparticles'
import Loadable from 'react-loadable'

const AsyncHeader = Loadable({
    loader: () => import('./components/Header'),
    loading: Loader,
})
const AsyncChild = Loadable({
    loader: () => {
        props.children
    },
    loading: Loader,
})

const AsyncFooter = Loadable({
    loader: () => import('./components/Footer'),
    loading: Loader,
})

const AsyncParticles = Loadable({
    loader: () => import('react-tsparticles'),
    loading: Loader,
    render(loaded, props) {
        const Particles = loaded.Particles
        return <Particles options={particlesOptions} init={particlesInit} {...props} />
    },
})

export default function Layout(props) {
    const particlesInit = useCallback((main) => {
        loadFull(main)
    }, [])

    return (
        <div className="section pt-0 min-h-screen">
            <AsyncParticles />
            <AsyncHeader />
            <AsyncChild />
            <AsyncFooter />
        </div>
    )
}
