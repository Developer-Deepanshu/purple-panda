import React, { useEffect } from "react";
import leftLeave from "../assets/img/webp/baseOnLeft.webp";
import rightLeave from "../assets/img/webp/baseOnRight.webp";
import AOS from "aos";
import "aos/dist/aos.css";

function BaseOn() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <section className="pb-md-5 pt-sm-5 pt-xl-0">
        <div className="container py-5">
          <div className="col-lg-7 mx-auto pb-4">
            <h3
              className="fs_xl text-white ff_Montserrat fw-semibold mb-0 text-center"
              data-aos="fade-up"
              data-aos-anchor-placement="top"
              data-aos-delay="400"
              data-aos-offset="200"
            >
              We’re based in both the{" "}
              <span className="text_purpleGrident">Greater Toronto Area</span>,
              with our delivery service covering:
            </h3>
            <p
              className="fs_md text-white ff_Montserrat fw-normal text-center mb-0 mt-3"
              data-aos="fade-up"
              data-aos-anchor-placement="top"
              data-aos-delay="400"
              data-aos-offset="200"
            >
              If you’re in any of these cities and need a little pick me up, you
              know where to go!
            </p>
          </div>
          <div className="row pt-sm-4 flex-column flex-lg-row">
            <div className="mx-auto col-sm-10 col-lg-6 position-relative">
              <img
                className="position-absolute bottom-0 end-0"
                src={leftLeave}
                alt="leftLeav"
              />
              <div className="bg_bseOn d-flex align-items-center justify-content-center flex-column py-5">
                <div className="py-3">
                  <div
                    className="d-flex align-items-center mb-3"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top"
                    data-aos-delay="400"
                    data-aos-offset="200"
                  >
                    <span className="d-inline-block pink_dots"></span>
                    <p className="mb-0 ff_Montserrat fw-normal fs_xl2 text-white ms-3">
                      Mississauga
                    </p>
                  </div>
                  <div
                    className="d-flex align-items-center mb-3"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top"
                    data-aos-delay="400"
                    data-aos-offset="200"
                  >
                    <span className="d-inline-block pink_dots"></span>
                    <p className="mb-0 ff_Montserrat fw-normal fs_xl2 text-white ms-3">
                      Oakville
                    </p>
                  </div>
                  <div
                    className="d-flex align-items-center mb-3"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top"
                    data-aos-delay="400"
                    data-aos-offset="200"
                  >
                    <span className="d-inline-block pink_dots"></span>
                    <p className="mb-0 ff_Montserrat fw-normal fs_xl2 text-white ms-3">
                      Brampton
                    </p>
                  </div>
                  <div
                    className="d-flex align-items-center"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top"
                    data-aos-delay="400"
                    data-aos-offset="200"
                  >
                    <span className="d-inline-block pink_dots"></span>
                    <p className="mb-0 ff_Montserrat fw-normal fs_xl2 text-white ms-3">
                      Etobicoke
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto col-sm-10 col-lg-6 position-relative mt-4 mt-lg-0">
              <img
                className="position-absolute rightLeave"
                src={rightLeave}
                alt="leftLeav"
              />
              <div className="bg_bseOn d-flex align-items-center justify-content-center flex-column py-5">
                <div className="py-3">
                  <div
                    className="d-flex align-items-center mb-3"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top"
                    data-aos-delay="400"
                    data-aos-offset="200"
                  >
                    <span className="d-inline-block pink_dots"></span>
                    <p className="mb-0 ff_Montserrat fw-normal fs_xl2 text-white ms-3">
                      Toronto
                    </p>
                  </div>
                  <div
                    className="d-flex align-items-center mb-3"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top"
                    data-aos-delay="400"
                    data-aos-offset="200"
                  >
                    <span className="d-inline-block pink_dots"></span>
                    <p className="mb-0 ff_Montserrat fw-normal fs_xl2 text-white ms-3">
                      Vaughan
                    </p>
                  </div>
                  <div
                    className="d-flex align-items-center mb-3"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top"
                    data-aos-delay="400"
                    data-aos-offset="200"
                  >
                    <span className="d-inline-block pink_dots"></span>
                    <p className="mb-0 ff_Montserrat fw-normal fs_xl2 text-white ms-3">
                      Markham
                    </p>
                  </div>
                  <div
                    className="d-flex align-items-center"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top"
                    data-aos-delay="400"
                    data-aos-offset="200"
                  >
                    <span className="d-inline-block pink_dots"></span>
                    <p className="mb-0 ff_Montserrat fw-normal fs_xl2 text-white ms-3">
                      Richmond
                    </p>
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

export default BaseOn;
