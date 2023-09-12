import React from 'react';
import './index.css';

const NavBarTitle = ({ title }) => {
    return (
        <div className="hover:animate-bounce text-work-sans text-base font-normal leading-6 text-">
            {title}
        </div>
    )
}

export default NavBarTitle;