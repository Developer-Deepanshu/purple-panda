import React, { useEffect } from "react";
import stoner from "../assets/img/webp/stoner.webp";
import stick from "../assets/img/webp/stonerSticks.webp";
import atomic from "../assets/img/webp/atomic.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

function MostPopularItems() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="py-5 position-relative" id="Shop">
        <span className="position-absolute prupleShadow_10 top-0 start-0"></span>
        <div className="MostPopularItems_bg">
          <div className="container pb-4">
            <h2
              className="fw-bold text-center ff_Philosopher text-white fs_xl4 pt-5"
              data-aos="fade-up"
              data-aos-anchor-placement="top"
              data-aos-delay="300"
              data-aos-offset="200"
            >
              Most <span className="text_purpleGrident">Popular</span> Items
            </h2>
            <div className="col-lg-5 mx-auto">
              <p
                className="text-center text-white fw-normal fs_md mb-0"
                data-aos="fade-up"
                data-aos-anchor-placement="top"
                data-aos-delay="300"
                data-aos-offset="200"
              >
                Pellentesque tincidunt fermentum mauris dignissim quam arcu. A
                netus natoque urna vivamus faucibus. Sollicitudin et nisl.
              </p>
            </div>
            <div className="row pt-3 pt-md-5">
              <Slider {...settings}>
                <div
                  className=" col-11 col-sm-6 col-md-5 col-xl-3 px-2 mx-auto py-1"
                  data-aos="fade-right"
                  data-aos-anchor-placement="top"
                  data-aos-delay="300"
                  data-aos-offset="200"
                >
                  <div className="popularItems_bg p-3">
                    <img className="w-100" src={stoner} alt="stoner Patch" />
                    <p className="text-white fw-noraml fs_xl ff_Montserrat mt-3 mb-0">
                      Stoner Patch(500mg)
                    </p>
                    <p className="fs_xl text_purpleGrident fw-bold ff_Montserrat mt-0 mb-4">
                      $20.00
                    </p>
                    <a
                      href=""
                      className="d-inline-block text-white bg_purpleGrident border_radius40 p_addTOCart
                     fw-bold hoverBtn fs_lg ff_Montserrat"
                    >
                      ADD TO CART
                    </a>
                  </div>
                </div>
                <div
                  className=" col-11 col-sm-6 col-md-5 col-xl-3 px-2 mx-auto py-1"
                  data-aos="fade-right"
                  data-aos-anchor-placement="top"
                  data-aos-delay="300"
                  data-aos-offset="200"
                >
                  <div className="popularItems_bg p-3">
                    <img className="w-100" src={atomic} alt="stoner atomic" />
                    <p className="text-white fw-noraml fs_xl ff_Montserrat mt-3 mb-0">
                      Stoner Patch(500mg)
                    </p>
                    <p className="fs_xl text_purpleGrident fw-bold ff_Montserrat mt-0 mb-4">
                      $20.00
                    </p>
                    <a
                      href=""
                      className="d-inline-block text-white bg_purpleGrident border_radius40 p_addTOCart
                     fw-bold hoverBtn fs_lg ff_Montserrat"
                    >
                      ADD TO CART
                    </a>
                  </div>
                </div>
                <div
                  className=" col-11 col-sm-6 col-md-5 col-xl-3 px-2 mx-auto py-1"
                  data-aos="fade-left"
                  data-aos-anchor-placement="top"
                  data-aos-delay="300"
                  data-aos-offset="200"
                >
                  <div className="popularItems_bg p-3">
                    <img className="w-100" src={stick} alt="stoner stick" />
                    <p className="text-white fw-noraml fs_xl ff_Montserrat mt-3 mb-0">
                      Stoner Patch(500mg)
                    </p>
                    <p className="fs_xl text_purpleGrident fw-bold ff_Montserrat mt-0 mb-4">
                      $20.00
                    </p>
                    <a
                      href=""
                      className="d-inline-block text-white bg_purpleGrident border_radius40 p_addTOCart
                     fw-bold hoverBtn fs_lg ff_Montserrat"
                    >
                      ADD TO CART
                    </a>
                  </div>
                </div>
                <div
                  className=" col-11 col-sm-6 col-md-5 col-xl-3 px-2 mx-auto py-1"
                  data-aos="fade-left"
                  data-aos-anchor-placement="top"
                  data-aos-delay="300"
                  data-aos-offset="200"
                >
                  <div className="popularItems_bg p-3">
                    <img className="w-100" src={stick} alt="stoner stick" />
                    <p className="text-white fw-noraml fs_xl ff_Montserrat mt-3 mb-0">
                      Stoner Patch(500mg)
                    </p>
                    <p className="fs_xl text_purpleGrident fw-bold ff_Montserrat mt-0 mb-4">
                      $20.00
                    </p>
                    <a
                      href=""
                      className="d-inline-block text-white bg_purpleGrident border_radius40 p_addTOCart
                     fw-bold hoverBtn fs_lg ff_Montserrat"
                    >
                      ADD TO CART
                    </a>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MostPopularItems;
