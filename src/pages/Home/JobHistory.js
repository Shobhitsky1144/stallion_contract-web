import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import "../../stylesheets/Jobhistory.css";
import { IoEllipsisVertical } from "react-icons/io5";

const JobHistory = () => {
  return (
    <div className="job-parent m-2">
      <div className="job-section d-flex justify-content-between align-items-center text-white">
        <h5>Job History</h5>
        <IoEllipsisVertical size={18} className="vertical-dot" />
      </div>
      <div className="job-section">
        <h6>Graphic Designer</h6>
        <p>Neo sypher system pvt ltd | 2020-present</p>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
      </div>
      <div className="job-section">
        <h6>Graphic Designer</h6>
        <p>Neo sypher system pvt ltd | 2020-present</p>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
      </div>
      <div className="job-section">
        <h6>Graphic Designer</h6>
        <p>Neo sypher system pvt ltd | 2020-present</p>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
      </div>
      <div className="job-section">
        <h6>Graphic Designer</h6>
        <p>Neo sypher system pvt ltd | 2020-present</p>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
      </div>
      <div className="job-section footer">
        <h6>Graphic Designer</h6>
        <p>Neo sypher system pvt ltd | 2020-present</p>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
      </div>
    </div>
  );
};

export default JobHistory;
