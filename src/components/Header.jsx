// components/Header.jsx

import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header style={{ ...styles.header, backgroundColor: isScrolled ? 'white' : 'transparent' }}>
      <h1 style={{ ...styles.title, color: isScrolled ? '#333' : 'white' }}>Welcome to the Drinks Page</h1>
      <nav style={styles.nav}>
        <div style={styles.rightNav}>
          <a href="/" style={{ ...styles.navLink, color: isScrolled ? '#333' : 'white' }}>Home</a>
        </div>
        <div style={styles.leftNav}>
          <a href="/drinks" style={{ ...styles.navLink, color: isScrolled ? '#333' : 'white' }}>Drinks</a>
          <a href="/about" style={{ ...styles.navLink, color: isScrolled ? '#333' : 'white' }}>About</a>
        </div>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    position: 'fixed',
    width: '100%',
    padding: '10px 20px',
    top: 0,
    left: 0,
    zIndex: 1000,
    transition: 'background-color 0.3s ease-in-out',
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  },
  title: {
    margin: 0,
    fontSize: '2em',
    transition: 'color 0.3s ease-in-out',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10px',
  },
  leftNav: {
    display: 'flex',
    gap: '15px',
  },
  rightNav: {
    display: 'flex',
    gap: '15px',
  },
  navLink: {
    textDecoration: 'none',
    fontSize: '1.2em',
    transition: 'color 0.3s ease-in-out',
  },
};

export default Header;
