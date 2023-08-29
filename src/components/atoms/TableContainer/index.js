import React from 'react';
import './style.css';

const TableContainer = ({children}) => {
    return (
        <div className="div-table-overflow">
            {children}
        </div>
    )
};

export default TableContainer;