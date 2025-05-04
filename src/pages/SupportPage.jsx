import React, { useState, useEffect } from "react";

import styles from'./SupportPage.module.css'
import SuppBlock from "../components/supportPage/MainBlock/Block";
import BlockSocial from "../components/supportPage/SocialBlock/BlockSocial";

const SupportPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 200);
  
      return () => clearTimeout(timer);
    }, []);
  return (
    <div className={`page-content ${isVisible ? "visible" : ""}`}>
    <div className={styles.Block}>
      <SuppBlock />
      <BlockSocial />
    </div>
    </div>
  );
};

export default SupportPage;
