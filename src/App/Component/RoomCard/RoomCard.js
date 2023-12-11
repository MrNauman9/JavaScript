import React from "react";
import { Link } from "react-router-dom";

function RoomCard() {
  return (
    <Link to="/roomDetail" className="room__card">
      <div className="card__img">
        <img src="images/room.png" alt="Room Image" />
        <span className="room__text">Room Number</span>
      </div>
      <span className="room__text">
        id 01
        <span>01</span>
      </span>
      <span className="room__text">
        Device Name
        <span>XYX</span>
      </span>
      
      <i className="ri-edit-box-fill edit__icon"></i>
      <i className="ri-delete-bin-7-fill delete__icon"></i>
    </Link>
  );
}

export default RoomCard;
