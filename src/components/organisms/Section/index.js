import React from "react";
import "./style.css";

const Section = ({title, body, extraHeaderContent}) => {
    return (
        <section className="">
            <h2 className="text-center text-emerald-700 font-semibold text-2xl md:text-3xl pt-4 md:pt-6">{title}</h2>
            {extraHeaderContent}
            {body}
        </section>
    )
};

export default Section;