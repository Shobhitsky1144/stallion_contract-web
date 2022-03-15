import React, { useState, useEffect } from "react";
import "../../stylesheets/authentication.css";
import googlelogo from "../../assets/WebIcons/Google1x.png";
import Linkedin from "../../assets/WebIcons/Linkedin1x.png";
import Appleicon from "../../assets/WebIcons/Appleicon-1x.png";
import logo from "../../assets/WebIcons/stallion-cx-logo-web.png";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { auth, googleProvider } from "../../firebase";
import Axios from "axios";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { API_BASE_URL } from "../../constants/ApiBaseUrl";

const UserRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [full_name, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [confirm_password, setConfirm_Password] = useState("");
  const [signup_media, setSignup_media] = useState("");
  const [checkbox, setCheckBox] = useState(false);

  const [userInfo, setUserInfo] = useState(null);
  const [status, setStatus] = useState("");
  let navigate = useNavigate();

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const checkForm = () => {
    if (!email || !full_name || !password || !phone) {
      toast.error("please fill all the fields");
      return false;
    }
    if (!checkbox) {
      toast.error("You must agree with the terms and conditions");
      return false;
    }
    if (password.length <= 8) {
      toast.error("password should be atleast 8 characters");
      return false;
    } else {
      RegisterUser();
    }
  };

  const RegisterUser = async (signupMedia_type) => {
    var userName = "";
    var userEmail = "";
    try {
      if (signupMedia_type == "gmail") {
        userName = userInfo.user.displayName;
        userEmail = userInfo.user.email;
      } else {
        userName = full_name;
        userEmail = email;
        signupMedia_type = "email";
      }

      const res = await Axios.post(`${API_BASE_URL}/signup`, {
        full_name: userName,
        email: userEmail,
        phone: phone,
        password: password,
        confirm_password: password,
        signup_media: signupMedia_type,
      });
      const data = await res.data;

      console.log("register", data);
      if (data.status === false) {
        toast.error(data.errors[0]);
      } else {
        toast.success(data.message);
        setFullName("");
        setEmail("");
        setPhone("");
        setPassword("");
        setConfirm_Password("");
        setCheckBox("");

        if (
          data.user.isVerified == false ||
          data.user[0].signup_media === "email"
        ) {
          navigate("/otp-verification", {
            state: {
              email: data.email,
              status: data.user[0].otp,
              userid: data.user[0]._id,
            },
          });
        } else {
          localStorage.setItem("socialUser", JSON.stringify(data));
          window.location.href = "/home";
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const signInWithGoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((res) => {
        console.log(res.user.displayName);
        let info = res;
        setUserInfo(info);
        RegisterUser("gmail");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <div className="nav-auth d-flex ">
        <Link to="/">
          <img src={logo} alt="logo" height={70} />
        </Link>

        <Link to="/login" className="auth-link">
          <button className="button">Login</button>
        </Link>
      </div>
      <div className="container-auth mt-2">
        <div className="p-3 ">
          <div className="form-header">
            <div className="header-text ">
              <h2 className="">Sign up to Your Individual Account</h2>
              <p>Fill the below details to register</p>
            </div>
          </div>
          <div className="form-group mt-4">
            <input
              type="Full Name"
              className="form-control"
              value={full_name}
              placeholder="Full Name"
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="form-group mt-4">
            <input
              type="email"
              className="form-control"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group mt-4">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={handlePassword}
              required
            />
          </div>
          <div className="form-group mt-4">
            <input
              className="form-control"
              value={phone}
              type="text"
              placeholder="Mobile (OTP Verified)"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-check text-white form-check-label mt-2">
            <input
              type="checkbox"
              className="checkbox1 mr-2"
              onChange={(e) => setCheckBox(true)}
            />{" "}
            I agree to
            <span className="form-check-label">
              <a href=""> Terms & Conditions </a>
            </span>
            and
            <span className="form-check-label">
              <a href=""> Privacy Policy</a>
            </span>
          </div>

          <div className="form-button text-center mt-2">
            <button
              className="button"
              onClick={checkForm}
              // disabled={!checkbox}
            >
              Register
            </button>
          </div>
          <div className="form-footer">
            <p className="text-center text-white mt-3">
              Continue with social media account
            </p>
            <div className="social-icon d-flex justify-content-center">
              <div className="" onClick={signInWithGoogle}>
                {/* onClick={signInWithGoogle} */}
                <img src={googlelogo} alt="google" height={51} width={51} />
              </div>
              <img src={Linkedin} alt="linkedin" height={51} width={51} />
              <img src={Appleicon} alt="apple" height={51} width={51} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserRegister;
