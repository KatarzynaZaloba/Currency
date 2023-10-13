import React from "react";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import "./style.css";
import FooterSectionTitle from "../../atoms/FooterSectionTitle";
import FooterSectionParagraph from "../../atoms/FooterSectionParagraph";
import Mailto from "../../molecules/Mailto";

const Footer = () => {
    const email = 'kzalobafrontend@gmail.com';

    return (
        <footer className="bg-zinc-100 m-auto px-5 md:pb-10 pb-5">
            <div className="max-w-fit m-auto px-5 md:px-20 lg:px-40 py-4 grid grid-cols-1 md:grid-cols-2 gap-1">
                <div className="col-auto">
                    <div className="break-words">
                        <FooterSectionTitle title="O projekcie"/>
                        <FooterSectionParagraph
                            text="Jest to blog, który powstawał na przełomie kilku miesięcy. Piszę w nim o bieganiu oraz powtarzam i utrwalam materiał dotyczący web-developmentu. Chętnie wspomogę Cię także w Twoim projekcie!"/>
                    </div>
                    <div className="flex justify-start items-center">
                        <Mailto email={email} subject="Wspolpraca">
                            <FooterSectionTitle title={email} />
                        </Mailto>
                    </div>
                    <div className="flex justify-start items-center">
                        <a href="https://www.linkedin.com/in/katarzyna-zaloba/" target="_blank" rel="noopener noreferrer" className="mr-4">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://github.com/KatarzynaZaloba" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={24} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="max-w-fit m-auto px-5 md:px-20 md:pb-10 pb-5 flex justify-between items-center border-t-2 py-4">
                <div className="flex justify-start items-center">
                    <FooterSectionParagraph text="UI Design:"></FooterSectionParagraph>
                    <a href="https://www.jstemplate.net/" className="text-zinc-900 font-semibold hover:text-indigo-500 duration-30">JS Template</a>
                </div>
            </div>
        </footer>
    )
};

export default Footer;