import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import BrandCarousel from './components/BrandCarousel';
import Scene from './components/Scene';
import ProductItem from './components/ProductItem';

function App() {
  return (
    <div className="App">
      <Header />
      <HomeSection />
      <BrandCarousel />
      <section className="scene-component">
        <Scene style={{ 'height': '800px', 'margin-left': 'auto'}}/>
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
    display: 'flex',
    height: '100vh',
  },
  productSection: {
    width: '40%',
    height: '60%',
    alignSelf: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    position: 'absolute',
    top: '120vh',
  },
};


export default App;
