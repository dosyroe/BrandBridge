import React, { useState, useEffect } from "react";
import "../App.css";

import Header from "../components/mainPage/Header/Header";
import Footer from "../components/mainPage/Footer/Footer";
import MainBlock from "../components/mainPage/MainBlock/MainBlock";

function MainPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`page-content ${isVisible ? "visible" : ""}`}>
      <Header />
      <MainBlock />
      <Footer />
    </div>
  );
}

export default MainPage;