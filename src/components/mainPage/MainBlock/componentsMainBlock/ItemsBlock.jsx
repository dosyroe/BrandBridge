import React from "react";

import '../Main.css'

import ItemBlock from "./ItemBlock";

const ItemsBlock = ({brandName}) => {
  
    return (
        <div className="items">
          <ItemBlock image={`url("/img/items/${brandName}1.png")`} size={'200px 300px'}/>
          <ItemBlock image={`url("/img/items/${brandName}2.png")`} size={'200px 300px'}/>
          <ItemBlock image={`url("/img/items/${brandName}3.png")`} size={'200px 300px'}/>
          <ItemBlock image={`url("/img/items/${brandName}4.png")`} size={'200px 300px'}/>
        </div>
    );
  };
  
  export default ItemsBlock;