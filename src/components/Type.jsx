import React from 'react'
import Typewriter from 'typewriter-effect'

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    'Software Developer',
                    'Backend Developer',
                    'Effective Communicator',
                    'Soft Skills Maven',
                    'CRUD Operations Knowledgeable',
                    'Backend problem solver',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    )
}

export default Type
