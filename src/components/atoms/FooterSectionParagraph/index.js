import React from "react";
import "./style.css";

const FooterSectionParagraph = ({text}) => {
    return (
        <>
            <p className="footerSectionUndertitle text-sm text-zinc-700 font-normal leading-7">{text}</p>
        </>
    )
}

export default FooterSectionParagraph;