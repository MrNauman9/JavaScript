import React, { useState } from "react";
import RoomCard from "../../Component/RoomCard/RoomCard";
import "./HouseDetail.css";
import HouseDetailCard from "../../Component/HouseDetailCard/HouseDetailCard";
import { useLocation } from "react-router-dom";
import RoomDetailPopup from "../../Component/RoomDetailPopup/RoomDetailPopup";
function HouseDetail() {
  const [popup, setPopup] = useState(true)
  const location = useLocation();
  const houseId = location?.state?.houseid;
  console.log(houseId);
  return (
    <div id="mainHouseDetail">
      <HouseDetailCard />
      <div className="room__container">
        <h1 className="small__title seperator"> 
          <span></span>
          Rooms
          <a href="#" className="btn">
            Add
            <i className="ri-add-fill"></i>
          </a>
        </h1>
        <div className="cards__container">
          <RoomCard />
        </div>
      </div>

      <RoomDetailPopup popup={popup} setPopup={setPopup} />

    </div>
  );
}

export default HouseDetail;
