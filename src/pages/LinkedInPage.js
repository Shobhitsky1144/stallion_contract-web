import React, { useState } from "react";
// import styled from "styled-components";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import linkedin from "react-linkedin-login-oauth2/assets/linkedin.png";
import { Link } from "react-router-dom";
import Axios from "axios";

function LinkedInPage() {
  const { linkedInLogin } = useLinkedIn({
    clientId: "77lcbfhsj5ok9b",
    redirectUri: "http://localhost:3000/linkedin",
    onSuccess: (code) => {
      console.log(code);
      // // setCodes(code);
      getUser(code);
      // setErrorMessage("");
    },

    scope: "r_emailaddress r_liteprofile",
    onError: (error) => {
      console.log("sdsd", error);
      // setCodes("");
      // setErrorMessage(error.errorMessage);
    },
  });

  const getUser = async (code) => {
    const res = await Axios.post(
      `https://www.linkedin.com/oauth/v2/accessToken?client_id=77lcbfhsj5ok9b&client_secret=4GfTP17hq4GlgNdy&grant_type=authorization_code&redirect_uri=http://localhost:3000/linkedin&code=${code}`
    );

    const data = await res.data;
    const profile = await findDetails(data.access_token);
    console.log("logindata", data, profile);
  };

  const findDetails = async (access_token) => {
    console.log("access_tokenaccess_token", access_token);
    const instance = Axios.create({
      baseURL: "https://api.linkedin.com/v2/",
      timeout: 1000,
      headers: { Authorization: "Bearer " + access_token },
    });

    instance
      .get(
        "me?projection=(id,firstName,lastName,profilePicture(displayImage~:playableStreams))"
      )
      .then((response) => {
        console.log("responseresponseresponseresponseresponse", response);
      });
  };
  return (
    <>
      {/* {console.log("codes", codes)} */}
      <img
        onClick={linkedInLogin}
        src={linkedin}
        alt="Log in with Linked In"
        style={{ maxWidth: "180px", cursor: "pointer" }}
      />
      <h1>jj</h1>
    </>
  );
}
export default LinkedInPage;
