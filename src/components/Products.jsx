import React from "react";
import mushrooms from "../assets/img/png/mushrooms.png";
import bulk from "../assets/img/png/bulk.png";
import Cannabis from "../assets/img/png/cannabis.png";
import Edibles from "../assets/img/png/ebibles.png";
import CBD from "../assets/img/png/cbd.png";
import Vapes from "../assets/img/png/vapes.png";
import Extracts from "../assets/img/png/extracts.png";

function Products() {
  return (
    <>
      <section>
        <div className="container mt-2 pb-4">
          <div className="row justify-content-between">
            <div className="col">
              <div className="d-flex flex-column productsHover align-items-center">
                <img className="w_164" src={mushrooms} alt="mushrooms" />
                <p className="text-center ff_Philosopher fw-bold fs_xl text-white mt-2">
                  Mushrooms
                </p>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column productsHover align-items-center">
                <img className="w_164" src={Extracts} alt="mushrooms" />
                <p className="text-center ff_Philosopher fw-bold fs_xl text-white mt-2">
                  Extracts
                </p>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column align-items-center productsHover">
                <img className="w_164" src={Vapes} alt="mushrooms" />
                <p className="text-center ff_Philosopher fw-bold fs_xl text-white mt-2">
                  Vapes & Accessories
                </p>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column productsHover align-items-center">
                <img className="w_164" src={CBD} alt="mushrooms" />
                <p className="text-center ff_Philosopher fw-bold fs_xl text-white mt-2">
                  CBD
                </p>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column productsHover align-items-center">
                <img className="w_164" src={Edibles} alt="mushrooms" />
                <p className="text-center ff_Philosopher fw-bold fs_xl text-white mt-2">
                  Edibles
                </p>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column productsHover align-items-center">
                <img className="w_164" src={Cannabis} alt="mushrooms" />
                <p className="text-center ff_Philosopher fw-bold fs_xl text-white mt-2">
                  Cannabis
                </p>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column productsHover align-items-center">
                <img className="w_164" src={bulk} alt="mushrooms" />
                <p className="text-center ff_Philosopher fw-bold fs_xl text-white mt-2">
                  Bulk Orders
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
