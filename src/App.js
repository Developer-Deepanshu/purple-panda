import './App.css';
import AboutUs from './components/AboutUs';
import BaseOn from './components/BaseOn';
import CanadaMailOrder from './components/CanadaMailOrder';
import Cannabis from './components/Cannabis';
import Express from './components/Express';
import Hero from './components/Hero';
import LatestBlogsAndNews from './components/LatestBlogsAndNews';
import MostPopularItems from './components/MostPopularItems';
import NavBar from './components/NavBar';
import OurClassifications from './components/OurClassifications';
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
        <Cannabis />
        <OurClassifications />
        <MostPopularItems />
        <LatestBlogsAndNews />
      </div>
    </>
  );
}

export default App;
