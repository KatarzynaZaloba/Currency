import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
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
import SectionTitle from "./components/atoms/SectionTitle";
import OneArticleCard from "./components/organisms/OneArticleCard";
import Button from "./components/atoms/Button";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";

function App() {

    return (
        <Router>
            <Container>
                <Routes>
                    <Route path="/article/:id" element={<ArticlePage />} />
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </Container>
        </Router>
    );
}

export default App;
