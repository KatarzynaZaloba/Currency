import React from 'react';
import './style.css';

const Table = ({children}) => {
    return (
        <table className="article__table">
            {children}
        </table>
    )
};

export default Table;