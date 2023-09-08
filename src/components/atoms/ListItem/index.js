import React from 'react';

const ListItem = ({children}) => {
    return (
        <li className="ml-4">
            {children}
        </li>
    );
};

export default ListItem;