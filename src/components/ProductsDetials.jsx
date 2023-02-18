import React from "react";
import products from "../assets/img/webp/OBJECTS_detials.webp";
import SameDayDelivery from "../assets/img/webp/SameDayDelivery.webp";
import Discreetpackaging from "../assets/img/webp/Discreetpackaging.webp";
import buds from "../assets/img/webp/buds.webp";
import rewards from "../assets/img/webp/rewards.webp";
import mailOrders from "../assets/img/webp/mailOrders.webp";
import age from "../assets/img/webp/age.webp";
import SecureTransactions from "../assets/img/webp/SecureTransactions.webp";

function ProductsDetials() {
  return (
    <>
      <section className="py-4 py-mm-5" id="FAQ">
        <div className="container pt-md-5 pt-5">
          <div className="row align-items-center justify-content-between flex-column flex-xl-row pb-md-5">
            <div className=" col-sm-9 col-xl-5">
              <img className="w-100" src={products} alt="products" />
            </div>
            <div className="col-md-10 mx-auto col-xl-6 mt-5 mt-xl-0">
              <div className="d-flex justify-content-center justify-content-xl-end flex-column flex-sm-row align-items-center align-items-xl-start">
                <div className="pe-sm-5">
                  <div className="d-flex align-items-center">
                    <img
                      className="w_50"
                      src={SameDayDelivery}
                      alt="Delivery"
                    />
                    <p className="mb-0 fs_md fw-semibold ff_Montserrat text-white ms-3">
                      Same Day Delivery
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-4">
                    <img
                      className="w_50"
                      src={Discreetpackaging}
                      alt="Packaging"
                    />
                    <p className="mb-0 fs_md fw-semibold ff_Montserrat text-white ms-3">
                      Discreet packaging
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-4">
                    <img className="w_50" src={buds} alt="buds" />
                    <p className="mb-0 fs_md fw-semibold ff_Montserrat text-white ms-3">
                      Premium Marijuana Buds
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-4">
                    <img className="w_50" src={rewards} alt="rewards" />
                    <p className="mb-0 fs_md fw-semibold ff_Montserrat text-white ms-3">
                      Collect Rewards
                    </p>
                  </div>
                </div>
                <div className="ms-sm-4">
                  <div className="d-flex align-items-center mt-4 mt-sm-0">
                    <img className="w_50" src={mailOrders} alt="mailOrders" />
                    <p className="mb-0 fs_md fw-semibold ff_Montserrat text-white ms-3">
                      Canada Wide Mail Orders
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-4">
                    <img className="w_50" src={age} alt="age" />
                    <p className="mb-0 fs_md fw-semibold ff_Montserrat text-white ms-3">
                      19+
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-4">
                    <img
                      className="w_50"
                      src={SecureTransactions}
                      alt="Secure Transactions"
                    />
                    <p className="mb-0 fs_md fw-semibold ff_Montserrat text-white ms-3">
                      Secure Transactions
                    </p>
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

export default ProductsDetials;
