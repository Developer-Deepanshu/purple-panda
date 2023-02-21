import React, { useEffect } from "react";
import panda_hero from "../assets/img/webp/panda_hero.webp";
import pandaGif from "../assets/img/gif/panda_gif.gif";
import upArrow from "../assets/img/webp/up-arrow.webp";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
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
        <span className="position-absolute heroPandaShadow positon_shadow"></span>
        <div className="container pt-5">
          <div className="row align-items-center justify-content-between flex-column flex-xl-row">
            <div
              className="col-xl-6  mt-4 mt-xl-0 position-relative z_index_3"
              data-aos="fade-right"
              data-aos-anchor-placement="top"
              data-aos-delay="300"
              data-aos-offset="200"
            >
              <h1 className="text-white fs_xl5 ff_Philosopher fw-semibold text-center text-xl-start">
                Setting a <span className="text_purpleGrident">‘High’</span>{" "}
                Standard
              </h1>
              <p className="fw-normal ff_Montserrat fs_md text-white text-center text-xl-start mw_500 mx_auto_max_xl">
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
            <div
              className="col-sm-8 col-xl-5 position-relative z_index_n1"
              data-aos="fade-left"
              data-aos-anchor-placement="top"
              data-aos-delay="300"
              data-aos-offset="200"
            >
              <img className="w-100" src={panda_hero} alt="panda" />
              <img
                className="border_radiusGif h_w_gif position-absolute position_gif"
                src={pandaGif}
                alt="gif"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
