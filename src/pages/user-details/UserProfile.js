import React, { useState } from "react";
import Header from "../../Screens/Header";
import "../../stylesheets/user-profile/userprofile.css";
import SocialSection from "../Home/SocialSection";
import editIcon from "../../assets/WebIcons/edit 1x.png";
import { BsPlusLg } from "react-icons/bs";
import UserIcon from "../../assets/WebIcons/Profile1x.png";
import { BsFileEarmarkPost } from "react-icons/bs";
import cameraIcon from "../../assets/WebIcons/add photo 1x.png";
import ContactInfoDialog from "./contact dialog/ContactInfoDialog";
import EditIntroDialog from "./EditIntroDialog";

const UserProfile = () => {
  const [contactModal, setContactModal] = useState(false);
  const [editIntroModal, setEditIntroModal] = useState(false);

  return (
    <>
      <Header />

      <div className="container-fluid ">
        <div className="row p-3">
          <div className="col-md-7  ">
            <div className="profile-section mt-2 ml-3 ">
              <div className="d-flex justify-content-between  pl-3 pr-3 pt-3 mb-2 ">
                <div className="">
                  <span className="text-white  ">
                    <img src={UserIcon} alt="edit" height={95} width={95} />
                    <img src={cameraIcon} alt="camera" className="cameraIcon" />
                    <br />
                    <br />
                    <span className="profile-name">Shobhit Yadav</span>
                    <br />

                    <span className="position">Software Engineer</span>
                    <br />
                    <div className="d-flex">
                      <span className="location">
                        Delhi, India{" "}
                        {/* <span className="contact-info"> Contact Info</span> */}
                      </span>
                      <span onClick={() => setContactModal(!contactModal)}>
                        <ContactInfoDialog contactModal={contactModal} />
                      </span>
                    </div>
                    <div className="mt-2 mb-2">
                      <button className="add-profile-section mr-2 pl-2 pr-2 pt-1 pb-1">
                        Add profile section
                      </button>

                      <button className="more-section pl-3 pr-3 pt-1 pb-1">
                        More
                      </button>
                    </div>
                  </span>
                </div>

                <div className="d-flex flex-column">
                  <div className=" d-flex justify-content-end ">
                    <span
                      className="text-white"
                      onClick={() => setEditIntroModal(true)}
                      style={{ cursor: "pointer" }}
                    >
                      {/* <EditIntroDialog editIntroModal={editIntroModal} /> */}
                      <img src={editIcon} alt="edit" height={19} />
                      <br />
                    </span>
                  </div>
                  <div className="text-white pt-5">
                    <div className="d-flex align-items-center pt-5">
                      <BsFileEarmarkPost size={20} className="mr-2" />
                      <span>Neo sypher system pvt. ltd.</span>
                    </div>
                    {/* <br /> */}
                    <div className="d-flex align-items-center pt-2">
                      <BsFileEarmarkPost size={20} className="mr-2" />
                      <span>Delhi University</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-section mt-3 ml-3">
              <div className="d-flex justify-content-between align-items-center pl-3 pr-3 pt-2">
                <span className="text-white ">
                  <p className="about-text">About</p>
                </span>
                <span className="text-white">
                  <img src={editIcon} alt="edit" height={19} />
                </span>
              </div>
              <p className="pl-3">
                Highly creatiev and multitalented Graphic Designer with
                extensive experience in <br /> multimedia,marketing and print
                design.
              </p>
            </div>
            <div className="skills-section mt-4 ml-3">
              <div className="d-flex justify-content-between align-items-center pl-3 pr-3 pt-2">
                <span className="text-white">
                  <p className="skill-text">Skills</p>
                </span>
                <span className="text-white d-flex">
                  <span className="pr-3 ">
                    <BsPlusLg />
                  </span>
                  <img src={editIcon} alt="edit" height={19} />
                </span>
              </div>
              <div className="">
                <h3 className="skill">Education</h3>
                <h3 className="skill">Design</h3>
                <h3 className="skill">UI Design</h3>
              </div>
              <div className="see-moree text-center">
                <h3>See more...</h3>
              </div>
            </div>
          </div>
          <div className="col-md-5 second-section-column ">
            <div className=" mt-2 ml-4 mr-4">
              <div className="second-section-parent m-2">
                <div className="first-section">
                  <h3>Edit public profile & URL</h3>
                </div>
                <div className="second-section">
                  <h3>Post a job</h3>
                </div>
              </div>
              <div className="child ">
                <SocialSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
