import React from 'react';
import './Main.css';

import BrandsBlock from './componentsMainBlock/BrandsBlock';
import ItemsBlock from './componentsMainBlock/ItemsBlock';
import { Link } from 'react-router-dom';

const MainBlock = () => {
  return (
    <main>
      <div className="banner"></div>
      <h1>Популярные бренды</h1>
      <div className="brands-block">
        <div className="populat-brands">
          <BrandsBlock image={'url("/img/logo-brands/nike.jpg")'} />
          <Link to='/vetements'><BrandsBlock image={'url("/img/logo-brands/vetem.jpg")'} /></Link>
          <BrandsBlock image={'url("/img/logo-brands/yeezy.jpg")'} />
          <BrandsBlock image={'url("/img/logo-brands/adidas.svg")'} />
        </div>
        <div className="populat-brands">
        <BrandsBlock image={'url("/img/logo-brands/HM.jpg")'} />
        <BrandsBlock image={'url("/img/logo-brands/zara.jpg")'} />
        <BrandsBlock image={'url("/img/logo-brands/balenciaga.jpg")'} />
        </div>
      </div>
      <h1>Популярные товары</h1>
      <div className="love-items">
        <h2 className="h2 h2-vetem">vetements</h2>
          <ItemsBlock brandName={'vetem'} size={'200px 260px'}/>
        <h2 className="h2 h2-nike">nike</h2>
        <ItemsBlock brandName={'nike'} size={'200px 260px'}/>
        <h2 className="h2 h2-yeezy">yeezy</h2>
        <ItemsBlock brandName={'yeezy'} size={'240px 220px'}/>
        <h2 className="h2 h2-adidas">adidas</h2>
        <ItemsBlock brandName={'adidas'} size={'200px 260px'}/>
      </div> 
    </main>
  );
};

export default MainBlock;
