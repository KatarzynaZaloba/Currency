import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import './index.css';
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";

function App() {

    return (
        <Router>
                <Routes>
                    <Route path="/article/:id" element={<ArticlePage />} />
                    <Route path="/blog" element={<HomePage />} />
                </Routes>
        </Router>
    );
}

export default App;
