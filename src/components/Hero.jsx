import React from "react";
import panda_hero from "../assets/img/png/panda_hero.png";
import rectangle from "../assets/img/svg/panda_rectangle.svg";
import pandaGif from "../assets/img/gif/panda_gif.gif";
import upArrow from "../assets/img/png/up-arrow.png";

function Hero() {
  window.onscroll = () => {
    toggleTopButton();
  };
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function toggleTopButton() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("back-to-up").classList.remove("d-none");
    } else {
      document.getElementById("back-to-up").classList.add("d-none");
    }
  }
  return (
    <>
      <section
        className=" d-flex flex-column justify-content-center align-items-center flex-grow-1
       position-relative"
      >
        <button
          className="color_back_to_top rounded-circle position-fixed bottom-0 end-0 translate-middle hoverBtn d-none "
          onClick={scrollToTop}
          id="back-to-up"
        >
          <img className="w-100" src={upArrow} alt="back to top" />
        </button>
        {/* <img
          className="position-absolute bottom-0 end_n30 h_700 z_index_2"
          src={rectangle}
          alt="blure"
        /> */}
        <span className="position-absolute heroPandaShadow positon_shadow"></span>
        <div className="container pt-5">
          <div className="row align-items-center justify-content-between flex-column flex-xl-row">
            <div className="col-xl-6  mt-4 mt-xl-0 position-relative z_index_3">
              <h1 className="text-white fs_xl5 ff_Philosopher fw-semibold text-center text-xl-start">
                Setting a <span className="text_purpleGrident">‘High’</span>{" "}
                Standard
              </h1>
              <p className="fw-normal ff_Montserrat fs_md text-white text-center text-xl-start">
                We at Purple Panda are passionate about becoming the best online
                weed dispensary Canada has ever seen. We believe in good
                products, fair pricing, and top-notch customer service
              </p>
              <div className="text-center text-xl-start">
                <a
                  href=""
                  className="d-inline-block text-white bg_purpleGrident border_radius40 p_nav_signIn
                   fw-bold fs_lg ff_Montserrat mt-3 hoverBtn"
                >
                  SIGN IN
                </a>
              </div>
            </div>
            <div className="col-sm-8 col-xl-5 position-relative z_index_n1">
              <img
                className="border_radiusGif h_w_gif position-absolute position_gif position_gif_sm
                 position_gif_md position_gif_lg position_gif_xl position_gif_xxl"
                src={pandaGif}
                alt="gif"
              />
              <img className="w-100" src={panda_hero} alt="panda" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
