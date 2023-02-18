import React, { useState } from "react";
import gift from "../assets/img/webp/mdi_gift.webp";
import logo from "../assets/img/webp/logo.webp";
import searchBtn from "../assets/img/webp/search_btn.webp";
import searchBtnCircle from "../assets/img/webp/search_btnCircle.webp";
import cart_nav from "../assets/img/webp/cart_nav.webp";
import { Link } from "react-router-dom";

function NavBar() {
  const [open, setclose] = useState(false);
  if (open) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  return (
    <>
      <nav>
        <div className="container-fluid p-0">
          <div
            className="d-flex align-items-center justify-content-center bg_purple py-2 flex-column
           flex-md-row ps-1 px-xl-0"
          >
            <div className="d-flex align-items-md-center">
              <img className="gift_size d-inline-block" src={gift} alt="gift" />
              <p className="fw-lighter fs_md ff_Montserrat text-white mb-0 ms-3 ms-sm-2">
                <span className="fw_bolder">Black Friday</span> savings are here
                ,save up to 10% off on coupon code
              </p>
            </div>
            <a
              href="/"
              className="d-inline-block text_purpleGrident fw_bolder ff_Montserrat fs_md ms-3"
            >
              Shop Now
            </a>
          </div>
        </div>
        <div className="container">
          <div
            className=" d-flex align-items-xl-center justify-content-between flex-xl-row flex-column
           py-3"
          >
            <div className=" d-flex align-items-center justify-content-between">
              <Link exact to="/">
                <a href="#" className="d-inline-block">
                  <img className="w-100" src={logo} alt="logo" />
                </a>
              </Link>
              <div className="d-flex align-items-center">
                <ul className="d-flex align-items-center gap-4 ps-0 mb-0">
                  <li className="position-relative d-xl-none">
                    <img className="d-sm-none" src={searchBtnCircle} alt="" />
                    <input
                      className=" input_nav ps-2 pe_30 py-1 text-white placeholderColor d-none d-sm-block"
                      type="text"
                      placeholder="Search here.."
                    />
                    <a href="" className="d-inline-block d-none d-sm-block">
                      <img
                        className="position-absolute search_btn_width position_search_btn bg_grayGrident"
                        src={searchBtn}
                        alt="searchBtn"
                      />
                    </a>
                  </li>
                  <li className="d-xl-none">
                    <a href="" className="d-inline-block w-100">
                      <img
                        className="d-inline-block w-100"
                        src={cart_nav}
                        alt="cart"
                      />
                    </a>
                  </li>
                  <li className="d-none d-md-flex d-xl-none">
                    <a
                      href=""
                      className="d-inline-block text-white bg_purpleGrident border_radius40 p_nav_signIn
                       fw-bold fs_lg ff_Montserrat hoverBtn"
                    >
                      SIGN IN
                    </a>
                  </li>
                </ul>
                <button
                  onClick={() => setclose(true)}
                  className=" d-flex flex-column d-xl-none bg-transparent border-0 position-relative
                 z_index _100 nav_btn_lines ms-3 nav_li neAnimation"
                  id="nav_btn_animation"
                >
                  <span className="line"></span>
                  <span className="my-2 line"></span>
                  <span className="line"></span>
                </button>
              </div>
            </div>
            <div className={open ? "ms-0 nav_open" : "nav_open ms_n100"}>
              <ul
                className="d-flex align-items-center min_vh_max_xl justify-content-center
               justify-content-xl-between flex-xl-row flex-column gap-4 mb-0 ps-0"
              >
                <li className="me-3">
                  <Link exact to="/">
                    <a
                      className="text-white text_strokeWhite d-inline-block ff_Montserrat"
                      href="#"
                      onClick={() => setclose(false)}
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li className="me-3">
                  <a
                    className="text-white text_strokeWhite d-inline-block ff_Montserrat"
                    href="#Shop"
                    onClick={() => setclose(false)}
                  >
                    SHOP
                  </a>
                </li>
                <li className="me-3">
                  <a
                    className="text-white text_strokeWhite d-inline-block ff_Montserrat"
                    href="#About"
                    onClick={() => setclose(false)}
                  >
                    ABOUT
                  </a>
                </li>
                <li className="me-3">
                  <Link exact to="/Contect">
                    <a
                      className="text-white text_strokeWhite d-inline-block ff_Montserrat"
                      href="#"
                      onClick={() => setclose(false)}
                    >
                      CONTACT
                    </a>
                  </Link>
                </li>
                <li className="me-3">
                  <a
                    className="text-white text_strokeWhite d-inline-block ff_Montserrat"
                    href="#FAQ"
                    onClick={() => setclose(false)}
                  >
                    FAQ
                  </a>
                </li>
                <li className="position-relative d-none d-xl-block">
                  <input
                    className=" input_nav ps-2 pe_30 pt-1 pb-2 text-white placeholderColor"
                    type="text"
                    placeholder="Search here.."
                  />
                  <a
                    href=""
                    className="d-inline-block"
                    onClick={() => setclose(false)}
                  >
                    <img
                      className="position-absolute search_btn_width position_search_btn
                       bg_grayGrident"
                      src={searchBtn}
                      alt="searchBtn"
                    />
                  </a>
                </li>
                <li className=" d-none d-xl-block">
                  <a
                    href=""
                    className="d-inline-block w-100 transform_translateHover tranisition_02"
                    onClick={() => setclose(false)}
                  >
                    <img
                      className="d-inline-block w-100"
                      src={cart_nav}
                      alt="cart"
                    />
                  </a>
                </li>
                <li className=" d-md-none d-xl-block">
                  <a
                    href=""
                    className="d-inline-block text-white bg_purpleGrident border_radius40 p_nav_signIn
                     fw-bold fs_lg ff_Montserrat hoverBtn"
                    onClick={() => setclose(false)}
                  >
                    SIGN IN
                  </a>
                </li>
              </ul>
              <div
                className="d-flex align-items-center flex-column nav_lineAnimation position-absolute position_crossNav d-xl-none"
                onClick={() => setclose(false)}
              >
                <span className="line"></span>
                <span className="my-2 line"></span>
                <span className="line"></span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
