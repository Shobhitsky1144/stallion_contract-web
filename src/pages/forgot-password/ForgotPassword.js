import Axios from "axios";
import React, { useState } from "react";
import "../../stylesheets/forgotpassword.css";
import NavBar from "./NavBar";
import { toast } from "react-toastify";
import { API_BASE_URL } from "../../constants/ApiBaseUrl";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please provide email id");
      return false;
    }
    const res = await Axios.post(`${API_BASE_URL}/forgot-password`, {
      email,
    });
    const data = await res.data;
    console.log("forgot", data);
    if (data.status === false) {
      toast.error(data.message);
    } else {
      toast.success(data.message);
    }

    console.log("data", data);
  };
  return (
    <>
      <NavBar />
      <div className="container-forgot d-flex justify-content-center text-center">
        <form className=" p-4">
          <h2 className="">Forgot Password</h2>
          <div class="input-group mt-4  d-flex justify-content-center">
            <input
              type="email"
              class="form-control forgtinput"
              placeholder="Email"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="button-common text-center mt-3">
            <button className="" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
