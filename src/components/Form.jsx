import React, { useState } from "react";
import expressImg from "../assets/img/webp/expressCannabisCrop.webp";
import purplePhone from "../assets/img/webp/purplePhone.webp";
import purpleMail from "../assets/img/webp/purpleMail.webp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Form() {
  const [name, setname] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [massage, setmassage] = useState("");
  const formSubmit = (e) => {
    e.preventDefault();
    setname("");
    setlastName("");
    setemail("");
    setmassage("");
    setnumber("");
  };
  const submitForm = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("number", number);
    localStorage.setItem("massage", massage);

    var userName = document.getElementById("nameID");
    if (userName.value === "") {
      toast.error("Error", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.success("SUCCESS", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  return (
    <>
      <section>
        <div className="container">
          <div className="row align-items-center pb-5 flex-column flex-xl-row">
            <div className="col-md-9 col-xl-6">
              <img className="w-100" src={expressImg} alt="flower" />
            </div>
            <div className="col-md-10 col-xl-6">
              <div className="OurClassifications_card_bg p-4">
                <h2 className="text-white ff_Philosopher fw-bold fs_xl2 text-center text-xl-start">
                  Feel free to
                  <span className="text_purpleGrident"> contact us </span>
                  anytime you need our help.
                </h2>
                <p className="fw-normal fs_md text-white ff_Montserrat text-center text-xl-start">
                  We usually reply in 24 hours, if there is an urgent need to
                  reach us. please give us a call at the number below
                </p>
                <div
                  className="d-flex align-items-center justify-content-between mt-4 pt-3
                 flex-column flex-md-row"
                >
                  <div className="d-flex align-items-center ">
                    <img src={purplePhone} alt="Phones" />
                    <p className="fw-semibold mb-0 ms-2 fs_md text-white ff_Montserrat">
                      1-888-726-3219
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-3 mt-md-0">
                    <img src={purpleMail} alt="mail" />
                    <p className="fw-semibold mb-0 ms-2 fs_md text-white ff_Montserrat ">
                      purplepandagta.info@proton.me
                    </p>
                  </div>
                </div>
                <form className="mt-5" onSubmit={formSubmit}>
                  <div className="d-flex align-items-center flex-column flex-sm-row">
                    <input
                      className="d-block w-100 form_input px-3 py-2"
                      type="text"
                      id="nameID"
                      autocomplete="off"
                      placeholder="First name"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                    />
                    <input
                      className="d-block w-100 form_input ms-sm-2 mt-3 mt-sm-0  px-3 py-2"
                      type="text"
                      id="lastName"
                      autocomplete="off"
                      placeholder="Last name"
                      value={lastName}
                      onChange={(e) => setlastName(e.target.value)}
                    />
                  </div>
                  <div className="d-flex align-items-center mt-3 flex-column flex-sm-row">
                    <input
                      className="d-block w-100 form_input px-3 py-2"
                      type="email"
                      id="emailID"
                      autocomplete="off"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                    />
                    <input
                      className="d-block w-100 form_input ms-sm-2 mt-3 mt-sm-0  px-3 py-2"
                      type="number"
                      autocomplete="off"
                      id="phoneId"
                      placeholder="Phone number"
                      value={number}
                      onChange={(e) => setnumber(e.target.value)}
                    />
                  </div>
                  <textarea
                    autocomplete="off"
                    rows="4"
                    cols="50"
                    className="d-block w-100 mt-3 form_input px-3 py-2"
                    id="textID"
                    type="text"
                    placeholder="Message..."
                    value={massage}
                    onChange={(e) => setmassage(e.target.value)}
                  />
                  <button
                    className="d-inline-block text-white bg_purpleGrident border_radius40 p_nav_signIn
                     fw-bold fs_lg ff_Montserrat mt-3 hoverBtn"
                    onClick={submitForm}
                  >
                    SUBMIT
                  </button>
                  <ToastContainer />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Form;
