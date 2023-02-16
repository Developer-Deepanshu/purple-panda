import React from "react";

function StoreHours() {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <h2 className="fw-normal fs_xl4 ff_Philosopher text-center text-white mb-0">
            Store <span className="text_purpleGrident">Hours</span>
          </h2>
          <div
            className="d-flex mt-5 justify-content-center ff_Montserrat fs_xl fw-semibold
           text-white"
          >
            <p className="text-center borderBottom pb-2">Mon : 10am-8pm</p>
            <p className="text-center borderBottom pb-2 ms-5">Tue : 10am-8pm</p>
          </div>
          <div
            className="d-flex mt-5 justify-content-center ff_Montserrat fs_xl fw-semibold
           text-white mt-4"
          >
            <p className="text-center borderBottom pb-2">Wed : 10am-8pm</p>
            <p className="text-center borderBottom pb-2 ms-5">Thu : 10am-8pm</p>
          </div>
          <div
            className="d-flex mt-5 justify-content-center ff_Montserrat fs_xl fw-semibold
           text-white mt-4"
          >
            <p className="text-center borderBottom pb-2">Fri : 10am-8pm</p>
            <p className="text-center borderBottom pb-2 ms-5">Sat : 10am-8pm</p>
          </div>
          <div className="text-center">
            <p
              className="text-center borderBottom ff_Montserrat fs_xl fw-semibold
           text-white mt-4 d-inline-block mx-auto"
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
