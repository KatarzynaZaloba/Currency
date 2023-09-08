import React from 'react';

const ListUnordered = ({children}) => {
    return (
        <ul className="list-disc marker:text-emerald-400 leading-8 p-1.5 text-left ml-2.5">
            {children}
        </ul>
    );
};

export default ListUnordered;