import React from 'react';
import './style.css';

const Table = ({children}) => {
    return (
        <table className="table-fixed mx-auto my-3 p-3 border-2 rounded">
            {children}
        </table>
    )
};

export default Table;