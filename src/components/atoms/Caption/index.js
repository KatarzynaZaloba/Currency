import React from 'react';
import "./style.css";

const Caption = ({ children }) => {
    return (
        <caption className="caption-bottom">
            {children}
        </caption>
    )
};

export default Caption;