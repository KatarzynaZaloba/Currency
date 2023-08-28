import React from "react";
import "./style.css";

const Section = ({title, body, extraHeaderContent}) => {
    return (
        <section className="section aboutMe">
            <h2 className="section__subheader">{title}</h2>
            {extraHeaderContent}
            {body}
        </section>
    )
};

export default Section;