import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src="/img/other/logo2.png" alt="Logo" />
      </div>
      <div className="footer-links">
        <div className="footer-block">
          <h3>Подписка</h3>
          <form>
            <button type="submit">Подписаться</button>
          </form>
        </div>
        <div className="footer-block">
          <h3>Информация</h3>
          <Link to="/support">Помощь</Link>
          <Link to="/delivery">Оплата и доставка</Link>
          <Link to="/delivery">Обмен и возврат</Link>
        </div>
        <div className="footer-block">
          <h3>Контакты</h3>
          <Link to="/contacts">Контакты</Link>
          <Link to="/contacts">Рассылка</Link>
          <Link to="/support">Обмен и возврат</Link>
        </div>
      </div>
      <div className="footer-icons">
        <a href="#facebook">
          <img src="/img/icons/telegram.png" alt="Telegram" />
        </a>
        <a href="#twitter">
          <img src="/img/icons/vk.png" alt="VK" />
        </a>
        <a href="#instagram">
          <img src="/img/icons/instagram.png" alt="Instagram" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
