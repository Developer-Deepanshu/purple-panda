import React, { useEffect } from "react";
import expressImg from "../assets/img/webp/expressCannabisCrop.webp";
import AOS from "aos";
import "aos/dist/aos.css";

function Express() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <section className="position-relative">
        <span className="position-absolute prupleShadow_10 top-0 end-0"></span>
        <div className="container py-5">
          <div className="row align-items-center justify-content-between flex-column flex-xl-row">
            <div
              className=" col-sm-9 col-xl-6"
              data-aos="fade-right"
              data-aos-anchor-placement="top"
              data-aos-delay="400"
              data-aos-offset="200"
            >
              <img className="w-100" src={expressImg} alt="flower" />
            </div>
            <div className="col-md-9 col-xl-5">
              <div
                className="bg_filter p-4 border_left"
                data-aos="fade-left"
                data-aos-anchor-placement="top"
                data-aos-delay="400"
                data-aos-offset="200"
              >
                <h2 className="fw-bold fs_xl4 ff_Philosopher text-white">
                  <span className="text_purpleGrident">Express</span> Cannabis
                  Delivery
                </h2>
                <p className="text-white ff_Montserrat fs_md fw-normal">
                  One of the ways that we set ourselves apart from your average
                  dispensary is through our express delivery service. We’ve all
                  been there – work has finished early and you’ve gotten home,
                  but your jar is empty and the nearest dispensary is miles
                  away. With our service, you could have a box of premium
                  pre-rolls, a bag of bodacious buds, or a package of enticing
                  edibles at your door in just three hours!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Express;
