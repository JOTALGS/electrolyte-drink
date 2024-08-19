// components/HomeSection.jsx

import React from 'react';

const HomeSection = () => {
  return (
    <section style={styles.section}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>Welcome to the Drinks Page</h1>
        <p style={styles.subtitle}>Discover the best drinks around</p>
      </div>
    </section>
  );
};

const styles = {
  section: {
    height: '100vh',
    backgroundImage: 'url(/images/homebackground.jpg)', // Path to your image in the public folder
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: to darken the background image
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    color: 'white',
  },
  title: {
    fontSize: '3em',
    margin: 0,
  },
  subtitle: {
    fontSize: '1.5em',
    marginTop: '10px',
  },
};

export default HomeSection;
