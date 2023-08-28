import React from 'react';
import './App.css';
import './index.css';
import Footer from "./App/Footer";
import AboutMe from "./App/AboutMe";

function App() {
    return (
        <div>
            <div className="container">
                <main className="main">
                    <AboutMe />
                </main>
            </div>
            <Footer title="2023 Katarzyna Żałoba"/>
        </div>
);
}

export default App;
