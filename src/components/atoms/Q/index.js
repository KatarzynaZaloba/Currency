import React from 'react';
import "./style.css";

const Q = ({ children }) => {
    return (
        <q className="article__quote">
            {children}
        </q>
    )
}

export default Q;