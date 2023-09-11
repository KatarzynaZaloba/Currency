import React from 'react';
import "./style.css";

const SectionTitle = ({ title }) => {
    return (
        <h3 className="mt-16 mb-4 text-2xl font-bold text-zinc-800 leading-7">{title}</h3>
    )
}

export default SectionTitle;