import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/WebIcons/stallion-cx-logo-web.png";
import "../stylesheets/Header.css";
import { IoChatbubblesSharp, IoHomeSharp, IoSearch } from "react-icons/io5";
import { MdNotificationsActive } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { Menu, MenuItem, Button } from "@material-ui/core";
import { useState } from "react";
import { BsCaretDown, BsCaretDownFill } from "react-icons/bs";
import Notification from "../assets/WebIcons/Noification 1x.png";
import User from "../assets/WebIcons/Profile1x.png";
import Chat from "../assets/WebIcons/Comment button 1x.png";
import { useSelector } from "react-redux";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const open = Boolean(anchorEl);

  const [HomeBtn, setHomeBtn] = useState(true);
  const [ChatBtn, setChatBtn] = useState(false);
  const [NotificationBtn, setNotificationBtn] = useState(false);

  const { currentUser } = useSelector((state) => state.loginUserReducer);

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem("socialUser"));
    console.log(res);
  }, []);

  const LogoutUser = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const HomeButton = () => {
    setChatBtn(false);
    setNotificationBtn(false);
    setHomeBtn(true);
  };

  const ChatButton = () => {
    setNotificationBtn(false);
    setHomeBtn(false);
    setChatBtn(true);
  };

  const NotificationButton = () => {
    setHomeBtn(false);
    setChatBtn(false);
    setNotificationBtn(true);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/* {console.log("state", currentUser.user.full_name)} */}
      <div className="container-home d-flex justify-content-between align-items-center text-white pt-2">
        <div className="logo-parent">
          <div className="banner-section pl-4">
            <Link to="/" className="">
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="input-parent d-flex align-items-center">
          <div className="input-child">
            <div className="input-section">
              <span className="search-icon ">
                <IoSearch />
              </span>
              <input
                type="text"
                name=""
                id=""
                placeholder="Search for contracts..."
              />
            </div>
          </div>
        </div>
        <div className="icons-group d-flex  align-items-center text-center ">
          <div className="icon-section d-flex align-items-center ">
            <div
              className={
                HomeBtn && !ChatBtn && !NotificationBtn
                  ? "icon-group d-flex flex-column  align-items-center text-center active-nav "
                  : "icon-group d-flex flex-column  align-items-center text-center   "
              }
              onClick={HomeButton}
            >
              <IoHomeSharp size={25} className="text-center" />
              <span className="icon-text">Home</span>
            </div>

            <div
              className={
                ChatBtn && !HomeBtn && !NotificationBtn
                  ? "icon-group d-flex  align-items-center flex-column  active-nav "
                  : "icon-group d-flex  align-items-center flex-column    "
              }
              onClick={ChatButton}
            >
              <img src={Chat} alt="" height={25} />
              <span className="icon-text">Chat</span>
            </div>

            <div
              className={
                NotificationBtn && !HomeBtn && !ChatBtn
                  ? "icon-group d-flex   align-items-center flex-column  active-nav "
                  : "icon-group d-flex   align-items-center flex-column    "
              }
              onClick={NotificationButton}
            >
              <img src={Notification} alt="" height={25} />
              <span className="icon-text">Notifications</span>
            </div>

            <div className="icon-group d-flex align-items-center flex-column  ">
              <span className="d-flex align-items-center justify-content-center">
                <img src={User} alt="" height={25} />
              </span>

              <div>
                <div
                  className="d-flex align-items-center"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <span className="icon-text">
                    Shobhit
                    {/* {currentUser.user.full_name} */}
                  </span>{" "}
                  <span className=" ml-1 d-flex" style={{ marginTop: "5px" }}>
                    <BsCaretDownFill size={12} />
                  </span>
                </div>

                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  className=""
                >
                  <div className="">
                    <MenuItem onClick={handleClose} className="drop-menu ">
                      <div className="popup-profile ">
                        <div className="popup-header text-white d-flex">
                          <div className=" d-flex flex-column align-items-center">
                            <img src={User} alt="" height={35} />
                            <Link to="/profile" className="profile-link">
                              <span className="view-profile p-1  ">
                                View Profile
                              </span>
                            </Link>
                          </div>
                          <div className="overview d-flex flex-column ">
                            <span className="full-name">
                              {/* {currentUser.user.full_name} */}
                              Shobhit Yadav
                            </span>
                            <span
                              className="position"
                              style={{ fontSize: "14px" }}
                            >
                              Software Engineer
                            </span>
                          </div>
                        </div>
                        <div className="popup-section">
                          <div
                            className=""
                            style={{ borderTop: "1px solid #4b4b4b" }}
                          >
                            <Link
                              to="/login"
                              className="drop-menu-item dropdown-item"
                            >
                              Account
                            </Link>
                          </div>
                          <div>
                            <Link
                              to="/login"
                              className="drop-menu-item dropdown-item"
                            >
                              Try premium for free
                            </Link>
                          </div>
                          <div>
                            <Link
                              to="/login"
                              className="drop-menu-item dropdown-item"
                            >
                              Setting & Privacy
                            </Link>
                          </div>
                          <div>
                            <Link
                              to="/login"
                              className="drop-menu-item dropdown-item"
                            >
                              Language
                            </Link>
                          </div>
                          <div
                            className=""
                            style={{ borderTop: "1px solid #4b4b4b" }}
                          >
                            <button
                              className="drop-menu-item dropdown-item"
                              onClick={LogoutUser}
                            >
                              Sign out
                            </button>
                          </div>
                        </div>
                      </div>
                    </MenuItem>
                  </div>
                </Menu>

                {/* <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu> */}
              </div>

              {/* 
            </Menu> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
