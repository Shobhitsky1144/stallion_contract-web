import React, { useState } from "react";
import "../../stylesheets/social-section.css";
import { BsFileEarmarkPost } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import Plus from "../../assets/WebIcons/Plus-1x.png";

const SocialSection = () => {
  const [subMenu, setSubMenu] = useState(false);

  const handleSubmenu = () => {
    setSubMenu(!subMenu);
  };
  return (
    <div className="social-parent m-2 mt-3 mb-3">
      <div className="social-title ">
        <h6>Add to your feed</h6>
      </div>
      <div className="">
        <div className="social-item">
          <div className="d-flex align-items-center justify-content-between">
            <div className="follow-section text-white d-flex align-items-center">
              <BsFileEarmarkPost size={20} />
              <div className="pl-3">
                Work From Home/ Fresher & Experience Job
                <br />
                987,303 followers
              </div>
            </div>
            <div className="follow-link">
              <span className="pr-1">
                <img src={Plus} alt="" height={10} />
              </span>
              Follow
            </div>
          </div>
        </div>
        <div className="social-item-child">
          <div className="d-flex align-items-center justify-content-between">
            <div className="follow-section text-white d-flex align-items-center">
              <BsFileEarmarkPost size={20} />
              <div className="pl-3">
                Work From Home/ Fresher & Experience Job
                <br />
                987,303 followers
              </div>
            </div>
            <div className="follow-link">
              <span className="pr-1">
                <img src={Plus} alt="" height={10} />
              </span>
              Follow
            </div>
          </div>
        </div>

        <div className={subMenu ? "contract-menu-show" : "contract-menu-hide"}>
          <div className="social-item-child">
            <div className="d-flex align-items-center justify-content-between">
              <div className="follow-section text-white d-flex align-items-center">
                <BsFileEarmarkPost size={20} />
                <div className="pl-3">
                  Work From Home/ Fresher & Experience Job
                  <br />
                  987,303 followers
                </div>
              </div>
              <div className="follow-link">
                <span className="pr-1">
                  <img src={Plus} alt="" height={10} />
                </span>
                Follow
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="see-more text-center text-white p-2"
        onClick={handleSubmenu}
      >
        {subMenu ? <span>See Less ...</span> : <span>See More ...</span>}
      </div>
    </div>
  );
};

export default SocialSection;
