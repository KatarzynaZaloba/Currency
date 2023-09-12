import React from 'react';

const ListItem = ({children}) => {
    return (
        <li className="ml-4 items-stretch">
            {children}
        </li>
    );
};

export default ListItem;