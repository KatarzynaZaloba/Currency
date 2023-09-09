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
import NavBarTitle from "./components/atoms/NavBarTitle";
import SearchBar from "./components/molecules/SearchBar";
import SwitchButton from "./components/molecules/SwitchButton";
import NavBar from "./components/organisms/NavBar";
import FooterSectionTitle from "./components/atoms/FooterSectionTitle";
import FooterSectionUndertitle from "./components/atoms/FooterSectionUndertitle";
import FooterSectionParagraph from "./components/atoms/FooterSectionParagraph";
import FooterContactTitle from "./components/atoms/FooterContactTitle";
import HomePageHeader from "./components/molecules/HomePageHeader";

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
            {/*<nav className="navigation">*/}
            {/*    <input*/}
            {/*        className="navigation__search"*/}
            {/*        type="text"*/}
            {/*        placeholder="Szukaj artykułu..."*/}
            {/*        value={searchTerm}*/}
            {/*        onChange={(e) => setSearchTerm(e.target.value)}*/}
            {/*    />*/}
            {/*</nav>*/}
            <Container>
                <NavBar/>
                <HomePageHeader />
                {/*<Main>*/}
                {/*    <AboutMe/>*/}
                {/*</Main>*/}

                {/*<Section*/}
                {/*    title="Blog"*/}
                {/*    subtitle=""*/}
                {/*    body={*/}
                {/*        <>*/}
                {/*            /!*{filteredArticles.map((article) => (*!/*/}
                {/*            /!*    <Article*!/*/}
                {/*            /!*        key={article.id}*!/*/}
                {/*            /!*        date={article.date}*!/*/}
                {/*            /!*        title={article.title}*!/*/}
                {/*            /!*        body={article.body}*!/*/}
                {/*            /!*    />*!/*/}
                {/*            /!*))}*!/*/}

                {/*        </>*/}
                {/*    }*/}
                {/*/>*/}
            </Container>
            <Footer />
        </div>
    );
}

export default App;
