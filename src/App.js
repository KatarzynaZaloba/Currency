import React from 'react';
import './App.css';
import './index.css';
import Footer from "./components/molecules/Footer";
import AboutMe from "./components/templates/AboutMe";
import Section from "./components/organisms/Section";
import Article from "./components/molecules/Article";

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
                    <>
                        <Article
                        date="28 sierpnia 2023 roku"
                        title="Przenosiny"
                        body={
                            <>
                            <p>
                                Zdecydowałam się w końcu na przeniesienie bloga na Reacta. Wracam niebawem!
                            </p>
                            <p>
                                Stara wersja bloga <a href="https://katarzynazaloba.github.io/blog-old/">TUTAJ</a>
                            </p>
                            </>
                        }
                        />

                        <Article
                        date="18 sierpnia 2023 roku"
                        title="React - formularze"
                        body={""

                        }
                        />
                            </>
                    }
                    />
            </div>
            <Footer title="2023 Katarzyna Żałoba"/>
        </div>
);
}

export default App;
