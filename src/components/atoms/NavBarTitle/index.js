import React from 'react';
import './index.css';

const NavBarTitle = ({ title }) => {
    return (
        <div className="transition duration-300 ease-in-out hover:scale-110 text-work-sans text-base font-normal leading-6">
            {title}
        </div>
    )
}

export default NavBarTitle;