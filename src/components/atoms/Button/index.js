import React from 'react';
import './style.css';

const Button = ({ text, onClick }) => {
    return (
        <>
            <button onClick={onClick} className="transition duration-300 ease-in-out hover:scale-110 border-2 text-work-sans rounded-md text-zinc-700 text-base font-medium p-2 text-center w-48 leading-6 active:text-indigo-400 visited:text-indigo-900">
                {text}
            </button>
        </>
    )

}

export default Button;
