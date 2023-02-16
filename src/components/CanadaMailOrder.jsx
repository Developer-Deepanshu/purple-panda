import React from "react";
import imgTask from "../assets/img/svg/task_CanadaMail.svg";
import mobilePay from "../assets/img/svg/mobilePay_canadaMail.svg";
import cart from "../assets/img/svg/cart_canadaMail.svg";

function CanadaMailOrder() {
  return (
    <>
      <section className="bg_canadaMail">
        <div className="container pt-5">
          <h2 className="fw-bold ff_Philosopher fs_xl4 text-white text-center pt-5">
            Canada Wide <span className="text_purpleGrident">Mail Orders</span>
          </h2>
          <p className="text-white fw-normal ff_Montserrat fs_md text-center">
            Purple Panda offers discreet mail orders to all provinces in Canada,
            we have new list of products everyday to serve your needs whether
            its recreational or medinical use. We ship the next business day
            from Monday-Thursdays, EMT payment is required for all mail orders
          </p>
          <div className="row mt-5 pt-5 justify-content-center">
            <div className="col-sm-6 col-lg-4">
              <div className="bgCardsCanadaMail px-4 pt-5 cardHover position-relative">
                <div
                  className="bg_blue100 circles_canadaMail fs_xl3 ff_Montserrat fw-semibold d-flex
                 align-items-center justify-content-center position-absolute"
                >
                  01
                </div>
                <img className="pt-5" src={imgTask} alt="task" />
                <p className="text-white fw-normal ff_Montserrat fs_md pt-4 mb-5">
                  Register for an account first, then head on other to our shop
                  selection
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 mt-5 pt-5 mt-sm-0 pt-sm-0">
              <div className="bgCardsCanadaMail px-4 pt-5 cardHover position-relative">
                <div
                  className="bg_blue100 circles_canadaMail fs_xl3 ff_Montserrat fw-semibold d-flex
                 align-items-center justify-content-center position-absolute"
                >
                  02
                </div>
                <img className="pt-5" src={cart} alt="cart" />
                <p className="text-white fw-normal ff_Montserrat fs_md pt-4 mb-5">
                  Register for an account first, then head on other to our shop
                  selection
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 mt-5 pt-5 mt-lg-0 pt-lg-0">
              <div className="bgCardsCanadaMail px-4 pt-5 cardHover position-relative">
                <div
                  className="bg_blue100 circles_canadaMail fs_xl3 ff_Montserrat fw-semibold d-flex
                 align-items-center justify-content-center position-absolute"
                >
                  03
                </div>
                <img className="pt-5" src={mobilePay} alt="mobilePay" />
                <p className="text-white fw-normal ff_Montserrat fs_md pt-4 mb-5">
                  Register for an account first, then head on other to our shop
                  selection
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CanadaMailOrder;
