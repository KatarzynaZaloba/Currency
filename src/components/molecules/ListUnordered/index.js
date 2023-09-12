import React from 'react';

const ListUnordered = ({children}) => {
    return (
        <ul className="list-disc marker:text-zinc-400 leading-8 text-left ml-2.5 py-6">
            {children}
        </ul>
    );
};

export default ListUnordered;