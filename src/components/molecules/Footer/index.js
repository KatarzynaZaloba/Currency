import React from "react";
import {Link} from "react-router-dom";
import "./style.css";
import FooterSectionTitle from "../../atoms/FooterSectionTitle";
import FooterSectionParagraph from "../../atoms/FooterSectionParagraph";
import FooterSectionUndertitle from "../../atoms/FooterSectionUndertitle";

const Footer = () => {
    return (
        <footer className="bg-zinc-100 m-auto px-5 md:pb-10 pb-5">
            <div className="max-w-fit m-auto px-5 md:px-20 lg:px-40 py-4 grid grid-cols-1 gap-1">
                <div className="col-auto">
                    <div className="break-words">
                        <FooterSectionTitle title="O projekcie"/>
                        <FooterSectionParagraph
                            text="Jest to blog, który powstawał na przełomie kilku miesięcy. Piszę w nim o bieganiu oraz powtarzam i utrwalam materiał dotyczący web-developmentu. Chętnie wspomogę Cię także w Twoim projekcie!"/>
                    </div>
                    <div className="flex justify-start items-center">
                        <Link to="" onClick={() => window.location = 'mailto:kzalobafrontend@gmail.com'}><FooterSectionTitle title="kzalobafrontend@gmail.com"/></Link>
                        {/*<FooterSectionTitle title="Phone: 880 123 456 789"/>*/}
                    </div>
                </div>
                {/*<div>*/}
                {/*    <FooterSectionTitle title="Quick Link"/>*/}
                {/*    <FooterSectionUndertitle title="Lifestyle"/>*/}
                {/*    <FooterSectionUndertitle title="Lifestyle"/>*/}
                {/*    <FooterSectionUndertitle title="Lifestyle"/>*/}
                {/*    <FooterSectionUndertitle title="Lifestyle"/>*/}
                {/*    <FooterSectionUndertitle title="Lifestyle"/>*/}
                {/*    <FooterSectionUndertitle title="Lifestyle"/>*/}

                {/*</div>*/}
                {/*<div>*/}
                {/*    <FooterSectionTitle title="Category"/>*/}
                {/*    <FooterSectionUndertitle title="Lifestyle"/>*/}
                {/*    <FooterSectionUndertitle title="Lifestyle"/>*/}
                {/*    <FooterSectionUndertitle title="Lifestyle"/>*/}
                {/*    <FooterSectionUndertitle title="Lifestyle"/>*/}
                {/*    <FooterSectionUndertitle title="Lifestyle"/>*/}
                {/*    <FooterSectionUndertitle title="Lifestyle"/>*/}
                {/*</div>*/}
            </div>
            <div className="max-w-fit m-auto px-5 md:px-20 md:pb-10 pb-5 flex justify-between items-center border-t-2 py-4">
                <div className="flex justify-start items-center">
                    <FooterSectionParagraph text="UI Design:"></FooterSectionParagraph>
                    <a href="https://www.jstemplate.net/" className="text-zinc-900 font-semibold hover:text-indigo-500 duration-30">JS Template</a>
                </div>
                {/*<div className="flex justify-end items-center">*/}
                {/*    <FooterSectionUndertitle title="Polityka prywatności"/>*/}
                {/*    <FooterSectionUndertitle title="Polityka ciasteczek"/>*/}
                {/*</div>*/}
            </div>
        </footer>
    )
};

export default Footer;