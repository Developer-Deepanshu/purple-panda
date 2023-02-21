import React, { useEffect } from "react";
import cart from "../assets/img/webp/cart_grid.webp";
import mushroom from "../assets/img/webp/mushroom_grid.webp";
import bottle from "../assets/img/webp/bottle_grid.webp";
import cbd from "../assets/img/webp/cbd_grid.webp";
import flower from "../assets/img/webp/flower_grid.webp";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutUs() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <section className="pb-5" id="About">
        <div className="aboutUsBG py-xl-5">
          <div className="container py-5">
            <div className="row align-items-center flex-column-reverse flex-xl-row">
              <div
                className="col-xl-6 mt-4 mt-xl-6"
                data-aos="fade-right"
                data-aos-anchor-placement="top"
                data-aos-delay="400"
                data-aos-offset="200"
              >
                <div className="bg_filter p-3 p-sm-5 border_left position-relative">
                  <h2 className="fw-normal text-white ff_Philosopher fs_xl4">
                    About
                    <span className="text_purpleGrident">Us</span>{" "}
                  </h2>
                  <p className="text-white ff_Montserrat fs_md fw-normal mb-0">
                    Purple Panda is a Canadian online cannabis dispensary with a
                    passion for good weed and even better customer service. We
                    all remember the days of waiting for scary strangers on
                    street corners, but thankfully those days are over. Now,
                    we’re proud of how we provide an easy, convenient, and
                    user-friendly experience to our clients.
                  </p>
                  <p className="text-white ff_Montserrat fs_md fw-normal">
                    We specialize in high-quality cannabis for both recreational
                    and medical purposes, while also making sure that you’re
                    getting the best bud for your buck! Along with all the
                    different strains of cannabis that we stock, you can also
                    get your fill of edibles, vapes, CBD, extracts, and even buy
                    magic mushrooms online from our store.
                  </p>
                  <a
                    href=""
                    className="d-inline-block text-white bg_purpleGrident border_radius40 p_nav_signIn
                 fw-bold fs_lg ff_Montserrat mt-4 hoverBtn"
                  >
                    READ MORE
                  </a>
                </div>
              </div>
              <div
                className="col-sm-9 col-xl-5"
                data-aos="fade-left"
                data-aos-anchor-placement="top"
                data-aos-delay="400"
                data-aos-offset="200"
              >
                <div className="d_grid">
                  <div className="grid_iteam1 pt-4">
                    <img className="w-100" src={cart} alt="cart" />
                  </div>
                  <div className="grid_iteam2">
                    <img className="w-100" src={mushroom} alt="mushroom" />
                  </div>
                  <div className="grid_iteam3">
                    <img className="w-100" src={bottle} alt="bottle" />
                  </div>
                  <div className="grid_iteam4">
                    <img className="w-100" src={cbd} alt="cbd" />
                  </div>
                  <div className="grid_iteam5">
                    <img className="w-100" src={flower} alt="flower" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
