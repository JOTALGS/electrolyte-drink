import React, { useState } from 'react';

const Accordion = ({ info }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={styles.accordionContainer}>
      {Object.keys(info).map((title, index) => (
        <div key={index} style={styles.accordionItem}>
          <div
            style={styles.accordionTitle}
            onClick={() => toggleAccordion(index)}
          >
            {title}
            <span style={styles.accordionIcon}>
              {activeIndex === index ? '-' : '+'}
            </span>
          </div>
          {activeIndex === index && (
            <div style={styles.accordionContent}>
              {info[title]}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const styles = {
  accordionContainer: {
    width: '100%',
    border: '1px solid #ddd',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  accordionItem: {
    borderBottom: '1px solid #ddd',
  },
  accordionTitle: {
    padding: '10px 20px',
    cursor: 'pointer',
    backgroundColor: '#f0f0f0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  accordionIcon: {
    marginLeft: '10px',
    fontWeight: 'bold',
  },
  accordionContent: {
    padding: '10px 20px',
    backgroundColor: '#fff',
  },
};

export default Accordion;
