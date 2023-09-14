import React from 'react';

const ListItem = ({children}) => {
    return (
        <li className="ml-4 items-stretch m-0 p-0">
            {children}
        </li>
    );
};

export default ListItem;