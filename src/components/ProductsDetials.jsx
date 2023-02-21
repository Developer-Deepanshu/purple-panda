import React, { useEffect } from "react";
import products from "../assets/img/webp/purpleBottles.webp";
import SameDayDelivery from "../assets/img/webp/SameDayDelivery.webp";
import Discreetpackaging from "../assets/img/webp/Discreetpackaging.webp";
import buds from "../assets/img/webp/buds.webp";
import rewards from "../assets/img/webp/rewards.webp";
import mailOrders from "../assets/img/webp/mailOrders.webp";
import age from "../assets/img/webp/age.webp";
import SecureTransactions from "../assets/img/webp/SecureTransactions.webp";
import AOS from "aos";
import "aos/dist/aos.css";

function ProductsDetials() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <section className="py-4 py-mm-5" id="FAQ">
        <div className="container pt-md-5 pt-5">
          <div className="row align-items-center justify-content-between flex-column flex-xl-row pb-md-5 hoverShadowOpicity">
            <div className=" col-sm-9 col-xl-5 position-relative">
              <span className="position-absolute purpleBottleShadow"></span>
              <img
                data-aos="fade-right"
                data-aos-anchor-placement="top"
                data-aos-delay="300"
                data-aos-offset="200"
                className="w-100 position-relative z_index_2"
                src={products}
                alt="products"
              />
            </div>
            <div className="col-md-10 mx-auto col-xl-6 mt-5 mt-xl-0">
              <div className="d-flex justify-content-center justify-content-xl-end flex-column flex-sm-row align-items-center align-items-xl-start">
                <div className="pe-sm-5">
                  <div
                    className="d-flex align-items-center"
                    data-aos="fade-left"
                    data-aos-anchor-placement="top"
                    data-aos-delay="300"
                    data-aos-offset="200"
                  >
                    <img
                      className="w_50"
                      src={SameDayDelivery}
                      alt="Delivery"
                    />
                    <p className="mb-0 fs_md fw-semibold ff_Montserrat text-white ms-3">
                      Same Day Delivery
                    </p>
                  </div>
                  <div
                    className="d-flex align-items-center mt-sm-4"
                    data-aos="fade-left"
                    data-aos-anchor-placement="top"
                    data-aos-delay="300"
                    data-aos-offset="200"
                  >
                    <img
                      className="w_50"
                      src={Discreetpackaging}
                      alt="Packaging"
                    />
                    <p className="mb-0 fs_md fw-semibold ff_Montserrat text-white ms-3">
                      Discreet packaging
                    </p>
                  </div>
                  <div
                    className="d-flex align-items-center mt-sm-4"
                    data-aos="fade-left"
                    data-aos-anchor-placement="top"
                    data-aos-delay="300"
                    data-aos-offset="200"
                  >
                    <img className="w_50" src={buds} alt="buds" />
                    <p className="mb-0 fs_md fw-semibold ff_Montserrat text-white ms-3">
                      Premium Marijuana Buds
                    </p>
                  </div>
                  <div
                    className="d-flex align-items-center mt-sm-4"
                    data-aos="fade-left"
                    data-aos-anchor-placement="top"
                    data-aos-delay="300"
                    data-aos-offset="200"
                  >
                    <img className="w_50" src={rewards} alt="rewards" />
                    <p className="mb-0 fs_md fw-semibold ff_Montserrat text-white ms-3">
                      Collect Rewards
                    </p>
                  </div>
                </div>
                <div className="ms-sm-4">
                  <div
                    className="d-flex align-items-center mt-sm-4 mt-xl-0 mt-sm-0"
                    data-aos="fade-left"
                    data-aos-anchor-placement="top"
                    data-aos-delay="300"
                    data-aos-offset="200"
                  >
                    <img className="w_50" src={mailOrders} alt="mailOrders" />
                    <p className="mb-0 fs_md fw-semibold ff_Montserrat text-white ms-3">
                      Canada Wide Mail Orders
                    </p>
                  </div>
                  <div
                    className="d-flex align-items-center mt-sm-4"
                    data-aos="fade-left"
                    data-aos-anchor-placement="top"
                    data-aos-delay="300"
                    data-aos-offset="200"
                  >
                    <img className="w_50" src={age} alt="age" />
                    <p className="mb-0 fs_md fw-semibold ff_Montserrat text-white ms-3">
                      19+
                    </p>
                  </div>
                  <div
                    className="d-flex align-items-center mt-sm-4"
                    data-aos="fade-left"
                    data-aos-anchor-placement="top"
                    data-aos-delay="300"
                    data-aos-offset="200"
                  >
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
