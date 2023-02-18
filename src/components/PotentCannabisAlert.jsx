import React from "react";
import spaceShip from "../assets/img/webp/spaceShipPanda.webp";
import gif_countDown from "../assets/img/gif/conuntdown.gif";
import space_cloude from "../assets/img/webp/space_cloud.webp";

function PotentCannabisAlert() {
  return (
    <>
      <section className="py-md-5 overflow-hidden">
        <div className="container pt-md-5">
          <h2 className="text-white fs_xl4 text-center ff_Philosopher">
            Potent Cannabis <span className="text_purpleGrident">Alert</span>
          </h2>
          <p className="text-white fw-normal fs_md ff_Montserrat text-center">
            click here to try our most potent hand picked craft cannabis
          </p>
        </div>
        <div className="container-fluid px-0 mb-5">
          <div className="starBg pb-5 position-relative">
            <img
              className="position-absolute p_space_cloude1 position_space_cloude1 animation_cloudes"
              src={space_cloude}
              alt="cloude"
            />
            <img
              className="position-absolute p_space_cloude2 position_space_cloude2 animation_cloudes"
              src={space_cloude}
              alt="cloude"
            />
            <img
              className="position-absolute p_space_cloude3 position_space_cloude3 animation_cloudes"
              src={space_cloude}
              alt="cloude"
            />
            <img
              className="position-absolute p_space_cloude4 position_space_cloude4 animation_cloudes"
              src={space_cloude}
              alt="cloude"
            />
            <img
              className="position-absolute w_countDown p_countDown"
              src={gif_countDown}
              alt="countDown"
            />

            <div className="text-center col-12 col-sm-8 col-md-6 col-lg-5 mx-auto position-relative z_index_2">
              <img className="w-100" src={spaceShip} alt="spaceShip" />
            </div>
          </div>
          <div className="text-center mb_n20 position-relative z_index_2 pb-5">
            <a
              href=""
              className="d-inline-block text-white bg_purpleGrident border_radius40 p_nav_signIn
                     fw-bold fs_lg ff_Montserrat d-inline-block hoverBtn"
            >
              Take me to space cannabis
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default PotentCannabisAlert;
