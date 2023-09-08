import React from 'react';

const Figcaption = ({ children }) => {
    return (
        <figcaption className="py-2 text-sm">
            {children}
        </figcaption>
    )
}

export default Figcaption;