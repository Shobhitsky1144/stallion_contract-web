import React, { useState } from "react";
import Header from "../../Screens/Header";
import JobHistory from "./JobHistory";
import NewsFeed from "./NewsFeed";
import ProfileSection from "./ProfileSection";
import SocialSection from "./SocialSection";

const UserHome = () => {
  return (
    <>
      <Header />

      <div className="container-fluid ">
        <div className="row m-3">
          <div className="col-md-3  ">
            <ProfileSection />
          </div>
          <div className="col-md-6  ">
            <NewsFeed />
            <SocialSection />
            <NewsFeed />
          </div>
          <div className="col-md-3  ">
            <JobHistory />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserHome;
