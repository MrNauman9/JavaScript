import React from "react";
import { useDeleteHomeMutation } from "../../redux/services/DZapi";
function HouseDetailCard({ data,  }) {
  const [deleteHome] = useDeleteHomeMutation();
  const houseDelete = () => {
    deleteHome(data?.id);
  };
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
            <span>{data?.deviceName || "Xyz"}</span>
          </span>
          <span className="detail__list">
            House Address
            <span>{data?.houseName || "Street 983"}</span>
          </span>
          <span className="detail__list">
            Number of Rooms
            <span>{data?.numberOfRooms || "10"}</span>
          </span>
          <span className="detail__list">
            Address
            <span>{data?.address || "24 Street"}</span>
          </span>
        </div>
      </div>
      <div className="btns"  >
        <div className="btn" style={{display: "flex", gap: "10px"}} onClick={houseDelete}>
          Delete
        <i className="ri-delete-bin-7-fill"></i>
        </div>
      </div>
    </div>
  );
}

export default HouseDetailCard;