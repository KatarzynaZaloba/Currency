import React from 'react';
import './style.css';

const Th = ({children}) => {
    return (
        <th className="article__th">
            {children}
        </th>
    )
};

export default Th;
