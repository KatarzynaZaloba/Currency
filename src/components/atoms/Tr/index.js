import React from 'react';
import './style.css';

const Tr = ({children}) => {
    return (
        <tr className="article__tr">
            {children}
        </tr>
    )
};

export default Tr;