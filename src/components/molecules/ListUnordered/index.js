import React from 'react';

const ListUnordered = ({children}) => {
    return (
        <ul className="list-disc marker:text-zinc-400 md:leading-8 md-leading-6 text-left ml-2.5 mt-0 mb-5">
            {children}
        </ul>
    );
};

export default ListUnordered;