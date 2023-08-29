import React from 'react';
import './style.css';

const Thead = ({children}) => {
    return (
        <thead className="article__thead">
        {children}
        </thead>
    )
};

export default Thead;