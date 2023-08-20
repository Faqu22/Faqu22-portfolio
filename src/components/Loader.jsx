import React from 'react'
import AnimatedSVG from '../../src/assets/loader.svg'

function Loader() {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-indigo-950 z-50">
            <img src={AnimatedSVG} alt="Loading" className="w-40" />
        </div>
    )
}

export default Loader
