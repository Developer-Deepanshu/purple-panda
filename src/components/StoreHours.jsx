import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function StoreHours() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <section className="py-5">
        <div className="container">
          <h2
            className="fw-normal fs_xl4 ff_Philosopher text-center text-white mb-0"
            data-aos="fade-up"
            data-aos-anchor-placement="top"
            data-aos-delay="300"
            data-aos-offset="200"
          >
            Store <span className="text_purpleGrident">Hours</span>
          </h2>
          <div
            className="d-flex mt-5 justify-content-center ff_Montserrat fs_xl fw-semibold
           text-white flex-column flex-sm-row"
          >
            <p
              className="text-center borderBottom pb-2 d-inline-block mx-5 mx-sm-0"
              data-aos="fade-right"
              data-aos-anchor-placement="top"
              data-aos-delay="300"
              data-aos-offset="200"
            >
              Mon : 10am-8pm
            </p>
            <p
              className="text-center borderBottom pb-2 ms-5 me-5 me-sm-0 d-inline-block"
              data-aos="fade-left"
              data-aos-anchor-placement="top"
              data-aos-delay="300"
              data-aos-offset="200"
            >
              Tue : 10am-8pm
            </p>
          </div>
          <div
            className="d-flex mt-sm-5 justify-content-center ff_Montserrat fs_xl fw-semibold
           text-white mt-sm-4 flex-column flex-sm-row"
          >
            <p
              className="text-center borderBottom pb-2 d-inline-block mx-5 mx-sm-0"
              data-aos="fade-right"
              data-aos-anchor-placement="top"
              data-aos-delay="300"
              data-aos-offset="200"
            >
              Wed : 10am-8pm
            </p>
            <p
              className="text-center borderBottom pb-2 ms-5 me-5 me-sm-0 d-inline-block"
              data-aos="fade-left"
              data-aos-anchor-placement="top"
              data-aos-delay="300"
              data-aos-offset="200"
            >
              Thu : 10am-8pm
            </p>
          </div>
          <div
            className="d-flex mt-sm-5 justify-content-center ff_Montserrat fs_xl fw-semibold
           text-white mt-sm-4 flex-column flex-sm-row"
          >
            <p
              className="text-center borderBottom pb-2 mx-5 mx-sm-0 d-inline-block"
              data-aos="fade-right"
              data-aos-anchor-placement="top"
              data-aos-delay="300"
              data-aos-offset="200"
            >
              Fri : 10am-8pm
            </p>
            <p
              className="text-center borderBottom pb-2 ms-5 me-5 me-sm-0 d-inline-block"
              data-aos="fade-left"
              data-aos-anchor-placement="top"
              data-aos-delay="300"
              data-aos-offset="200"
            >
              Sat : 10am-8pm
            </p>
          </div>
          <div className="text-center mx-5 mx-sm-0">
            <p
              className="text-center borderBottom ff_Montserrat fs_xl fw-semibold
           text-white mt-sm-4 mx-auto mx-5 mx-sm-0 d-sm-inline-block"
              data-aos="fade-up"
              data-aos-anchor-placement="top"
              data-aos-delay="300"
              data-aos-offset="200"
            >
              Sun : 10am-8pm
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default StoreHours;
