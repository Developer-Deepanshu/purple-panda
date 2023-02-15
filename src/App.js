import './App.css';
import AboutUs from './components/AboutUs';
import Express from './components/Express';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import OurRange from './components/OurRange';
import Products from './components/Products';

function App() {
  return (
    <>
      <div className='bg_blue'>
        <div className='min-vh-100 d-flex flex-column hero_bg'>
          <NavBar />
          <Hero />
        </div>
        <Products />
        <AboutUs />
        <OurRange />
        <Express />
      </div>
    </>
  );
}

export default App;
