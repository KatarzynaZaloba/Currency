import React from 'react';
import './App.css';
import './index.css';
import Footer from "./App/Footer";
import AboutMe from "./App/AboutMe";
import Section from "./App/Section";
import Article from "./App/Article";
import Paragraph from "./App/Paragraph";

function App() {
    return (
        <div>
            <div className="container">
                <main className="main">
                    <AboutMe />
                </main>
                <Section
                    title="Blog"
                    subtitle=""
                    body={
                        <Article
                        date="28 sierpnia 2023 roku"
                        title="Przenosiny"
                        body={
                            <>
                            <Paragraph>
                                Zdecydowałam się w końcu na przeniesienie bloga na Reacta. Wracam niebawem!
                            </Paragraph>
                            <Paragraph>
                                Stara wersja bloga <a href="https://katarzynazaloba.github.io/blog-old/">TUTAJ</a>
                            </Paragraph>
                            </>
                        }
                        />
                    }
                    />
            </div>
            <Footer title="2023 Katarzyna Żałoba"/>
        </div>
);
}

export default App;
