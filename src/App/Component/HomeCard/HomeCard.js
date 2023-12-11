import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDeleteHomeMutation } from "../../redux/services/DZapi";
function HomeCard({ houseName, hid, deviceName , setPopup,setHomeId}) {
  const [deleteHome] = useDeleteHomeMutation();
  const navigate = useNavigate();
  const navigateHouseDetail = ()=> {
    navigate("/houseDetail", { state: { houseid: hid } });
  }
  const editHome = (e) => {
    e.stopPropagation();
    setPopup(true);
    setHomeId(hid);
  };
  
  const deleteHomeF = (e) => {
    e.stopPropagation();
    console.log(hid)
    deleteHome(hid);
  };
  return (
    <div onClick={navigateHouseDetail} key={hid} className="house__card">
      <div className="card__img">
        <img src="images/home.png" alt="Home Image" />
        <span className="house__text">{houseName}</span>
      </div>
      <span className="house__text">
        Id
        <span>{hid}</span>
      </span>
      <span className="house__text">
        Device Name
        <span>{deviceName}</span>
      </span>
      
      <i className="ri-edit-box-fill edit__icon" onClick={(e) => editHome(e)}></i>
<i className="ri-delete-bin-7-fill delete__icon" onClick={(e) => deleteHomeF(e)}></i>

    </div>
  );
}

export default HomeCard;
