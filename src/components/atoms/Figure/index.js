import React from 'react';

const Figure = ({ children }) => {
    return (
        <div className="flex justify-center bg-emerald-50 py-4 m-4">
        <figure className="m-auto text-center w-1/1 md:w-1/2 p-4">
            {children}
        </figure>
        </div>
    )
}

export default Figure;
