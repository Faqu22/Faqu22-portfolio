import React from 'react'
import { ImPointRight } from 'react-icons/im'

function Card() {
    return (
        <div className="quote-card-view">
            <blockquote className="blockquote mb-0 text-xl">
                <p className="text-justify">
                    Hello there! I'm <span className="text-pink-700">Facundo Alvarez </span>
                    from <span className="text-pink-700"> Uruguay.</span>
                    <br />
                    I am a developer with a deep passion for Backend technologies.
                    <br />
                    In addition, I am always willing to collaborate, actively listen,
                    <br />
                    and adapt to achieve effective team solutions.
                    <br />
                    <br />
                    Apart from coding, some other activities that I love to do!
                </p>
                <ul className="pl-8 mt-2">
                    <li className="flex list-none text-left p-px">
                        <ImPointRight /> Playing Games
                    </li>
                    <li className="flex list-none text-left p-px">
                        <ImPointRight /> Riding a bicycle
                    </li>
                    <li className="flex list-none text-left p-px">
                        <ImPointRight /> Listen music
                    </li>
                </ul>
                <br />
                <br />
                <p style={{ color: 'rgb(155 126 172)' }}>
                    "First, solve the problem. Then, write the code."{' '}
                </p>
                <footer style={{ color: 'rgb(155 126 172)' }} className="blockquote-footer">
                    -John Johnson
                </footer>
            </blockquote>
        </div>
    )
}

export default Card
