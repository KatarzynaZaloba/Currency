import React, {useState} from 'react';
import './App.css';
import './index.css';
import Footer from "./components/molecules/Footer";
import AboutMe from "./components/templates/AboutMe";
import Section from "./components/organisms/Section";
import Article from "./components/molecules/Article";
import Container from "./components/atoms/Container";
import Main from "./components/atoms/Main";
import {
    articlesLink
} from "./components/molecules/Article/ArticleData";

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const sortedArticles = [...articlesLink].sort((a, b) => b.id - a.id);
    const filteredArticles = sortedArticles.filter(
        article =>
            (typeof article.title === 'string' && article.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (typeof article.body === 'string' && article.body.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (typeof article.date === 'string' && article.date.toLowerCase().includes(searchTerm.toLowerCase()))
    );


    return (
        <div>
            <nav className="navigation">
                <input
                    className="navigation__search"
                    type="text"
                    placeholder="Szukaj artykułu..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </nav>
            <Container>

                <Main>
                    <AboutMe/>
                </Main>

                <Section
                    title="Blog"
                    subtitle=""
                    body={
                        <>
                            {/*<div className="articleCard__Wrapper">*/}
                            {/*<ArticleCard />*/}
                            {/*<ArticleCard />*/}
                            {/*</div>*/}
                            {filteredArticles.map((article) => (
                                <Article
                                    key={article.id}
                                    date={article.date}
                                    title={article.title}
                                    body={article.body}
                                />
                            ))}

                        </>
                    }
                />
            </Container>
            <Footer title="2023 Katarzyna Żałoba"/>
        </div>
    );
}

export default App;
