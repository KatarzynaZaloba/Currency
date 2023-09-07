import React from 'react';
import "./style.css";

const Comment = ({ text }) => {
    return (
        <span className="article__blockquoteComment">{text}</span>
    )
}

export default Comment;