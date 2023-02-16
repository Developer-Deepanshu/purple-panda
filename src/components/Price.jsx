import React from "react";
import mushroom from "../assets/img/png/mushroomPrice_2.png";

function Price() {
  return (
    <>
      <section className="py-5">
        <div className="container pt-5">
          <div
            className="row align-items-center price_bg justify-content-between outlinePurrple
           flex-column-reverse flex-xl-row pb-5 pb-xl-0 hover_mushroom"
          >
            <div className="col-sm-8 col-xl-6 me-md-5">
              <div className="ms-md-5">
                <h2 className="fw-bold ff_Philosopher fs_xl4 text-white text-center text-xl-start">
                  High <span className="text_purpleGrident">Thoughts</span>, Low
                  <span className="text_purpleGrident"> Prices</span>
                </h2>
                <p className="text-white fw-normal ff_Montserrat fs_md text-center text-xl-start">
                  We pride ourselves on supplying premium, top-shelf weed
                  without the top-shelf markups. Some dispensaries will charge
                  an arm and a leg for the newest “flavors”, but we believe in
                  fair, affordable prices for good products at every level of
                  quality and breed.
                </p>
                <div className="text-center text-xl-start">
                  <a
                    href=""
                    className="d-inline-block text-white bg_purpleGrident border_radius40
                     p_nav_signIn fw-bold
                 fs_lg ff_Montserrat mt-4"
                  >
                    GIVE PURPLE PANDA A GO
                  </a>
                </div>
              </div>
            </div>
            <div className="col-7 col-lg-4 ms-md-5 pe-xl-4">
              <img
                className="w-100 transform_scale mushroomImg"
                src={mushroom}
                alt="mushroom"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Price;
