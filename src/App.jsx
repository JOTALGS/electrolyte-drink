import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import BrandCarousel from './components/BrandCarousel';
import Scene from './components/Scene';

function App() {
  return (
    <div className="App">
      <Header />
      <HomeSection />
      <BrandCarousel />
      <section className="scene-component">
        <Scene style={{ 'height': '800px', 'margin-left': 'auto'}}/>
      </section>

      <div className='p-10'>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
      <div className='p-10'>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
      <div className='p-10'>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
      <div className='p-10'>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
