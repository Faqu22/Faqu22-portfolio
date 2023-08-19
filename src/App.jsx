import './App.css';
import Header from "./components/Header";
import Home from "./components/Home.jsx";
import Footer from './components/Footer';
import About from './components/About';
import Loader from './components/Loader';
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
        <div className="bg-custom-color min-h-screen">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
            </Routes>
            <Footer />
        </div>
        </Router>
    )
  }
