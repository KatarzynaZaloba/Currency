import React from 'react';
import './style.css';

const ListUnordered = ({children}) => {
    return (
        <ul className="article__unorderedList">
            {children}
        </ul>
    );
};

export default ListUnordered;