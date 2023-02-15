import React from "react";
import cart from "../assets/img/png/cart_grid.png";
import mushroom from "../assets/img/png/mushroom_grid.png";
import bottle from "../assets/img/png/bottle_grid.png";
import cbd from "../assets/img/png/cbd_grid.png";
import flower from "../assets/img/png/flower_grid.png";

function AboutUs() {
  return (
    <>
      <section className="pb-5">
        <div className="aboutUsBG">
          <div className="container py-5">
            <div className="row align-items-center flex-column-reverse flex-xl-row">
              <div className="col-xl-6 mt-4 mt-xl-5">
                <div className="bg_filter p-5 border_left">
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
                 fw-bold fs_lg ff_Montserrat mt-4"
                  >
                    READ MORE
                  </a>
                </div>
              </div>
              <div className="col-sm-9 col-xl-6">
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
