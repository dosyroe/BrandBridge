import React from "react";

import styles from'./SupportPage.module.css'
import SuppBlock from "../components/supportPage/MainBlock/Block";
import BlockSocial from "../components/supportPage/SocialBlock/BlockSocial";

const SupportPage = () => {
  return (
    <div className={styles.Block}>
      <SuppBlock />
      <BlockSocial />
    </div>
  );
};

export default SupportPage;
