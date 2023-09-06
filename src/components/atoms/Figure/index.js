import React from 'react';
import "./style.css";

const Figure = ({ children }) => {
    return (
        <figure className="article__figure">
            {children}
        </figure>
    )
}

export default Figure;
