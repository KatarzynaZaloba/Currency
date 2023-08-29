import React from 'react';
import './style.css';

const Blockquote = ({children}) => {
    return (
        <blockquote className="article__blockquote">
            {children}
        </blockquote>
    );
};

export default Blockquote;