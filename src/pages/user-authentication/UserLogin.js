import React, { useState, useEffect } from "react";
import "../../stylesheets/authentication.css";
import googlelogo from "../../assets/WebIcons/Google1x.png";
import Linkedin from "../../assets/WebIcons/Linkedin1x.png";
import Appleicon from "../../assets/WebIcons/Appleicon-1x.png";
import logo from "../../assets/WebIcons/stallion-cx-logo-web.png";
import { Link } from "react-router-dom";
import { auth, googleProvider } from "../../firebase";
import Axios from "axios";
import { toast } from "react-toastify";
import { loginUser } from "../../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { API_BASE_URL } from "../../constants/ApiBaseUrl";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [full_name, setFullName] = useState("");
  const [phone, setPhone] = useState("");

  const [userInfo, setUserInfo] = useState(null);
  const [token, setToken] = useState();

  const dispatch = useDispatch();

  const checkForm = () => {
    if (!email || !password) {
      toast.error("please fill all the fields");
      return false;
    } else {
      LoginUser();
    }
  };

  const LoginUser = async (signupMedia_type) => {
    var userName = "";
    var userEmail = "";
    try {
      if (signupMedia_type == "gmail") {
        userName = userInfo.user.displayName;
        userEmail = userInfo.user.email;
        const res = await Axios.post(`${API_BASE_URL}/signup`, {
          full_name: userName,
          email: userEmail,
          phone: phone,
          password: password,
          confirm_password: password,
          signup_media: signupMedia_type,
        });
        const data = await res.data;
        console.log("logindata", data);
        if (data.user.isVerified == false) {
          toast.error(data.message);
        } else {
          toast.success(data.message);
          window.location.href = "/home";
        }
      } else {
        userEmail = email;
        const res = await Axios.post(`${API_BASE_URL}/login`, {
          email: userEmail,

          password: password,
        });
        const data = await res.data;
        console.log("logindata", data);
        if (data.status === false) {
          toast.error(data.errors[0]);
        } else {
          toast.success(data.message);
          localStorage.setItem("currentUser", JSON.stringify(data));
          dispatch(loginUser(data));
          setEmail("");
          setPassword("");
          setToken(data.token);
          // localStorage.setItem("token", data.token);
          window.location.href = "/home";
        }
      }
    } catch (error) {
      console.error("errr", error);
    }
  };

  const signInWithGoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((res) => {
        console.log(res.user.displayName);
        let info = res;
        setUserInfo(info);
        LoginUser("gmail");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      {/* <div className="nav-auth d-flex ">
        <Link to="/">
          <img src={logo} alt="logo" height={70} />
        </Link>
        <Link to="/register" className="auth-link ">
          <button className="button">Register </button>
        </Link>
      </div> */}

      <div className="container-auth mt-4">
        <div className="p-3">
          <div className="form-header">
            <div className="header-text ">
              <h2 className="">Login to Your Individual Account</h2>
              <p>Fill the below details to login</p>
            </div>
          </div>
          <div className="form-group  mt-4">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-4">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <span className="form-link ">
            <Link to="/forgot-password" className="forgot-link ">
              Forgot Password?
            </Link>
          </span>

          <div className="form-button text-center mt-2">
            <button className="button" onClick={checkForm}>
              Login
            </button>
          </div>
          <div className="form-footer">
            <p className="text-center text-white mt-3">
              Continue with social media account
            </p>
            <div className="social-icon d-flex justify-content-center">
              <div className="" onClick={signInWithGoogle}>
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

export default UserLogin;
