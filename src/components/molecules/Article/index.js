import React from "react";
import ArticleHeader from "../../atoms/ArticleHeader";

const Article = ({date, title, body}) => {

    return (
        <article className="pt-2 pb-6 m-auto">
            <ArticleHeader
                date={date}
                title={title}
            />
            {body}
        </article>
    )
};

export default Article;