import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/WebIcons/stallion-cx-logo-web.png";
import "../stylesheets/CreateAccount.css";

const CreateAccount = () => {
  const [businessBtn, setBusinessBtn] = useState(false);
  const [individualBtn, setIndividualBtn] = useState(true);

  const IndividualButton = () => {
    setBusinessBtn(false);
    setIndividualBtn(true);
  };

  const BusinessButton = () => {
    setIndividualBtn(false);
    setBusinessBtn(true);
  };

  return (
    <div className="container-form ">
      <div className="parent">
        <div className="header">
          <div className="logo-section ">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div className="header-text text-white mt-3">
            <h3 style={{ fontSize: "29px" }}>
              Let's find the best contract for you
            </h3>
          </div>
        </div>
        <div className="section-group ">
          <div className="section-child">
            <button
              className={
                businessBtn && !individualBtn ? "selectedcolor" : "defaultcolor"
              }
              onClick={BusinessButton}
            >
              BUSINESS ACCOUNT
            </button>
            <button
              className={
                individualBtn && !businessBtn
                  ? "selectedcolor mt-4"
                  : "defaultcolor  mt-4"
              }
              onClick={IndividualButton}
            >
              INDIVIDUAL ACCOUNT
            </button>
          </div>
        </div>

        <div className="button-group ">
          {individualBtn ? (
            <>
              <Link to="/login">
                <button className="button">Create Account</button>
              </Link>
            </>
          ) : businessBtn ? (
            <>
              <Link to="#">
                <button className="button">Create Account</button>
              </Link>
            </>
          ) : (
            <button className="button">Create Account</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
