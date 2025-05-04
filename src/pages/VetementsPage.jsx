import React, { useState, useEffect } from "react";

import './VetementsPage.css'

import Header from '../components/mainPage/Header/Header'
import Footer from '../components/mainPage/Footer/Footer'
import ItemsBlock from "../components/mainPage/MainBlock/componentsMainBlock/ItemsBlock";

const VetementsPage = () => {
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
        <div className="Main-Block">
            <div className="banner"></div>
            <img src="../../public/img/icons/left-arrow.png" alt="" />

            <h2>все товары</h2>
            <div className="itemss">
            <ItemsBlock brandName={'vetem'} size={'200px 260px'}/>
            <ItemsBlock brandName={'vetem'} size={'200px 260px'}/>
            <ItemsBlock brandName={'vetem'} size={'200px 260px'}/>
            <ItemsBlock brandName={'vetem'} size={'200px 260px'}/>
            </div>
        </div>
        <Footer />
        </div>
    );
};

export default VetementsPage;