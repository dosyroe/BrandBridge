import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/img/other/logo.png" alt="Logo" />
      </div>
      <nav className="nav-links">
        <a href="#feedback">Обратная связь</a>
        <a href="#contacts">Контакты</a>
        <a href="#delivery">Доставка и возврат</a>
      </nav>
      <div className="buttons">
        <button>
          <img src="/img/icons/search.png" alt="Search" className='icon-btn'/>
        </button>
        <button>
          <img src="/img/icons/heart.png" alt="Favorites" className='icon-btn'/>
        </button>
        <button>
          <img src="/img/icons/points.png" alt="Menu" className='icon-btn2'/>
        </button>
      </div>
    </header>
  );
};

export default Header;