import React from 'react';
import "./style.css";

const ArticleCard = ({props}) => {
    return (
        <>
            <div className="articleCard__Container">
                <div>kategoria posta</div>
                <div>Tytuł posta</div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium adipisci aliquam Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium adipisci aliquam
                </div>
                <div>data posta</div>
            </div>
        </>
    )
}

export default ArticleCard;