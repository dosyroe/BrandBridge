import React from "react";
import "./Footer.css";

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
          <a href="#help">Помощь</a>
          <a href="#payment">Оплата и доставка</a>
          <a href="#exchange">Обмен и возврат</a>
        </div>
        <div className="footer-block">
          <h3>Контакты</h3>
          <a href="#contacts">Контакты</a>
          <a href="#newsletter">Рассылка</a>
          <a href="#feedback">Обратная связь</a>
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
