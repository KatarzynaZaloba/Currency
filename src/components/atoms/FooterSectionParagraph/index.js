import React from "react";
import "./style.css";

const FooterSectionParagraph = ({text}) => {
    return (
        <>
            <p className="footerSectionUndertitle text-sm text-zinc-700 font-normal leading-7 pb-0 pr-1">{text}</p>
        </>
    )
}

export default FooterSectionParagraph;