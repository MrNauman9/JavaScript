import React, { useState } from "react";
import RoomCard from "../../Component/RoomCard/RoomCard";
import "./HouseDetail.css";
import HouseDetailCard from "../../Component/HouseDetailCard/HouseDetailCard";
import { useLocation } from "react-router-dom";
import RoomDetailPopup from "../../Component/RoomDetailPopup/RoomDetailPopup";
function HouseDetail() {
  const [userId, setUserId] = useState(1);
  const [roomId, setRoomId] = useState(null);
  const [popup, setPopup] = useState(false);
  const location = useLocation();
  const houseId = location?.state?.houseid;

  const addRoom = () => {
    setRoomId(null);
    setPopup(true);
  };
  return (
    <div id="mainHouseDetail">
      <HouseDetailCard />
      <div className="room__container">
        <h1 className="small__title seperator">
          <span></span>
          Rooms
          <div onClick={addRoom} className="btn">
            Add
            <i className="ri-add-fill"></i>
          </div>
        </h1>
        <div className="cards__container">
          <RoomCard setPopup={setPopup} setRoomId={setRoomId} />
        </div>
      </div>

      <RoomDetailPopup
        popup={popup}
        roomId={roomId}
        setRoomId={setRoomId}
        setPopup={setPopup}
        userId={userId}
      />
    </div>
  );
}

export default HouseDetail;