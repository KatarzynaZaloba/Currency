import React from 'react';
import './style.css';

const Container = ({ children }) => {
    return (
        <div className="max-w-fit m-auto px-5 md:px-20 lg:px-40 md:pb-10 pb-5">
            {children}
        </div>
    )
}

export default Container;