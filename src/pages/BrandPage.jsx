import React from 'react';
import { useParams } from 'react-router-dom';
import brandsData from '../data/brandsData';

const BrandPage = () => {
  const { brandId } = useParams();
  const brand = brandsData.find((b) => b.id === brandId);

  if (!brand) {
    return <div>Brand not found</div>;
  }

  return (
    <div
      style={{
        backgroundImage: `url(${brand.imageBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
      }}
    >
      <h1>{brand.name}</h1>
      <p>{brand.description}</p>
    </div>
  );
};

export default BrandPage;
