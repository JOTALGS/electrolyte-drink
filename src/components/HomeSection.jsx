import React, { useState, useEffect } from 'react';

const HomeSection = () => {
  const [shutterStyle, setShutterStyle] = useState({
    top: '0%',
    bottom: '0%',
    left: '0%',
    right: '0%',
  });
  const [scrollY, setScrollY] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);
  const [released, setReleased] = useState(false);
  const [backgroundOpacity, setBackgroundOpacity] = useState(1);

  useEffect(() => {
    const sectionElement = document.getElementById('home-section');
    setSectionHeight(sectionElement.offsetHeight);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);

      const maxCover = window.innerHeight / 2; // Maximum cover distance
      const coverAmount = Math.min(scrollPosition * 1.5, maxCover); // Adjust speed and max cover

      if (scrollPosition < sectionHeight) {
        if (coverAmount < maxCover) {
          setShutterStyle({
            top: `${coverAmount}px`,
            bottom: `${coverAmount}px`,
            left: `${coverAmount}px`,
            right: `${coverAmount}px`,
          });
          setReleased(false);
          setBackgroundOpacity(1); // Ensure background is fully opaque while shutters are moving
        } else if (!released) {
          // Release the section smoothly
          setShutterStyle({
            top: `${maxCover}px`,
            bottom: `${maxCover}px`,
            left: `${maxCover}px`,
            right: `${maxCover}px`,
          });
          setReleased(true);
          // Start fading out the background quickly but smoothly
          setBackgroundOpacity(0);
        }
      } else {
        setReleased(true);
        setBackgroundOpacity(0); // Ensure background is fully transparent after section is fully covered
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [released, sectionHeight]);

  return (
    <section
      id="home-section"
      style={{
        ...styles.section,
        position: released ? 'relative' : 'fixed',
        top: released ? `${scrollY - sectionHeight + window.innerHeight}px` : 0,
        transition: 'background-color 0.3s ease-out', // Smooth transition for background color
        backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity})`, // Transition background color opacity
        backgroundImage: backgroundOpacity > 0 ? 'url(/images/homebackground.jpg)' : 'none', // Conditionally apply background image
      }}
    >
      <div style={{ ...styles.shutter, ...styles.shutterTop, height: shutterStyle.top, backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity})` }} />
      <div style={{ ...styles.shutter, ...styles.shutterBottom, height: shutterStyle.bottom, backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity})` }} />
      <div style={{ ...styles.shutter, ...styles.shutterLeft, width: shutterStyle.left, backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity})` }} />
      <div style={{ ...styles.shutter, ...styles.shutterRight, width: shutterStyle.right, backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity})` }} />
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
    width: '100%', // Ensure the section takes full width
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    zIndex: 10,
    transition: 'background-color 0.3s ease-out', // Smooth transition for background color
  },
  shutter: {
    position: 'absolute',
    backgroundColor: 'white',
    zIndex: 1,
    transition: 'all 0.3s ease-out', // Smooth transition for all shutters
  },
  shutterTop: {
    top: 0,
    left: 0,
    width: '100%',
    height: '0%', // Start with the shutter completely open
  },
  shutterBottom: {
    bottom: 0,
    left: 0,
    width: '100%',
    height: '0%',
  },
  shutterLeft: {
    top: 0,
    left: 0,
    height: '100%',
    width: '0%',
  },
  shutterRight: {
    top: 0,
    right: 0,
    height: '100%',
    width: '0%',
  },
  overlay: {
    position: 'relative',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    color: 'white',
    zIndex: 2,
  },
  title: {
    fontSize: '5em',
    margin: 0,
  },
  subtitle: {
    fontSize: '2em',
    marginTop: '10px',
  },
};

export default HomeSection;
