import React from "react";

function HouseDetailCard() {
  return (
    <div className="house__detail">
      <div className="header__container">
        <h1 className="small__title">House Details</h1>
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
  );
}

export default HouseDetailCard;
