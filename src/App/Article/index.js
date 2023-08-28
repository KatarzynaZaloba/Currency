import React from "react";
import "./style.css";

const Article = ({title, date, body}) => {

    return (
        <article className="article">
            <header className="article__header">
                <h3 className="article__subsubheader">{date}</h3>
                <h2 className="article__subheader">{title}</h2>
            </header>
            {body}
        </article>
    )
};

export default Article;