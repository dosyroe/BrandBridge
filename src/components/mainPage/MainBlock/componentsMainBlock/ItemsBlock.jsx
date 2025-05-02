import React from "react";

import '../Main.css'

import ItemBlock from "./ItemBlock";

const ItemsBlock = ({brandName, size}) => {
  
    return (
        <div className="items">
          <ItemBlock image={`url("/img/items/${brandName}1.png")`} size={size}/>
          <ItemBlock image={`url("/img/items/${brandName}2.png")`} size={size}/>
          <ItemBlock image={`url("/img/items/${brandName}4.png")`} size={size}/>
          <ItemBlock image={`url("/img/items/${brandName}3.png")`} size={size}/>
        </div>
    );
  };
  
  export default ItemsBlock;