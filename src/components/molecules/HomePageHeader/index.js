import React from "react";
import "./style.css";
import Logo from "../../../images/kate.jpg";
import Date from "../../atoms/Date";
import AuthorName from "../../atoms/AuthorName";

const HomePageHeader = ({newestArticle}) => {

    const tags = newestArticle.tag.split(", ").map(tag => tag.trim());
    return (
        <div className="mb-4 relative">
            <img src={newestArticle.img} className="rounded-md" alt="logo"/>
            <div
                className="bg-white md:max-w-[518px] max-w-auto absolute rounded-lg -bottom-10 md:left-10 left-5 md:p-8 p-4 z-10 drop-shadow-xl transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30">
                {tags && (
                    tags.map((tag, index) => (

                        <span key={index}
                              className="homePageTitle inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mr-2">
                            {tag}
                        </span>
                    ))
                )}
                <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10 mr-1">New</span>
                <h2 className="homePageTitle md:text-3xl text-xl font-semibold leading-6 md:leading-9 ease-in duration-300 active:text-indigo-400 visited:text-indigo-900">{newestArticle.title}</h2>
                <div className="flex justify-start items-center">
                    <img src={Logo} className="rounded-full md:w-[36px] mr-2 md:inline hidden" alt="logo"/>
                    <AuthorName />
                    <Date date={newestArticle.date}/>
                </div>
            </div>
        </div>
    )
}


export default HomePageHeader;