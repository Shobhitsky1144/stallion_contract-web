import React from "react";
import "../../stylesheets/newsfeed.css";
import { AiFillLike, AiFillStar, AiOutlineLike } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoEllipsisVertical } from "react-icons/io5";
import Like from "../../assets/WebIcons/Like button 1x.png";
import User from "../../assets/WebIcons/Profile1x.png";
import Comment from "../../assets/WebIcons/Comment button 1x.png";

const NewsFeed = () => {
  return (
    <div className="news-feed m-2">
      <div className="post-header text-white ">
        <div className="d-flex justify-content-between">
          <div className="d-flex ">
            <img src={User} alt="" height={30} />
            <div className="content">
              <h5 className="full-name">
                Priya Sarkar
                <br />{" "}
                <p className="short-info">
                  Human Resource Professional at Pyramid Consulting, Inc ...
                </p>
              </h5>
            </div>
          </div>
          <div className="vertical-dot">
            <IoEllipsisVertical size={20} />
          </div>
        </div>
        <div className="post-section">
          <h6>
            Urgent opening for System Administrator (Noida)
            <br />
            Roles and Responsibilites
            <br />
            License Management and software standardization.Basic Networking,
            <br />
            Map drive,Datasharing <br />
            TCP/IP Configuration,Internet Mantinance
          </h6>
        </div>
        <div className="d-flex justify-content-end">53 comments</div>
      </div>
      <div className="social-section d-flex justify-content-between ">
        <div className="d-flex flex-column align-items-center">
          <img src={Like} alt="" height={25} />
          <span className="social-text">Like</span>
        </div>
        <div className="d-flex flex-column align-items-center">
          <img src={Comment} alt="" height={25} width={25} />
          <span className="social-text">Comment</span>
        </div>
        <div className="d-flex flex-column align-items-center">
          <RiSendPlaneFill size={25} className="sendIcon" />
          <span className="social-text">Send</span>
        </div>
        <div className="d-flex flex-column align-items-center">
          <AiFillStar size={25} className="starIcon" />
          <span className="social-text">Favourite</span>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
