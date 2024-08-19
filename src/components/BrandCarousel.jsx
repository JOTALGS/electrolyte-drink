// src/BrandCarousel.jsx

import React from 'react';

const brands = [
  { name: 'Brand 1', imageUrl: '/images/brand1.jpg' },
  { name: 'Brand 2', imageUrl: '/images/brand2.jpg' },
  { name: 'Brand 3', imageUrl: '/images/brand3.jpg' },
  { name: 'Brand 4', imageUrl: '/images/brand4.jpg' },
  { name: 'Brand 5', imageUrl: '/images/brand5.jpg' },
  // Add more brand objects here
];

const BrandCarousel = () => {
  return (
    <div style={styles.carouselContainer}>
      <div style={styles.carouselTrack}>
        {brands.map((brand, index) => (
          <div key={index} style={styles.brandItem}>
            <img src={brand.imageUrl} alt={brand.name} style={styles.brandImage} />
            <p style={styles.brandName}>{brand.name}</p>
          </div>
        ))}
        {/* Repeat the brand items to create a seamless loop */}
        {brands.map((brand, index) => (
          <div key={index + brands.length} style={styles.brandItem}>
            <img src={brand.imageUrl} alt={brand.name} style={styles.brandImage} />
            <p style={styles.brandName}>{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  carouselContainer: {
    overflow: 'hidden',
    height: '15vh',
    width: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid rgba(0, 0, 0, 0.8)',
  },
  carouselTrack: {
    display: 'flex',
    alignItems: 'center',
    animation: 'scroll 10s linear infinite',
    willChange: 'transform',
  },
  brandItem: {
    flex: '0 0 auto', // Ensures the items don’t shrink or expand
    width: '350px', // Set a fixed width for each item
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
  },
  brandImage: {
    width: '100px',
    height: 'auto',
  },
  brandName: {
    marginTop: '5px',
    fontSize: '1em',
    color: '#333',
  },
};

export default BrandCarousel;
