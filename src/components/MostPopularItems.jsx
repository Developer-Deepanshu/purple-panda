import React from "react";
import stoner from "../assets/img/png/stoner.png";
import stick from "../assets/img/png/stonerSticks.png";
import atomic from "../assets/img/png/atomic.png";

function MostPopularItems() {
  return (
    <>
      <section className="py-5">
        <div className="MostPopularItems_bg">
          <div className="container">
            <h2 className="fw-bold text-center ff_Philosopher text-white fs_xl4 pt-5">
              Most <span className="text_purpleGrident">Popular</span> Items
            </h2>
            <p className="text-center text-white fw-normal fs_md mb-0">
              Pellentesque tincidunt fermentum mauris dignissim quam arcu. A
              netus natoque urna vivamus faucibus. Sollicitudin et nisl.
            </p>
            <div className="row pt-5">
              <div className=" col-10 col-sm-6 col-md-5 col-xl-3 mx-auto">
                <div className="popularItems_bg p-3">
                  <img className="w-100" src={stoner} alt="stoner Patch" />
                  <p className="text-white fw-noraml fs_xl ff_Montserrat mt-3">
                    Stoner Patch(500mg)
                  </p>
                  <p className="fs_xl text_purpleGrident fw-bold ff_Montserrat mt-3 mb-4">
                    $20.00
                  </p>
                  <a
                    href=""
                    className="d-inline-block text-white bg_purpleGrident border_radius40 p_addTOCart
                     fw-bold fs_lg ff_Montserrat"
                  >
                    ADD TO CART
                  </a>
                </div>
              </div>
              <div className=" col-10 col-sm-6 col-md-5 col-xl-3 mx-auto">
                <div className="popularItems_bg p-3">
                  <img className="w-100" src={atomic} alt="stoner atomic" />
                  <p className="text-white fw-noraml fs_xl ff_Montserrat mt-3">
                    Stoner Patch(500mg)
                  </p>
                  <p className="fs_xl text_purpleGrident fw-bold ff_Montserrat mt-3 mb-4">
                    $20.00
                  </p>
                  <a
                    href=""
                    className="d-inline-block text-white bg_purpleGrident border_radius40 p_addTOCart
                     fw-bold fs_lg ff_Montserrat"
                  >
                    ADD TO CART
                  </a>
                </div>
              </div>
              <div className=" col-10 col-sm-6 col-md-5 mt-4 mt-xl-0 col-xl-3 mx-auto">
                <div className="popularItems_bg p-3">
                  <img className="w-100" src={stick} alt="stoner stick" />
                  <p className="text-white fw-noraml fs_xl ff_Montserrat mt-3">
                    Stoner Patch(500mg)
                  </p>
                  <p className="fs_xl text_purpleGrident fw-bold ff_Montserrat mt-3 mb-4">
                    $20.00
                  </p>
                  <a
                    href=""
                    className="d-inline-block text-white bg_purpleGrident border_radius40 p_addTOCart
                     fw-bold fs_lg ff_Montserrat"
                  >
                    ADD TO CART
                  </a>
                </div>
              </div>
              <div className=" col-10 col-sm-6 col-md-5 mt-4 mt-xl-0 col-xl-3 mx-auto">
                <div className="popularItems_bg p-3">
                  <img className="w-100" src={stick} alt="stoner stick" />
                  <p className="text-white fw-noraml fs_xl ff_Montserrat mt-3">
                    Stoner Patch(500mg)
                  </p>
                  <p className="fs_xl text_purpleGrident fw-bold ff_Montserrat mt-3 mb-4">
                    $20.00
                  </p>
                  <a
                    href=""
                    className="d-inline-block text-white bg_purpleGrident border_radius40 p_addTOCart
                     fw-bold fs_lg ff_Montserrat"
                  >
                    ADD TO CART
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

export default MostPopularItems;
