import React from "react";
import { Link } from "react-router-dom";

import './SupportPage.css'
import SuppBlock from "../components/supportPage/MainBlock/Block";
import BlockSocial from "../components/supportPage/SocialBlock/BlockSocial";

const SupportPage = () => {
  return (
    <div className="Block">
      <SuppBlock />
      <BlockSocial />
    </div>
  );
};

export default SupportPage;
