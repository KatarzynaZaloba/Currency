import React from 'react';
import "./style.css";
import Image from "../../../images/Rectangle 38.png";
import Logo from "../../../images/kate.jpg";

const OneArticleCard = ({picture, tag, title, avatar, authorName, date}) => {
    return (
        <>
            <div className="border-2 rounded-md m-2">
                <img src={Image} className="p-2"/>
                <div className="py-2 px-4 text-left">
                <span className="my-2 text-work-sans rounded-md bg-blue-100 text-indigo-500 text-sm p-1 font-medium">
                    Technology
                </span>
                <h3 className="mb-1 mt-2 text-work-sans font-semibold text-2xl">The Impact of Technology on the Workplace: How Technology is Changing</h3>
                </div>
                <div className="px-4 pb-4 flex items-center">
                    <img src={Logo} className="rounded-full w-[36px] mr-2" alt="logo"/>
                    <p className="text-xs text-zinc-700 font-medium mr-2">Katarzyna Żałoba</p>
                    <p className="text-xs text-zinc-700">9 września 2023 roku</p>
                </div>
            </div>
        </>
    )
}

export default OneArticleCard