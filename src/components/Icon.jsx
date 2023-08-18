import React from "react";


function Icon(props) {
    return (
        <button role="link" className="flex items-center  border-b-4 rounded-3xl py-1 px-2 border-transparent hover:border-blue-500 transition duration-300 text-neutral-50">
                    <img src={props.icon} alt="Home Icon" className="h-6 mr-3" />
                    {props.name}
        </button>
    )
}

export default Icon;