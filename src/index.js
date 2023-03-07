
// Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
// Stylesheets
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/styles/style.css";
// Pages
import PageNotFound from "./pages/PageNotFound.js";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import FAQ from "./pages/FAQ";
import Forum from "./pages/Forum";
import Login from "./pages/Login";
import Join from "./pages/Join";
import Contact from "./pages/Contact";
import Groups from "./pages/Groups";
import Development from "./pages/Development";
import Compose from "./pages/Compose";
import Article from "./pages/Article";
import About from "./pages/about/About";
import EmailVerification from "./pages/EmailVerification";
import Apply from "./pages/Apply";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="learn" element={<Learn />} />
            <Route path="forum" element={<Forum />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="login" element={<Login />} />
            <Route path="join" element={<Join />} />
            <Route path="verify" element={<EmailVerification />} />
            <Route path="apply" element={<Apply />} />
            <Route path="about" element={<About />} />
            <Route path="groups" element={<Groups />} />
            <Route path="contact" element={<Contact />} />
            <Route path="devlopment" element={<Development />} />
            <Route path="compose" element={<Compose />} />
            <Route path="article" element={<Article />} />
            {/* <Route path="test" element={<Storage />} /> */}
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>
);