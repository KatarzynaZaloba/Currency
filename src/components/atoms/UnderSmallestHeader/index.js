import React from 'react';

const UnderSmallestHeader = ({children}) => {
    return (
        <h5 className="text-work-sans md:text-xl text-lg font-semibold md:leading-7 leading-6 md:mb-7 mb-4">
            {children}
        </h5>
    )

}

export default UnderSmallestHeader;