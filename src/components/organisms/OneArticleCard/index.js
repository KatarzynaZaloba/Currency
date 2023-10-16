import React from 'react';
import "./style.css";
import Image from "../../../images/React.jpeg";
import Date from "../../atoms/Date";
import TagBadge from "../../atoms/TagBadge";

const OneArticleCard = ({picture, tag, title, avatar, authorName, date, onLoad}) => {

    const tags = tag ? tag.split(", ").map(tag => tag.trim()) : [];

    return (
        <>
            <div
                className="min-h-fit overflow-hidden border-2 rounded-md m-2 transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30">
                <div className="p-2 rounded-md">

                    <img src={picture ? picture : Image}
                         alt={title}
                         className="object-fill rounded-md aspect-[5/3]"
                    />
                </div>
                <div className="py-2 px-4 text-left justify-center">
                    {tags && (
                        tags.map((tag, index) => (
                            <TagBadge tag={tag} key={index}/>
                        ))
                    )}
                    <h3 className="mb-1 mt-2 text-work-sans font-semibold text-xl">{title}</h3>
                </div>
                <div className="px-4 pb-4 flex justify-start items-end">
                    <Date date={date}/>
                </div>
            </div>
        </>
    )
}

export default OneArticleCard;
