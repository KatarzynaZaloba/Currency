import React from 'react';
import './style.css';

const ListItem = ({children}) => {
    return (
        <li className="article__listItem">
            {children}
        </li>
    );
};

export default ListItem;