import React from "react";
import { Route, Routes } from "react-router-dom";
import { LinkedInCallback } from "react-linkedin-login-oauth2";
import ForgotPassword from "./pages/forgot-password/ForgotPassword";
import UserLogin from "./pages/user-authentication/UserLogin";
import CreateAccount from "./Screens/CreateAccount";
import "./stylesheets/commonstyle.css";
import UserRegister from "./pages/user-authentication/UserRegister";
import OtpVerification from "./pages/forgot-password/OtpVerification";
import UserHome from "./pages/Home/UserHome";
import UserProfile from "./pages/user-details/UserProfile";
import LinkedInPage from "./pages/LinkedInPage";
import { LinkedIn, LinkedInPopUp } from "react-linkedin-login-oauth2";
import AutoCompleteProfile from "./Screens/AutoCompleteProfile";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<CreateAccount />}></Route>
        <Route path="/login" element={<UserLogin />}></Route>
        <Route path="/register" element={<UserRegister />}></Route>
        <Route
          path="/auto-complete-profile"
          element={<AutoCompleteProfile />}
        ></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/otp-verification" element={<OtpVerification />}></Route>
        <Route path="/home" element={<UserHome />}></Route>
        <Route path="/profile" element={<UserProfile />}></Route>
        <Route path="/link" element={<LinkedInPage />}></Route>
        <Route path="/linkedin" element={<LinkedInCallback />}></Route>
      </Routes>
    </>
  );
};
export default App;
