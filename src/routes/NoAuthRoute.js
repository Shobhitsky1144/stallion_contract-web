import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateAccount from "../Screens/CreateAccount";

export const NoAuthRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CreateAccount />}></Route>
      </Routes>
    </>
  );
};
