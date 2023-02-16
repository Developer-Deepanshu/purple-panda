import React from "react";
import stonerPatch from "../assets/img/png/stonerPatch.png";
import raw from "../assets/img/png/raw.png";
import egestas from "../assets/img/png/egestas.png";

function LatestBlogsAndNews() {
  return (
    <>
      <section className="py-5">
        <div className="LatestBlogsAndNews_bg">
          <div className="container">
            <h2 className="fw-bold text-center ff_Philosopher text-white fs_xl4 pt-5">
              Latest <span className="text_purpleGrident">Blogs</span> And{" "}
              <span className="text_purpleGrident">News</span>
            </h2>
            <p className="text-center text-white fw-normal fs_md mb-0">
              Pellentesque tincidunt fermentum mauris dignissim quam arcu. A
              netus natoque urna vivamus faucibus. Sollicitudin et nisl.
            </p>
            <div className="row pt-5">
              <div className=" col-10  col-sm-6 col-xl-4 mx-auto">
                <div className="popularItems_bg p-3">
                  <img className="w-100" src={stonerPatch} alt="stoner Patch" />
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
              <div className=" col-10 col-sm-6 col-xl-4 mx-auto mt-4 mt-sm-0">
                <div className="popularItems_bg p-3">
                  <img className="w-100" src={raw} alt="raw" />
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
              <div className=" col-10  col-sm-6 mt-4 mt-xl-0 col-xl-4 mx-auto">
                <div className="popularItems_bg p-3">
                  <img className="w-100" src={egestas} alt="egestas" />
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

export default LatestBlogsAndNews;
