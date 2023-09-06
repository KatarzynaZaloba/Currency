import React from 'react';
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

    const sortedArticles = [...articlesLink].sort((a, b) => b.id - a.id);

    return (
        <div>
            <Container>
                <Main>
                    <AboutMe/>
                </Main>
                <Section
                    title="Blog"
                    subtitle=""
                    body={
                        <>
                            {sortedArticles.map((article) => (
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
