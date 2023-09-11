import React from "react";
import "./style.css";
import SectionTitle from "../../atoms/SectionTitle";

const Section = ({title, body, extraHeaderContent}) => {
    return (
        <section className="">
            <SectionTitle title={title}/>
            {extraHeaderContent}
            {body}
        </section>
    )
};

export default Section;