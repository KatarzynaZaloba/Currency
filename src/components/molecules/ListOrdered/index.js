import React from 'react';
import './style.css';

const ListOrdered = ({ children }) => {
    return (
        <ol className="list-decimal">
            {children}
        </ol>
    )
};

export default ListOrdered;
