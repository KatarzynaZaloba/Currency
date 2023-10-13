import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import '../../App.css';
import '../../index.css';
import Footer from "../../components/molecules/Footer";
import Section from "../../components/organisms/Section";
import Container from "../../components/atoms/Container";
import {
    articlesLink
} from "../../components/molecules/Article/ArticleData";
import NavBar from "../../components/organisms/NavBar";
import HomePageHeader from "../../components/molecules/HomePageHeader";
import OneArticleCard from "../../components/organisms/OneArticleCard";
import Button from "../../components/atoms/Button";

function HomePage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [numberOfPosts, setNumberOfPosts] = useState(7);
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

    return (
        <>
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
            <Footer/>
            )
        </>
    );
}

export default HomePage;
