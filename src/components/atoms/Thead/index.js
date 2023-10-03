import React from 'react';
import './style.css';

const Thead = ({children}) => {
    return (
        <thead className="m-auto px-4 border-2 bg-slate-50">
        {children}
        </thead>
    )
};

export default Thead;