import React from 'react';
import "./style.css";

const Figcaption = ({ children }) => {
    return (
        <figcaption className="article__figcaption">
            {children}
        </figcaption>
    )
}

export default Figcaption;