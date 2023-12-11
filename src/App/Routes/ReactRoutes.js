import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "./Layout";
import HouseDetail from "../Pages/HouseDetail/HouseDetail";
import RoomDetail from "../Pages/RoomDetail/RoomDetail";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
function ReactRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {localStorage.getItem("user") && (
            <>
              <Route index element={<Home />} />
              <Route path="houseDetail" element={<HouseDetail />} />
              <Route path="roomDetail" element={<RoomDetail />} />
            </>
          )}
          {!localStorage.getItem("user") && (
            <>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </>
          )}
          <Route path="*" element={localStorage.getItem("user") ? <Home /> : <Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default ReactRoutes;
