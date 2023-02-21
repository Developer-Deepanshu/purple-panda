import React from "react";
import upArrow from "../assets/img/webp/up-arrow.webp";
import Footer from "./Footer";
import Form from "./Form";
import NavBar from "./NavBar";
import StoreHours from "./StoreHours";

function Contect() {
  window.onscroll = () => {
    toggleTopButton();
  };
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function toggleTopButton() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("back-to-up").classList.remove("d-none");
    } else {
      document.getElementById("back-to-up").classList.add("d-none");
    }
  }
  return (
    <>
      <div className="bg_blue">
        <button
          className="color_back_to_top rounded-circle position-fixed bottom-0 end-0 translate-middle hoverBtn d-none "
          onClick={scrollToTop}
          id="back-to-up"
        >
          <img className="w-100" src={upArrow} alt="back to top" />
        </button>
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
