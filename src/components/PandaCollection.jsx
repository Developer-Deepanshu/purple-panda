import React from "react";
import panda1 from "../assets/img/webp/panda_1.webp";
import panda2 from "../assets/img/webp/panda_2.webp";
import panda3 from "../assets/img/webp/panda_3.webp";

function PandaCollection() {
  return (
    <>
      <section className="pt-md-5 mt-md-5">
        <div className="MostPopularItems_bg py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className=" col-10 col-sm-6 col-xl-4">
                <div className="outlinePanda">
                  <img className="w-100 imgPanda" src={panda1} alt="panda" />
                  <p className="mt-3 fw-bold fs_xl2 text-white ff_Philosopher text-center">
                    <span className="text_purpleGrident">20% Off</span> For
                    First Time Customers
                  </p>
                </div>
              </div>
              <div className=" col-10 col-sm-6 col-xl-4">
                <div className="outlinePanda">
                  <img className="w-100 imgPanda" src={panda2} alt="panda" />
                  <p className="mt-3 fw-bold fs_xl2 text-white ff_Philosopher text-center">
                    Purple Panda’s{" "}
                    <span className="text_purpleGrident">
                      Picks Of The week
                    </span>
                  </p>
                </div>
              </div>
              <div className=" col-10 col-sm-6 col-xl-4 mt-4 mt-xl-0">
                <div className="outlinePanda">
                  <img className="w-100 imgPanda" src={panda3} alt="panda" />
                  <p className="mt-3 fw-bold fs_xl2 text-white ff_Philosopher text-center">
                    <span className="text_purpleGrident">Collect rewards</span>{" "}
                    points every time you purchase
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PandaCollection;
