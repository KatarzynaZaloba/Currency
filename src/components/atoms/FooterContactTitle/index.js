import React from "react";
import "./style.css";

const FooterContactTitle = ({title}) => {
    return (
        <p className="leading-6 text-base font-semibold footerContactTitle">
            {title}
        </p>
    )
}

export default FooterContactTitle;