import React from "react";
import "./RoomDetail.css";
import RoomDetailCard from "../../Component/RoomDetailCard/RoomDetailCard";

function RoomDetail() {
  return (
    <div id="mainRoomDetail">
      <div className="house__detail">
        <div className="header__container">
          <h1 className="small__title">Room Details</h1>
          <div className="detail__container">
            <span className="detail__list">
              id
              <span>01</span>
            </span>
            <span className="detail__list">
              Device Name
              <span>XYZ</span>
            </span>
            <span className="detail__list">
              House Name
              <span>AVCE</span>
            </span>
            <span className="detail__list">
              Number of Rooms
              <span>24</span>
            </span>
            <span className="detail__list">
              Address
              <span>24 Street</span>
            </span>
          </div>
        </div>

        <div className="btns">
          <a href="#" className="btn">
            Delete
          </a>
          <i className="ri-delete-bin-7-fill"></i>
        </div>
      </div>
      <div className="room__container roomDetail__container">
        <h1 className="small__title">
          Rooms Temperature
          <span>General</span>
        </h1>
        <div className="tabs__container">
          <a href="#" className="tab active">
            General
          </a>
          <a href="#" className="tab">
            History
          </a>
        </div>
        <div className="cards__container">
          <RoomDetailCard />
        </div>
      </div>
    </div>
  );
}

export default RoomDetail;
