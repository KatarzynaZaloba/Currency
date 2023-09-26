import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import '../../App.css';
import '../../index.css';
import Footer from "../../components/molecules/Footer";
import AboutMe from "../../components/templates/AboutMe";
import Section from "../../components/organisms/Section";
import Article from "../../components/molecules/Article";
import Container from "../../components/atoms/Container";
import Main from "../../components/atoms/Main";
import {
    articlesLink
} from "../../components/molecules/Article/ArticleData";
import NavBarTitle from "../../components/atoms/NavBarTitle";
import SearchBar from "../../components/molecules/SearchBar";
import SwitchButton from "../../components/molecules/SwitchButton";
import NavBar from "../../components/organisms/NavBar";
import FooterSectionTitle from "../../components/atoms/FooterSectionTitle";
import FooterSectionUndertitle from "../../components/atoms/FooterSectionUndertitle";
import FooterSectionParagraph from "../../components/atoms/FooterSectionParagraph";
import FooterContactTitle from "../../components/atoms/FooterContactTitle";
import HomePageHeader from "../../components/molecules/HomePageHeader";
import SectionTitle from "../../components/atoms/SectionTitle";
import OneArticleCard from "../../components/organisms/OneArticleCard";
import Button from "../../components/atoms/Button";

function HomePage() {
    console.log("HomePage is rendering");
    const [searchTerm, setSearchTerm] = useState("");
    const [numberOfPosts, setNumberOfPosts] = useState(7);
    // const [isLoading, setIsLoading] = useState(true);
    // const [loadedImages, setLoadedImages] = useState({});

    const handleSearch = (newSearchTerm) => {
        setSearchTerm(newSearchTerm);
    };


    const sortedArticles = [...articlesLink].sort((a, b) => b.id - a.id);
    const newestArticle = sortedArticles[0];
    const filteredArticles = sortedArticles.filter(
        article =>
            (typeof article.title === 'string' && article.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (typeof article.body === 'string' && article.body.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (typeof article.date === 'string' && article.date.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    const articlesToDisplay = filteredArticles.slice(1, numberOfPosts);

    // useEffect(() => {
    //     const timer = setTimeout(() => setIsLoading(false), 3000);
    //     return () => clearTimeout(timer);
    // }, []);
    //
    // const handleImageLoad = (id) => {
    //     console.log("Image Loaded", id);
    //     setLoadedImages((prev) => ({...prev, [id]: true}));
    // };
    //
    // const allImagesLoaded = articlesToDisplay.every(
    //     (article) => loadedImages[article.id] !== undefined
    // );

    return (
        <>
            {/*{!allImagesLoaded ? (*/}
            {/*    <div className="flex justify-center items-center min-h-screen">*/}
            {/*        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>*/}
            {/*    </div>*/}
            {/*) : (*/}
                <Container>
                    <NavBar
                        searchTerm={searchTerm}
                        onSearch={handleSearch}
                    />
                    <Link to={`/article/${newestArticle.id}`} key={newestArticle.id}>
                        <HomePageHeader
                            newestArticle={newestArticle}/>
                    </Link>
                    <Section
                        title="Ostatnie posty"
                        subtitle=""
                        body={
                            <>
                                <div className="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
                                    {articlesToDisplay.map((article) => (
                                        <Link to={`/article/${article.id}`} key={article.id}>
                                            <OneArticleCard
                                                tag={article.tag}
                                                key={article.id}
                                                date={article.date}
                                                title={article.title}
                                                body={article.body}
                                                picture={article.img}
                                                // onLoad={() => handleImageLoad(article.id)}
                                            />
                                        </Link>
                                    ))}
                                </div>
                                <div className="flex justify-center items-center my-6">
                                    <Button text="Zobacz więcej" onClick={() => {
                                        setNumberOfPosts(numberOfPosts + 6);
                                    }}/>
                                </div>
                            </>
                        }
                    />
                </Container>
            )
{/*}*/}
            <Footer/>
            )
        </>
    );
}

export default HomePage;
