import React from 'react';
import './style.css';

const ListOrdered = ({ children }) => {
    return (
        <ol className="list-decimal marker:text-zinc-400 md:leading-8 md-leading-6 text-left ml-2.5 mt-0 mb-5">
            {children}
        </ol>
    )
};

export default ListOrdered;
