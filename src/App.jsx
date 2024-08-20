import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import BrandCarousel from './components/BrandCarousel';
import Scene from './components/Scene';
import ProductItem from './components/ProductItem';
import Accordion from './components/Accordion';

function App() {
  const info1 = {
    'Section 1': 'This is the content of section 1.',
  };
  const info2 = {
    'Section 2': 'This is the content of section 1.',
  };

  return (
    <div className="App">
      <Header />
      <HomeSection />
      <BrandCarousel />
      <section style={styles.section}>
        <div style={styles.column}>
          <div style={styles.box}>
            <Accordion info={info1} />
          </div>
          <div style={styles.box}>
            <Accordion info={info2} />
          </div>
        </div>
        <div style={styles.sceneColumn}>
          <Scene style={styles.scene} />
        </div>
        <div style={styles.column}>
          <div style={styles.box}>
            <Accordion info={info1} />
          </div>
          <div style={styles.box}>
            <Accordion info={info2} />
          </div>
        </div>
      </section>
      <section style={styles.itemSection}>
        <div style={styles.productSection}>
          <ProductItem
            title="Product Title"
            price="99.99"
            initialImage="/images/texture1.jpg"
            hoverImage="/images/texture2.jpg"
          />
        </div>
      </section>
    </div>
  );
}

const styles = {
  section: {
    display: 'grid',
    gridTemplateColumns: '2fr 3fr 2fr',
    gap: '20px',
    height: '100vh',
    alignItems: 'center',
    padding: '20px',
    boxSizing: 'border-box',
  },
  itemSection: {
    height: '80vh',
    padding: '10%',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  box: {
    backgroundColor: '#f0f0f0',
    height: 'calc(50% - 10px)',
    borderRadius: '8px',
    border: '1px solid #ddd',
    padding: '20px',
    boxSizing: 'border-box',
  },
  sceneColumn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  scene: {
    width: '100%',
    height: '100%',
  },
  productSection: {
    padding: '20px',
  },
};

export default App;
