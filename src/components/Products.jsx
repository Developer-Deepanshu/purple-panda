import React from "react";
import mushrooms from "../assets/img/png/mushrooms.png";
import bulk from "../assets/img/png/bulk.png";
import Cannabis from "../assets/img/png/cannabis.png";
import Edibles from "../assets/img/png/ebibles.png";
import CBD from "../assets/img/png/cbd.png";
import Vapes from "../assets/img/png/vapes.png";
import Extracts from "../assets/img/png/extracts.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Products() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="mt-5">
        <div className="container mt-2 pb-4">
          <div className="row justify-content-between">
            <Slider {...settings}>
              <div className="col">
                <div className="d-flex flex-column productsHover align-items-center">
                  <img className="w_164" src={mushrooms} alt="mushrooms" />
                  <p className="text-center ff_Philosopher fw-bold fs_xl text-white mt-2">
                    Mushrooms
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column productsHover align-items-center">
                  <img className="w_164" src={Extracts} alt="mushrooms" />
                  <p className="text-center ff_Philosopher fw-bold fs_xl text-white mt-2">
                    Extracts
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column align-items-center productsHover">
                  <img className="w_164" src={Vapes} alt="mushrooms" />
                  <p className="text-center ff_Philosopher fw-bold fs_xl text-white mt-2">
                    Vapes & Accessories
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column productsHover align-items-center">
                  <img className="w_164" src={CBD} alt="mushrooms" />
                  <p className="text-center ff_Philosopher fw-bold fs_xl text-white mt-2">
                    CBD
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column productsHover align-items-center">
                  <img className="w_164" src={Edibles} alt="mushrooms" />
                  <p className="text-center ff_Philosopher fw-bold fs_xl text-white mt-2">
                    Edibles
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column productsHover align-items-center">
                  <img className="w_164" src={Cannabis} alt="mushrooms" />
                  <p className="text-center ff_Philosopher fw-bold fs_xl text-white mt-2">
                    Cannabis
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column productsHover align-items-center">
                  <img className="w_164" src={bulk} alt="mushrooms" />
                  <p className="text-center ff_Philosopher fw-bold fs_xl text-white mt-2">
                    Bulk Orders
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
