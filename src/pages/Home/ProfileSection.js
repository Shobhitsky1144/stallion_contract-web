import React, { useState } from "react";
import "../../stylesheets/profilesection.css";
import { FaCamera } from "react-icons/fa";
import { BsCaretDown, BsCaretDownFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const ProfileSection = () => {
  const [subMenu, setSubMenu] = useState(false);

  const { currentUser } = useSelector((state) => state.loginUserReducer);

  const handleSubmenu = () => {
    setSubMenu(!subMenu);
  };
  return (
    <div className="profile-parent m-2">
      <div className=" profile-section-header  text-center pt-1">
        <div className="upload-profile d-flex flex-column align-items-center">
          <div className="upload-icon mt-2">
            <FaCamera size={30} />
          </div>
          <h5 style={{ fontSize: "19px" }}>
            Welcome Shobhit
            {/* {currentUser.user.full_name} */}
          </h5>
          <p className="upload-text">Add a photo</p>
        </div>
        <div className="contract ">
          <div className="d-flex justify-content-between">
            <span className="text-white">My Contracts</span>
            <span className="carot-icon text-white" onClick={handleSubmenu}>
              <BsCaretDownFill size={12} />
            </span>
          </div>
        </div>
        <div className={subMenu ? "contract-menu-show" : "contract-menu-hide"}>
          <div className="contract ">
            <div className="d-flex justify-content-between">
              <span className="submenu-text">Active Jobs</span>
              <span className="contarct-submenu">4</span>
            </div>
          </div>
          <div className="contract ">
            <div className="d-flex justify-content-between">
              <span className="submenu-text">Inprogress Job</span>
              <span className="contarct-submenu">3</span>
            </div>
          </div>
          <div className="contract ">
            <div className="d-flex justify-content-between">
              <span className="submenu-text">Open Bid</span>
              <span className="contarct-submenu">4</span>
            </div>
          </div>
        </div>

        <div className="pl-3">
          <h5 className="text-left">Try Premium for free</h5>
        </div>
      </div>
      <div className="profile-section-footer mt-3 text-white">
        <div className="">
          <h5>Favourite</h5>
        </div>
        <div className="">
          <h5>Rating & Reviews</h5>
        </div>
        <div className="">
          <h5>Connection</h5>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
