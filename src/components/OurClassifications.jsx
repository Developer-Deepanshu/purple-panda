import React, { useEffect } from "react";
import star from "../assets/img/webp/purrpleStart.webp";
import AOS from "aos";
import "aos/dist/aos.css";

function OurClassifications() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <section className="py-md-5">
        <div className="OurClassifications_bg">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-xl-6 mx_max_xl_auto ">
                <div className="OurClassifications_card_bg py-4 px-3 px-sm-5">
                  <h2
                    className="fs_xl4 text-white fw-bold ff_Philosopher mb-3 text-center text-lg-start"
                    data-aos="fade-right"
                    data-aos-anchor-placement="top"
                    data-aos-delay="300"
                    data-aos-offset="200"
                  >
                    Our
                    <span className="text_purpleGrident"> Classifications</span>
                  </h2>
                  <p
                    className="text-white fw-normal ff_Montserrat fs_md mb-3 text-center text-lg-start"
                    data-aos="fade-right"
                    data-aos-anchor-placement="top"
                    data-aos-delay="300"
                    data-aos-offset="200"
                  >
                    We’re proud of all our weed, but we still classify it based
                    on quality and price, with our levels classed at:
                  </p>
                  <div
                    className="d-flex align-items-center justify-content-center
                   justify-content-lg-start"
                    data-aos="fade-right"
                    data-aos-anchor-placement="top"
                    data-aos-delay="300"
                    data-aos-offset="200"
                  >
                    <img
                      className="d-inline-block w_20"
                      src={star}
                      alt="star"
                    />
                    <img
                      className="d-inline-block w_20 ms-1"
                      src={star}
                      alt="star"
                    />
                  </div>
                  <p
                    className="fs_xl text-white ff_Montserrat fw-bold text-center text-lg-start"
                    data-aos="fade-right"
                    data-aos-anchor-placement="top"
                    data-aos-delay="300"
                    data-aos-offset="200"
                  >
                    2-Star
                  </p>
                  <p
                    className="text-white fw-normal ff_Montserrat fs_md mb-3 text-center text-lg-start"
                    data-aos="fade-right"
                    data-aos-anchor-placement="top"
                    data-aos-delay="300"
                    data-aos-offset="200"
                  >
                    Very affordable , entry level quality
                  </p>
                  <div
                    className="d-flex align-items-center mt-5 justify-content-center justify-content-lg-start"
                    data-aos="fade-right"
                    data-aos-anchor-placement="top"
                    data-aos-delay="300"
                    data-aos-offset="200"
                  >
                    <img
                      className="d-inline-block w_20"
                      src={star}
                      alt="star"
                    />
                    <img
                      className="d-inline-block w_20 ms-1"
                      src={star}
                      alt="star"
                    />
                    <img
                      className="d-inline-block w_20 ms-1"
                      src={star}
                      alt="star"
                    />
                  </div>
                  <p
                    className="fs_xl text-white ff_Montserrat fw-bold text-center text-lg-start"
                    data-aos="fade-right"
                    data-aos-anchor-placement="top"
                    data-aos-delay="300"
                    data-aos-offset="200"
                  >
                    3-Star
                  </p>
                  <p
                    className="text-white fw-normal ff_Montserrat fs_md mb-3 text-center text-lg-start"
                    data-aos="fade-right"
                    data-aos-anchor-placement="top"
                    data-aos-delay="300"
                    data-aos-offset="200"
                  >
                    Tried, tested, and affordable.
                  </p>
                  <div
                    className="d-flex align-items-center mt-5 justify-content-center justify-content-lg-start"
                    data-aos="fade-right"
                    data-aos-anchor-placement="top"
                    data-aos-delay="300"
                    data-aos-offset="200"
                  >
                    <img
                      className="d-inline-block w_20"
                      src={star}
                      alt="star"
                    />
                    <img
                      className="d-inline-block w_20 ms-1"
                      src={star}
                      alt="star"
                    />
                    <img
                      className="d-inline-block w_20 ms-1"
                      src={star}
                      alt="star"
                    />
                    <img
                      className="d-inline-block w_20 ms-1"
                      src={star}
                      alt="star"
                    />
                  </div>
                  <p
                    className="fs_xl text-white ff_Montserrat fw-bold text-center text-lg-start"
                    data-aos="fade-right"
                    data-aos-anchor-placement="top"
                    data-aos-delay="300"
                    data-aos-offset="200"
                  >
                    4-Star
                  </p>
                  <p
                    className="text-white fw-normal ff_Montserrat fs_md mb-3 text-center text-lg-start"
                    data-aos="fade-right"
                    data-aos-anchor-placement="top"
                    data-aos-delay="300"
                    data-aos-offset="200"
                  >
                    A step up in terms of taste, high, and quality.
                  </p>
                  <div
                    className="d-flex align-items-center mt-5 justify-content-center justify-content-lg-start"
                    data-aos="fade-right"
                    data-aos-anchor-placement="top"
                    data-aos-delay="300"
                    data-aos-offset="200"
                  >
                    <img
                      className="d-inline-block w_20"
                      src={star}
                      alt="star"
                    />
                    <img
                      className="d-inline-block w_20 ms-1"
                      src={star}
                      alt="star"
                    />
                    <img
                      className="d-inline-block w_20 ms-1"
                      src={star}
                      alt="star"
                    />
                    <img
                      className="d-inline-block w_20 ms-1"
                      src={star}
                      alt="star"
                    />
                    <img
                      className="d-inline-block w_20 ms-1"
                      src={star}
                      alt="star"
                    />
                  </div>
                  <p
                    className="fs_xl text-white ff_Montserrat fw-bold text-center text-lg-start"
                    data-aos="fade-right"
                    data-aos-anchor-placement="top"
                    data-aos-delay="300"
                    data-aos-offset="200"
                  >
                    5-Star
                  </p>
                  <p
                    className="text-white fw-normal ff_Montserrat fs_md mb-3 text-center text-lg-start"
                    data-aos="fade-right"
                    data-aos-anchor-placement="top"
                    data-aos-delay="300"
                    data-aos-offset="200"
                  >
                    Top-shelf buds for those special occasions.
                  </p>
                  <div
                    className="text-center text-lg-start text-lg-row"
                    data-aos="fade-right"
                    data-aos-anchor-placement="top"
                    data-aos-delay="300"
                    data-aos-offset="200"
                  >
                    <a
                      href=""
                      className="d-inline-block text-white bg_purpleGrident border_radius40 p_nav_signIn
                     fw-bold fs_lg ff_Montserrat mt-5 hoverBtn"
                      data-aos="fade-right"
                      data-aos-anchor-placement="top"
                      data-aos-delay="300"
                      data-aos-offset="200"
                    >
                      TRY PURPLE PANDA TODAY
                    </a>
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

export default OurClassifications;
