import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function OurRange() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <section className="py-3 py-md-5">
        <div className="container">
          <div className="ourRangeBG py-md-5 px-3 px-md-5 border_radius10">
            <h2
              className="text-white fw-bold fs_xl4 text-center mb-0 py-3 py-md-5"
              data-aos="fade-up"
              data-aos-anchor-placement="top"
              data-aos-delay="400"
              data-aos-offset="200"
            >
              Our <span className="text_purpleGrident">Range</span>
            </h2>
            <div className="col-7 mx-auto">
              <p
                className="fw-normal text-white ff_Montserrat fs_md text-center mt-sm-4"
                data-aos="fade-up"
                data-aos-anchor-placement="top"
                data-aos-delay="400"
                data-aos-offset="200"
              >
                We have a variety of different recreational and medicinal items
                in our range, including cannabis, vapes, edibles, magic
                mushrooms, extracts, and CBD products, to help you unwind, have
                fun, and even do some valuable soul searching.
              </p>

              <p
                className="fw-normal text-white ff_Montserrat fs_md text-center mb-0 pb-5 pt-sm-3"
                data-aos="fade-up"
                data-aos-anchor-placement="top"
                data-aos-delay="400"
                data-aos-offset="200"
              >
                Whether you’re looking to order edibles online or browse for
                your new favorite strain, Purple Panda has got you covered.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurRange;
