import React, { useEffect, useState } from "react";
import AboutUs from "../components/AboutUs";
import BaseOn from "../components/BaseOn";
import CanadaMailOrder from "../components/CanadaMailOrder";
import Cannabis from "../components/Cannabis";
import Express from "../components/Express";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LatestBlogsAndNews from "../components/LatestBlogsAndNews";
import MostPopularItems from "../components/MostPopularItems";
import NavBar from "../components/NavBar";
import OurClassifications from "../components/OurClassifications";
import OurRange from "../components/OurRange";
import PandaCollection from "../components/PandaCollection";
import PotentCannabisAlert from "../components/PotentCannabisAlert";
import Price from "../components/Price";
import Products from "../components/Products";
import ProductsDetials from "../components/ProductsDetials";
import StoreHours from "../components/StoreHours";
import Loading from "./Loading";

function HomePage() {
  const [preload, setpreload] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setpreload(false);
      document.body.classList.remove("overflow_hidden_preloder");
    }, 3000);
  });
  return (
    <>
      <div className="overflow_hidden_preloder">
        {preload && <Loading />}
        <div className="bg_blue">
          <div className="min_vh_xl d-flex flex-column hero_bg">
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
          <PotentCannabisAlert />
          <OurClassifications />
          <MostPopularItems />
          <LatestBlogsAndNews />
          <PandaCollection />
          <StoreHours />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default HomePage;
