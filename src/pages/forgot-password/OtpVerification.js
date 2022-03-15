import Axios from "axios";
import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../../constants/ApiBaseUrl";
import "../../stylesheets/otp-verification.css";
import NavBar from "./NavBar";
import { toast } from "react-toastify";
import OtpInput from "react-otp-input";
import { useLocation, useNavigate } from "react-router-dom";

const OtpVerfication = () => {
  const [user_id, setUser_Id] = useState();
  const [OTP, setOTP] = useState();
  let navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state.userid) {
      setUser_Id(location.state.userid);
    }
  }, []);

  const handleChange = (OTP) => {
    setOTP(OTP);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!OTP) {
      toast.error("Please enter OTP");
      return false;
    }
    const res = await Axios.post(`${API_BASE_URL}/verify-email`, {
      user_id,
      OTP,
    });
    const data = await res.data;
    console.log("data", data);
    if (data.status === false) {
      toast.error(data.message);
    } else {
      toast.success(data.message);
      navigate("/login");
    }
  };
  return (
    <>
      <NavBar />
      {console.log("loat", location)}
      <div className="container-otp d-flex justify-content-center text-center">
        <form className="p-4">
          <h2 className="otp">OTP Verification Code</h2>
          <p className="otp-text">
            Type in the code we sent to
            {location.state !== null ? location.state.email : " Email"}
          </p>
          <div class="input-groups mt-4 d-flex justify-content-center ">
            <OtpInput
              value={OTP}
              onChange={handleChange}
              numInputs={6}
              separator={<span>-</span>}
              inputStyle={{
                width: "2rem",
                // height: "3rem",
                // margin: "0 1rem",
                fontSize: "1.2rem",
                // borderRadius: 4,
                // border: "1px solid rgba(0,0,0,0.3)",
              }}
            />
          </div>
          <div className="mt-2">
            <p className="otp-request">
              Didn't receive the code ?<a className="anchor "> Send again</a>
            </p>
          </div>
          <div className="button-common text-center mt-2">
            <button className="" onClick={handleSubmit}>
              Verify OTP
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default OtpVerfication;
