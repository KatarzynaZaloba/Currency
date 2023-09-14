import React from 'react';

const SmallestHeader = ({ children }) => {
    return (
        <h4 className="text-work-sans md:text-2xl text-xl font-semibold md:leading-7 leading-6 md:mb-7 mb-4">{children}</h4>
    );
};

export default SmallestHeader;