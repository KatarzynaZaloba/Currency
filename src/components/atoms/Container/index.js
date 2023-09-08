import React from 'react';
import './style.css';

const Container = ({ children }) => {
    return (
        <div className="max-w-4xl m-auto px-5 md:pb-10 pb-5">
            {children}
        </div>
    )
}

export default Container;