import React from "react";
import star from "../assets/img/svg/purrpleStart.svg";

function OurClassifications() {
  return (
    <>
      <section className="pb-5">
        <div className="OurClassifications_bg">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-xl-6">
                <div className="OurClassifications_card_bg py-4 px-5">
                  <h2 className="fs_xl4 text-white fw-bold ff_Philosopher mb-3">
                    Our
                    <span className="text_purpleGrident"> Classifications</span>
                  </h2>
                  <p className="text-white fw-normal ff_Montserrat fs_md mb-3">
                    We’re proud of all our weed, but we still classify it based
                    on quality and price, with our levels classed at:
                  </p>
                  <div className="d-flex align-items-center">
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
                  <p className="fs_xl text-white ff_Montserrat fw-bold">
                    2-Star
                  </p>
                  <p className="text-white fw-normal ff_Montserrat fs_md mb-3">
                    Very affordable , entry level quality
                  </p>
                  <div className="d-flex align-items-center mt-5">
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
                  <p className="fs_xl text-white ff_Montserrat fw-bold">
                    3-Star
                  </p>
                  <p className="text-white fw-normal ff_Montserrat fs_md mb-3">
                    Tried, tested, and affordable.
                  </p>
                  <div className="d-flex align-items-center mt-5">
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
                  <p className="fs_xl text-white ff_Montserrat fw-bold">
                    4-Star
                  </p>
                  <p className="text-white fw-normal ff_Montserrat fs_md mb-3">
                    A step up in terms of taste, high, and quality.
                  </p>
                  <div className="d-flex align-items-center mt-5">
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
                  <p className="fs_xl text-white ff_Montserrat fw-bold">
                    5-Star
                  </p>
                  <p className="text-white fw-normal ff_Montserrat fs_md mb-3">
                    Top-shelf buds for those special occasions.
                  </p>
                  <a
                    href=""
                    className="d-inline-block text-white bg_purpleGrident border_radius40 p_nav_signIn
                     fw-bold fs_lg ff_Montserrat mt-5"
                  >
                    TRY PURPLE PANDA TODAY
                  </a>
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
