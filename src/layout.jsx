import './App.css';
import Header from "./components/Header";
import Footer from './components/Footer';
import Loader from './components/Loader';
import React, { useState, useEffect } from 'react';


export default function Layout(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }, []);
  
    return (
        <div className="section pt-0 min-h-screen">
            {loading && <Loader />}
            <Header />
            { props.children }
            <Footer />
        </div>
    )
  }
