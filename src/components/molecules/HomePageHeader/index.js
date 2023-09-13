import React from "react";
import "./style.css";
import homePageHeader from "../../../images/homePageHeader.png";
import Logo from "../../../images/kate.jpg";

const HomePageHeader = ({newestArticle}) => {
    return (
        <div className="mb-4 relative">
            <img src={homePageHeader} className="rounded-md" alt="logo"/>
            <div className="bg-white md:max-w-[518px] max-w-auto absolute rounded-lg -bottom-10 md:left-10 left-5 md:p-8 p-4 z-10 drop-shadow-xl transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30">
                {/*<span className="homePageTitle bg-blue-700 text-white text-sm py-0 px-1 rounded-md justify-center">Technology</span>*/}
                <h2 className="homePageTitle hover:animate-pulse md:text-3xl text-xl font-semibold md:leading-10 leading-relaxed ease-in duration-300 hover:text-indigo-500 active:text-indigo-400 visited:text-indigo-900">{newestArticle.title}</h2>
                <div className="flex justify-start items-center">
                    <img src={Logo} className="rounded-full md:w-[36px] mr-2 md:inline hidden" alt="logo"/>
                    <p className="text-xs text-zinc-700 font-medium mr-2 text-work-sans p-0 md:inline hidden">Katarzyna Żałoba</p>
                    <p className="text-xs text-zinc-700 text-work-sans p-0">{newestArticle.date}</p>
                </div>
            </div>
        </div>
    )
}


export default HomePageHeader;