import React from "react";
import logo from "../assets/img/svg/logo.svg";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer_bg pt-5">
          <div className="container">
            <div className="text-center">
              <img className="w_footerLogo" src={logo} alt="logo" />
            </div>
            <p className="mt-3 text-center ff_Montserrat fw-normal fs_md text-white">
              Tempor cras et scelerisque bibendum. Sapien proin pharetra iaculis
              cras massa auctor turpis. Eget massa imperdiet sit massa. Hac sit
              nec.
            </p>
            <div className="d-flex align-items-center justify-content-center gap-4">
              <p className="fw-semibold ff_Montserrat text-white fs_md">SHOP</p>
              <p className="fw-semibold ff_Montserrat text-white fs_md">
                ABOUT
              </p>
              <p className="fw-semibold ff_Montserrat text-white fs_md">
                CONTACT
              </p>
            </div>
            <div className="footer_line"></div>
            <p className="text-center fw-normal fs_xsm ff_Montserrat text-white mb-0 pb-4 pt-2">
              copyright2022purplepanda
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
