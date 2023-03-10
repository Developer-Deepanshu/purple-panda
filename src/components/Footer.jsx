import React from "react";
import logo from "../assets/img/webp/logo.webp";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer_bg pt-5 position-relative">
          <span className="position-absolute prupleShadow top-0 end-0"></span>
          <div className="container">
            <div className="text-center">
              <img className="w_footerLogo" src={logo} alt="logo" />
            </div>
            <div className="col-md-6 mx-auto">
              <p className="mt-3 text-center ff_Montserrat fw-normal fs_md text-white">
                Tempor cras et scelerisque bibendum. Sapien proin pharetra
                iaculis cras massa auctor turpis. Eget massa imperdiet sit
                massa. Hac sit nec.
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-4 mb-4">
              <a
                href=""
                className="fw-semibold ff_Montserrat text-white fs_md footerBtn position-relative footerBtn"
              >
                SHOP
              </a>
              <a
                href=""
                className="fw-semibold ff_Montserrat text-white fs_md footerBtn position-relative footerBtn"
              >
                ABOUT
              </a>
              <a
                href=""
                className="fw-semibold ff_Montserrat text-white fs_md footerBtn position-relative footerBtn"
              >
                CONTACT
              </a>
            </div>
          </div>
          <div className="footer_line mt-5"></div>
          <p className="text-center fw-normal fs_xsm ff_Montserrat text-white mb-0 pb-4 pt-2">
            copyright2022purplepanda
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
