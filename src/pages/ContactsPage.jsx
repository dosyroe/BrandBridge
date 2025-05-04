import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


import "./ContactsPage.css";

const ContactsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 200);
    
        return () => clearTimeout(timer);
      }, []);
  return (
    <div className={`page-content ${isVisible ? "visible" : ""}`}>
    <div className="Block2">
      <div className="Form2">
        <div className="form-block">
        <Link to="/">
          <img src="/img/icons/left-arrow.png" alt="Back" />
        </Link>
        <h2>Контакты</h2>
        <div className="p">
          <p>Наша почта:</p>
          <p>Наши номера телефонов:</p>
        </div>
        </div>
      </div>
      <div className="Social">
        <p>
        Нам очень важно, чтобы вы остались довольны своими покупками, поэтому по любым срочным вопросом - обращайтесь!
        </p>
      </div>
    </div>
    </div>
  );
};

export default ContactsPage;
