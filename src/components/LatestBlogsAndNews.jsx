import React, { useEffect } from "react";
import stonerPatch from "../assets/img/webp/stonerPatch.webp";
import raw from "../assets/img/webp/raw.webp";
import egestas from "../assets/img/webp/egestas.webp";
import AOS from "aos";
import "aos/dist/aos.css";

function LatestBlogsAndNews() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <section className="py-md-5">
        <div className="LatestBlogsAndNews_bg pb-5">
          <div className="container">
            <h2
              className="fw-bold text-center ff_Philosopher text-white fs_xl4 pt-5"
              data-aos="fade-up"
              data-aos-anchor-placement="top"
              data-aos-delay="300"
              data-aos-offset="200"
            >
              Latest <span className="text_purpleGrident">Blogs</span> And{" "}
              <span className="text_purpleGrident">News</span>
            </h2>
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
            <div className="row pt-5">
              <div
                className=" col-10 col-sm-6 col-xl-4 mx-auto "
                data-aos="fade-right"
                data-aos-anchor-placement="top"
                data-aos-delay="300"
                data-aos-offset="200"
              >
                <div className="popularItems_bg p-3 h-100 d-flex flex-column justify-content-between">
                  <div>
                    <img
                      className="w-100"
                      src={stonerPatch}
                      alt="stoner Patch"
                    />
                    <p className="text-white fw-noraml fs_xsm ff_Montserrat mt-3 mb-4">
                      12 Dec 2022
                    </p>
                    <p className="fs_xl text-white fw-semibold ff_Montserrat mt-3">
                      Integer vulputate
                    </p>
                    <p className="text-white fw-noraml fs_md ff_Montserrat mt-2">
                      Nulla vitae imperdiet molestie pulvinar neque. Urna
                      senectus pharetra odio sed senectus sed morbi suspendisse
                      convallis.
                    </p>
                  </div>
                  <a
                    href=""
                    className="d-inline-block fw-normal fs_sm ff_Montserrat text_purpleGrident"
                  >
                    READ MORE....
                  </a>
                </div>
              </div>
              <div
                className=" col-10 col-sm-6 col-xl-4 mx-auto mt-4 mt-sm-0"
                data-aos="fade-up"
                data-aos-anchor-placement="top"
                data-aos-delay="300"
                data-aos-offset="200"
              >
                <div className="popularItems_bg p-3 h-100 d-flex flex-column justify-content-between">
                  <div>
                    <img className="w-100" src={raw} alt="raw " />
                    <p className="text-white fw-noraml fs_xsm ff_Montserrat mt-3 mb-4">
                      15 Nov 2022
                    </p>
                    <p className="fs_xl text-white fw-semibold ff_Montserrat mt-3">
                      Lectus aenean
                    </p>
                    <p className="text-white fw-noraml fs_md ff_Montserrat mt-2">
                      Tempor cras et scelerisque bibendum. Sapien proin pharetra
                      iaculis cras massa auctor turpis. Eget massa imperdiet sit
                      massa. Hac sit nec.
                    </p>
                  </div>
                  <a
                    href=""
                    className="d-inline-block fw-normal fs_sm ff_Montserrat text_purpleGrident"
                  >
                    READ MORE....
                  </a>
                </div>
              </div>
              <div
                className=" col-10 col-sm-6 col-xl-4 mx-auto  mt-4 mt-xl-0"
                data-aos="fade-left"
                data-aos-anchor-placement="top"
                data-aos-delay="300"
                data-aos-offset="200"
              >
                <div className="popularItems_bg p-3 h-100 d-flex flex-column justify-content-between">
                  <div>
                    <img className="w-100" src={egestas} alt="egestas" />
                    <p className="text-white fw-noraml fs_xsm ff_Montserrat mt-3 mb-4">
                      22 Dec 2022
                    </p>
                    <p className="fs_xl text-white fw-semibold ff_Montserrat mt-3">
                      Egestas odio
                    </p>
                    <p className="text-white fw-noraml fs_md ff_Montserrat mt-2">
                      Viverra sit volutpat pulvinar vulputate accumsan sapien.
                      Amet urna etiam curabitur ac in viverra tortor proin. Dui
                      viverra eu tristique in eget ut purus.
                    </p>
                  </div>
                  <a
                    href=""
                    className="d-inline-block fw-normal fs_sm ff_Montserrat text_purpleGrident"
                  >
                    READ MORE....
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LatestBlogsAndNews;
