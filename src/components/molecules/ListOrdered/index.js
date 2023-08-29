import React from 'react';
import './style.css';

const ListOrdered = ({ children }) => {
    return (
        <ol className="article__orderedList">
            {children}
        </ol>
    )
};

export default ListOrdered;
