import './App.css';
import AboutUs from './components/AboutUs';
import BaseOn from './components/BaseOn';
import CanadaMailOrder from './components/CanadaMailOrder';
import Express from './components/Express';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import OurRange from './components/OurRange';
import Price from './components/Price';
import Products from './components/Products';
import ProductsDetials from './components/ProductsDetials';

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
        <BaseOn />
        <Price />
        <ProductsDetials />
        <CanadaMailOrder />
      </div>
    </>
  );
}

export default App;
