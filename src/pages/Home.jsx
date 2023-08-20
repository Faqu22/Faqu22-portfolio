import React, { useCallback } from 'react'
import Man from '../assets/man-programmed.png'
import Type from '../components/Type'
import Layout from '../layout'

function Home() {
    return (
        <Layout>
            <div className="relative overflow-hidden">
                <div className="flex justify-around pt-28 items-center ">
                    <div className="text-left ml-24 mb-32">
                        <h1 className="mb-6 relative">Hi There!</h1>
                        <h1 className="relative">
                            I'm
                            <strong className="text-pink-700"> Facundo Alvarez</strong>
                        </h1>
                        <div className="text-2xl font-semibold relative p-10  px-1">
                            <Type />
                        </div>
                    </div>
                    <img src={Man} alt="Image of developer" className="max-h-96 relative" />
                </div>
            </div>
        </Layout>
    )
}

export default Home
