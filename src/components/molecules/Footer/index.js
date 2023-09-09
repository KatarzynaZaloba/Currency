import React from "react";
import "./style.css";
import FooterSectionTitle from "../../atoms/FooterSectionTitle";
import FooterSectionParagraph from "../../atoms/FooterSectionParagraph";
import FooterSectionUndertitle from "../../atoms/FooterSectionUndertitle";

const Footer = () => {
    return (
        <footer className="bg-zinc-100 m-auto px-5 md:pb-10 pb-5 md:px-40">
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-2">
                    <div className="break-all">
                        <FooterSectionTitle title="About"/>
                        <FooterSectionParagraph
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"/>
                    </div>
                    <div>
                        <FooterSectionTitle title="Email: info@jstemplate.net"/>
                        <FooterSectionTitle title="Phone: 880 123 456 789"/>
                    </div>
                </div>
                <div>
                    <FooterSectionTitle title="Quick Link"/>
                    <FooterSectionUndertitle title="Lifestyle"/>
                    <FooterSectionUndertitle title="Lifestyle"/>
                    <FooterSectionUndertitle title="Lifestyle"/>
                    <FooterSectionUndertitle title="Lifestyle"/>
                    <FooterSectionUndertitle title="Lifestyle"/>
                    <FooterSectionUndertitle title="Lifestyle"/>

                </div>
                <div>
                    <FooterSectionTitle title="Category"/>
                    <FooterSectionUndertitle title="Lifestyle"/>
                    <FooterSectionUndertitle title="Lifestyle"/>
                    <FooterSectionUndertitle title="Lifestyle"/>
                    <FooterSectionUndertitle title="Lifestyle"/>
                    <FooterSectionUndertitle title="Lifestyle"/>
                    <FooterSectionUndertitle title="Lifestyle"/>
                </div>
            </div>
            <div className="flex justify-between items-center border-t-2">
                <div>
                    UI/ UX Design:
                    <a href="https://www.jstemplate.net/" className="text-zinc-900 font-semibold">JS Template</a>
                </div>
                <div className="flex justify-end items-center">
                    <FooterSectionUndertitle title="Polityka prywatności"/>
                    <FooterSectionUndertitle title="Polityka ciasteczek"/>
                </div>
            </div>
        </footer>
    )
};

export default Footer;