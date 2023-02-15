import React from "react";
import panda_hero from "../assets/img/png/panda_hero.png";
import rectangle from "../assets/img/svg/panda_rectangle.svg";

function Hero() {
  return (
    <>
      <section className=" d-flex flex-column justify-content-center align-items-center flex-grow-1 position-relative">
        <img
          className="position-absolute bottom-0 end_n30 h_700 z_index_2"
          src={rectangle}
          alt="blure"
        />
        <div className="container">
          <div className="row align-items-center justify-content-between flex-column-reverse flex-xl-row">
            <div className="col-xl-6  mt-4 mt-xl-0">
              <h1 className="text-white fs_xl5 ff_Philosopher fw-semibold">
                Setting a <span className="text_purpleGrident">‘High’</span>{" "}
                Standard
              </h1>
              <p className="fw-normal ff_Montserrat fs_md text-white">
                We at Purple Panda are passionate about becoming the best online
                weed dispensary Canada has ever seen. We believe in good
                products, fair pricing, and top-notch customer service
              </p>
              <a
                href=""
                className="d-inline-block text-white bg_purpleGrident border_radius40 p_nav_signIn fw-bold fs_lg ff_Montserrat mt-3"
              >
                SIGN IN
              </a>
            </div>
            <div className="col-sm-8 col-xl-5 position-relative z_index_n1">
              <img className="w-100" src={panda_hero} alt="panda" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
