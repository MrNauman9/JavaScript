import React from "react";

function RoomDetailCard() {
  return (
    <div className="room__card" >
      <div className="card__img">
        <img src="images/temprautre.png" alt="Temperature Image"/>
        <span className="room__text">Room Temperature</span>
      </div>
      <span className="room__text">
        Min Temperature
        <span>20 Degree</span>
      </span>
      <span className="room__text">
        Max Temperature
        <span>32 Degree</span>
      </span>
      <span className="room__text">
        Default Temperature
        <span>28 Degree</span>
      </span>
    </div>
  );
}

export default RoomDetailCard;
