import React from "react";
import Footer from "./Footer";
import Form from "./Form";
import NavBar from "./NavBar";
import StoreHours from "./StoreHours";

function Contect() {
  return (
    <>
      <div className="bg_blue">
        <div className="Contact_bg">
          <div className="container-fluid p-0">
            <NavBar />
            <div className="py-5">
              <h2 className="fs_xl4 text-white text-center ff_Philosopher fw-normal mb-0">
                Contact
              </h2>
              <p className="text-white text-center fw-normal ff_Montserrat fs_md mb-0 pb-5">
                Home &#62; Contact
              </p>
            </div>
          </div>
        </div>
        <Form />
        <StoreHours />
        <Footer />
      </div>
    </>
  );
}

export default Contect;
