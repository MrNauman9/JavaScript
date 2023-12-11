import React from "react";
import { useNavigate } from "react-router-dom";
import { useRemoveRoomMutation } from "../../redux/services/DZapi";

function RoomCard({ key, data, setPopup, setRoomId }) {
  const [removeRoom] = useRemoveRoomMutation(); // Getting the mutation function directly
  
  const navigate = useNavigate();

  const editRoom = (e) => {
    e.stopPropagation();
    setRoomId(data?.id || 1);
    setPopup(true);
  };

  const deleteRoom = async (e) => {
    e.stopPropagation();
    try {
      const response = await removeRoom(data?.id || 1); // Invoking the removeRoom mutation with the room ID
      console.log(response); // Log the response if needed
    } catch (error) {
      console.error(error); // Log any errors if the mutation fails
    }
  };

  const navigateRoomDetail = () => {
    navigate("/roomDetail", { state: { roomId: data?.id } });
  };
  return (
    <div key={key} onClick={navigateRoomDetail} className="room__card">
      <div className="card__img">
        <img src="images/room.png" alt="Room Image" />
        <span className="room__text">Room Number</span>
      </div>
      <span className="room__text">
        id
        <span>{data?.roomNumber || "01"}</span>
      </span>
      <span className="room__text">
        Device Name
        <span>{data?.deviceName || "XYZ"}</span>
      </span>
      <i className="ri-edit-box-fill edit__icon" onClick={editRoom}></i>
      <i className="ri-delete-bin-7-fill delete__icon" onClick={deleteRoom}></i>
    </div>
  );
}

export default RoomCard;