import React from 'react';

const Button = ({ text, actionType, target, Image }) => {
    const handleClick = () => {
        if (actionType === 'navigate') {
          window.location.href = target;
        } else if (actionType === 'download') {
          window.open(target, '_blank');
        }
    }

    return (
        <button className="bg-transparent flex items-center border-2 border-gradient-to-r font-medium from-purple-700 to-red-500 text-pink-700 px-6 py-2 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-purple-950 hover:to-blue-950 hover:text-pink-400 hover:font-semibold" 
        onClick={handleClick}>
         {Image && <Image className="h-3 w-auto mr-2" />}
          {text}
        </button>
      );
};

export default Button;