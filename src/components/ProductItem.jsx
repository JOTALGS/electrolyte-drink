import React, { useState } from 'react';

const ProductItem = ({ title, price, initialImage, hoverImage }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            style={{ 
                ...styles.productItem, 
                backgroundImage: `url(${isHovered ? hoverImage : initialImage})`
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={styles.productInfo}>
                <h2 style={styles.productTitle}>{title}</h2>
                <p style={styles.productPrice}>${price}</p>
            </div>
            <button style={styles.buyNowButton(isHovered)}>Buy Now</button>
        </div>
    );
};

const styles = {
    productItem: {
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#f0f0f0',
        border: '1px solid #ddd',
        borderRadius: '8px',
        transition: 'transform 0.3s ease, background-image 0.3s ease',
    },
    productInfo: {
        padding: '16px',
        textAlign: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '8px',
        marginTop: 'auto', // Pushes the info to the bottom of the container
    },
    productTitle: {
        fontSize: '1.2rem',
        margin: 0,
    },
    productPrice: {
        fontSize: '1rem',
        color: '#888',
        margin: '8px 0',
    },
    buyNowButton: (isHovered) => ({
        position: 'absolute',
        bottom: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        opacity: isHovered ? 1 : 0,
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        transform: isHovered ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(20px)',
    }),
};

export default ProductItem;
