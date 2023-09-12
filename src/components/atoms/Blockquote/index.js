import React from 'react';
import './style.css';

const Blockquote = ({children}) => {
    return (
        <blockquote
            className="bg-zinc-50 text-emerald-800 text-left p-2.5 m-auto article__blockquote break-all text-sm leading-6 font-normal max-w-4xl my-4">
            {children}
        </blockquote>
    );
};

export default Blockquote;