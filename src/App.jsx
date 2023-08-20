import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home.jsx";
import Footer from './components/Footer';
import About from './components/About/About';
import Loader from './components/Loader';
import Project from './components/Projects/Projects';

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
  } from "react-router-dom";
import React, { useState, useEffect } from 'react';


export default function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }, []);
  
    return (
        <Router>
        {loading && <Loader />}
        <div className="section pt-0 min-h-screen">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Project />} />
            </Routes>
            <Footer />
        </div>
        </Router>
    )
  }
