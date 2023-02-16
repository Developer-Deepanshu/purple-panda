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
           text-white flex-column flex-sm-row"
          >
            <p className="text-center borderBottom pb-2 d-inline-block mx-5 mx-sm-0">
              Mon : 10am-8pm
            </p>
            <p className="text-center borderBottom pb-2 ms-5 me-5 me-sm-0 d-inline-block">
              Tue : 10am-8pm
            </p>
          </div>
          <div
            className="d-flex mt-sm-5 justify-content-center ff_Montserrat fs_xl fw-semibold
           text-white mt-sm-4 flex-column flex-sm-row"
          >
            <p className="text-center borderBottom pb-2 d-inline-block mx-5 mx-sm-0">
              Wed : 10am-8pm
            </p>
            <p className="text-center borderBottom pb-2 ms-5 me-5 me-sm-0 d-inline-block">
              Thu : 10am-8pm
            </p>
          </div>
          <div
            className="d-flex mt-sm-5 justify-content-center ff_Montserrat fs_xl fw-semibold
           text-white mt-sm-4 flex-column flex-sm-row"
          >
            <p className="text-center borderBottom pb-2 mx-5 mx-sm-0 d-inline-block">
              Fri : 10am-8pm
            </p>
            <p className="text-center borderBottom pb-2 ms-5 me-5 me-sm-0 d-inline-block">
              Sat : 10am-8pm
            </p>
          </div>
          <div className="text-center mx-5 mx-sm-0">
            <p
              className="text-center borderBottom ff_Montserrat fs_xl fw-semibold
           text-white mt-sm-4 mx-auto mx-5 mx-sm-0 d-sm-inline-block"
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
