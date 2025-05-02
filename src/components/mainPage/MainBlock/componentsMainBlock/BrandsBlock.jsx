import React from "react";

import '../Main.css'

const BrandsBlock = ({image}) => {
    const ImageBrands = {
        backgroundImage: image,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
  
    return (
        <div className="brand" style={ImageBrands}></div>
    );
  };
  
  export default BrandsBlock;