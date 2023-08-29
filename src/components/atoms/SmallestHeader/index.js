import React from 'react';
import './style.css';

const SmallestHeader = ({ children }) => {
    return (
        <h4 className="article__subsubsubheader">{children}</h4>
    );
};

export default SmallestHeader;