import React from "react";
import "./style.css";
import homePageHeader from "../../../images/homePageHeader.png";
import Logo from "../../../images/kate.jpg";

const HomePageHeader = ({newestArticle}) => {
    return (
        <div className="mb-4 relative">
            <img src={homePageHeader} className="" alt="logo"/>
            <div className="bg-white max-w-[518px] absolute rounded-lg -bottom-10 left-10 p-8 z-10 drop-shadow-2xl">
                {/*<span className="homePageTitle bg-blue-700 text-white text-sm py-0 px-1 rounded-md justify-center">Technology</span>*/}
                <h2 className="homePageTitle hover:animate-bounce text-3xl font-semibold leading-10 ease-in duration-300 hover:text-indigo-500 active:text-indigo-400 visited:text-indigo-900">{newestArticle.title}</h2>
                <div className="flex justify-start items-center">
                    <img src={Logo} className="rounded-full w-[36px] mr-2" alt="logo"/>
                    <p className="text-xs text-zinc-700 font-medium mr-2 text-work-sans p-0">Katarzyna Żałoba</p>
                    <p className="text-xs text-zinc-700 text-work-sans p-0">{newestArticle.date}</p>
                </div>
            </div>
        </div>
    )
}


export default HomePageHeader;