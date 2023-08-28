import React from "react";
import "./style.css";
import ArticleHeader from "../../atoms/ArticleHeader";

const Article = ({date, title, body}) => {

    return (
        <article>
            <ArticleHeader
                date={date}
                title={title}
            />
            {body}
        </article>
    )
};

export default Article;