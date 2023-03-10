import React, { useEffect } from "react";
import medical from "../assets/img/webp/cannabis_medical.webp";
import assorted from "../assets/img/webp/cannabis_assorted.webp";
import blackGold from "../assets/img/webp/cannabis_blackGold.webp";
import madicalSticks from "../assets/img/webp/cannabis_sticks.webp";
import flower from "../assets/img/webp/cannabis_flower.webp";
import AOS from "aos";
import "aos/dist/aos.css";

function Cannabis() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <section className="pt-md-5 pb-5 position-relative">
        <span className="position-absolute prupleShadow_10 top-0 end-0"></span>
        <div className="aboutUsBG">
          <div className="container py-5">
            <h2
              className="text-white text-center ff_Philosopher fw-bold fs_xl4"
              data-aos="fade-up"
              data-aos-anchor-placement="top"
              data-aos-delay="300"
              data-aos-offset="200"
            >
              Cannabis
            </h2>
            <div className="col-lg-8 mx-auto">
              <p
                className="text-center ff_Montserrat fs_md text-white fw-normal"
                data-aos="fade-up"
                data-aos-anchor-placement="top"
                data-aos-delay="300"
                data-aos-offset="200"
              >
                While we stock all sorts of products to make you feel great,
                we’re experts and lovers of cannabis at heart. We offer a wide
                range of buds each with different highs, flavors, and aromas, so
                you can find the perfect joint-filler, bowl-packer, or pipe
                clearer to suit your tastes
              </p>
            </div>
            <div
              className="row align-items-center flex-column-reverse flex-xl-row
             mt-5"
            >
              <div className="col-xl-6 mt-xl-5">
                <div
                  className="bg_filter p-3 p-sm-5 border_left"
                  data-aos="fade-right"
                  data-aos-anchor-placement="top"
                  data-aos-delay="300"
                  data-aos-offset="200"
                >
                  <h2 className="fw-normal text-white ff_Philosopher fs_xl4 text-center">
                    Strain
                    <span className="text_purpleGrident">Families</span>{" "}
                  </h2>
                  <p className="text-white ff_Montserrat fs_md fw-normal mb-0 text-center text-lg-start">
                    We stock the three main families of cannabis at Purple
                    Panda, each of which has its own qualities.
                  </p>
                  <div className="d-flex align-items-center mt-4 flex-column flex-sm-row">
                    <p className="fs_xl text-white fw-semibold ff_Montserrat">
                      Indica:
                    </p>
                    <p className="text-white ff_Montserrat fs_md fw-normal mb-0 ms-3 text-center text-lg-start">
                      These are your bedtime buds, great for relaxing at the end
                      of the day and for treating stress and anxiety.
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-4 flex-column flex-sm-row">
                    <p className="fs_xl text-white fw-semibold ff_Montserrat">
                      Sativa:
                    </p>
                    <p className="text-white ff_Montserrat fs_md fw-normal mb-0 ms-3 text-center text-lg-start">
                      Smoke up some Sativa for a boost of energy and creativity,
                      perfect for a sunny summer’s day with friends!
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-4 flex-column flex-sm-row">
                    <p className="fs_xl text-white fw-semibold ff_Montserrat">
                      Hybrid:
                    </p>
                    <p className="text-white ff_Montserrat fs_md fw-normal mb-0 ms-3 text-center text-lg-start">
                      Get the best of both worlds with our Hybrid range,
                      bringing together the sensations and flavors of Indica and
                      Sativa for something totally unique.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-9 col-xl-5 mb-5 mb-xl-0">
                <div
                  className="d_grid"
                  data-aos="fade-left"
                  data-aos-anchor-placement="top"
                  data-aos-delay="300"
                  data-aos-offset="200"
                >
                  <div className="grid_iteam1 pt-4">
                    <img className="w-100 h-100" src={flower} alt="flower" />
                  </div>
                  <div className="grid_iteam2">
                    <img
                      className="w-100 h-100"
                      src={madicalSticks}
                      alt="madicalSticks"
                    />
                  </div>
                  <div className="grid_iteam3">
                    <img
                      className="w-100 h-100"
                      src={blackGold}
                      alt="blackGold"
                    />
                  </div>
                  <div className="grid_iteam4">
                    <img
                      className="w-100 h-100"
                      src={assorted}
                      alt="assorted"
                    />
                  </div>
                  <div className="grid_iteam5">
                    <img className="w-100 h-100" src={medical} alt="medical" />
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

export default Cannabis;
