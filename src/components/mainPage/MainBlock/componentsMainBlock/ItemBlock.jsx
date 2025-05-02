import React from "react";

import '../Main.css'

const ItemBlock = ({image, size}) => {
    const ImageItem = {
        backgroundImage: image,
        backgroundSize: size,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
  
    return (
        <div className="item" style={ImageItem}></div>
    );
  };
  
  export default ItemBlock;