import React from "react";

const ArticleHeader = ({title, date}) => {
    return (
        <header className="text-left">
            <h3 className="text-emerald-950 text-sm pt-5 border-b border-emerald-800">{date}</h3>
            <h2 className="text-center text-emerald-800 text-2xl md:text-4xl font-semibold py-9">{title}</h2>
        </header>
    )
};

export default ArticleHeader;

