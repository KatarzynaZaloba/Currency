import React from "react";
import {Link} from "react-router-dom";
import "./style.css";
import FooterSectionTitle from "../../atoms/FooterSectionTitle";
import FooterSectionParagraph from "../../atoms/FooterSectionParagraph";
import FooterSectionUndertitle from "../../atoms/FooterSectionUndertitle";

const Footer = () => {
    return (
        <footer className="bg-zinc-100 m-auto px-5 md:pb-10 pb-5 md:px-40">
            <div className="py-4 grid grid-cols-4 gap-4">
                <div className="pt-4 lg:col-span-2 col-span-4">
                    <div className="break-words">
                        <FooterSectionTitle title="O projekcie"/>
                        <FooterSectionParagraph
                            text="Jest to blog, który powstawał na przełomie kilku miesięcy. Piszę w nim o bieganiu oraz powtarzam i utrwalam materiał dotyczący web-developmentu. Chętnie wspomogę Cię także w Twoim projekcie!"/>
                    </div>
                    <div className="pt-4">
                        <Link tonClick={() => window.location = 'mailto:kzalobafrontend@gmail.com'}><FooterSectionTitle title="Email: kzalobafrontend@gmail.com"/></Link>
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
            <div className="flex justify-between items-center border-t-2 py-4">
                <div className="flex justify-center items-center">
                    <p className="font-sm pr-2">UX UI Design:</p>
                    <a href="https://www.jstemplate.net/" className="text-zinc-900 font-semibold">JS Template</a>
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