import React from "react";
import medical from "../assets/img/png/cannabis_medical.png";
import assorted from "../assets/img/png/cannabis_assorted.png";
import blackGold from "../assets/img/png/cannabis_blackGold.png";
import madicalSticks from "../assets/img/png/cannabis_sticks.png";
import flower from "../assets/img/png/cannabis_flower.png";

function Cannabis() {
  return (
    <>
      <section className="pt-md-5 pb-5">
        <div className="aboutUsBG">
          <div className="container py-5">
            <h2 className="text-white text-center ff_Philosopher fw-bold fs_xl4">
              Cannabis
            </h2>
            <p className="text-center ff_Montserrat fs_md text-white fw-normal">
              While we stock all sorts of products to make you feel great, we’re
              experts and lovers of cannabis at heart. We offer a wide range of
              buds each with different highs, flavors, and aromas, so you can
              find the perfect joint-filler, bowl-packer, or pipe clearer to
              suit your tastes
            </p>
            <div
              className="row align-items-center flex-column-reverse flex-xl-row
             mt-5"
            >
              <div className="col-xl-6 mt-xl-5">
                <div className="bg_filter p-3 p-sm-5 border_left">
                  <h2 className="fw-normal text-white ff_Philosopher fs_xl4 text-center">
                    Strain
                    <span className="text_purpleGrident">Families</span>{" "}
                  </h2>
                  <p className="text-white ff_Montserrat fs_md fw-normal mb-0 text-center">
                    We stock the three main families of cannabis at Purple
                    Panda, each of which has its own qualities.
                  </p>
                  <div className="d-flex align-items-center mt-4 flex-column flex-sm-row">
                    <p className="fs_xl text-white fw-semibold ff_Montserrat">
                      Indica:
                    </p>
                    <p className="text-white ff_Montserrat fs_md fw-normal mb-0 ms-3 text-center">
                      These are your bedtime buds, great for relaxing at the end
                      of the day and for treating stress and anxiety.
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-4 flex-column flex-sm-row">
                    <p className="fs_xl text-white fw-semibold ff_Montserrat">
                      Sativa:
                    </p>
                    <p className="text-white ff_Montserrat fs_md fw-normal mb-0 ms-3 text-center">
                      Smoke up some Sativa for a boost of energy and creativity,
                      perfect for a sunny summer’s day with friends!
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-4 flex-column flex-sm-row">
                    <p className="fs_xl text-white fw-semibold ff_Montserrat">
                      Hybrid:
                    </p>
                    <p className="text-white ff_Montserrat fs_md fw-normal mb-0 ms-3 text-center">
                      Get the best of both worlds with our Hybrid range,
                      bringing together the sensations and flavors of Indica and
                      Sativa for something totally unique.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-9 col-xl-6 mb-5 mb-xl-0">
                <div className="d_grid">
                  <div className="grid_iteam1 pt-4">
                    <img className="w-100" src={flower} alt="flower" />
                  </div>
                  <div className="grid_iteam2">
                    <img
                      className="w-100"
                      src={madicalSticks}
                      alt="madicalSticks"
                    />
                  </div>
                  <div className="grid_iteam3">
                    <img className="w-100" src={blackGold} alt="blackGold" />
                  </div>
                  <div className="grid_iteam4">
                    <img className="w-100" src={assorted} alt="assorted" />
                  </div>
                  <div className="grid_iteam5">
                    <img className="w-100" src={medical} alt="medical" />
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
