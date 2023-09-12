import React from 'react';
import './style.css';

const Button = ({ text, onClick }) => {
    return (
        <>
            <button onClick={onClick} className="border-2 text-work-sans rounded-md text-zinc-700 text-base font-medium p-2 text-center w-48 leading-6 ease-in duration-300 hover:text-indigo-500 active:text-indigo-400 visited:text-indigo-900 hover:animate-bounce">
                {text}
            </button>
        </>
    )

}

export default Button;
