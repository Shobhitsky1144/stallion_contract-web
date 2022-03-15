import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/WebIcons/stallion-cx-logo-web.png";

const NavBar = () => {
  return (
    <div
      className=" d-flex justify-content-between"
      style={{
        background: "#00161E",
        borderBottom: "1px solid #af8e13",
        padding: "4px 34px",
      }}
    >
      <Link to="/">
        <img src={logo} alt="" height={70} />
      </Link>
    </div>
  );
};

export default NavBar;
