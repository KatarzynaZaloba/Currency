import React from "react";
import "./style.css";

const ArticleHeader = ({title, date}) => {
    return (
        <header className="article__header">
            <h3 className="article__subsubheader">{date}</h3>
            <h2 className="article__subheader">{title}</h2>
        </header>
    )
};

export default ArticleHeader;

