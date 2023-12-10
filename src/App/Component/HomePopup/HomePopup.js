import React, { useState } from "react";
import {
  useAddHomeMutation,
  useUpdateHomeMutation,
} from "../../redux/services/DZapi";
function HomePopup({ popup, setPopup, homeId, setHomeId, userId }) {
  const [addHome] = useAddHomeMutation();
  const [updateHome] = useUpdateHomeMutation();
  const [data, setData] = useState({
    address: "",
    deviceEui: "",
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const closePopup = () => {
    setPopup(false);
    setHomeId(null);
  };
  console.log(userId)
  const handleSubmit = (e) => {
    e.preventDefault();
    const updateData = {
      data : {
        homeId: homeId,
      address: data.address,
      deviceEui: data.deviceEui,
      },
      userId: userId
    };
    const addData = {
      data : {
        address: data.address,
        deviceEui: data.deviceEui,
      },
      userId: userId
    }
    if (homeId) {
      updateHome(updateData);
      closePopup();
      setHomeId(null);
    } else {
      addHome(addData);
      closePopup();
      setHomeId(null);
    }
  };
  return (
    <>
      {popup && (
        <form className="edit__popup">
          <h1 className="small__title full__area">
            {homeId ? "Edit" : "Add"} <span>House</span>
          </h1>

          <div className="input__field full__area">
            <span className="input__text">Address</span>
            <input
              type="text"
              name="address"
              onChange={handleChange}
              placeholder="Write the Address of the house"
            />
          </div>

          <div className="input__field full__area">
            <span className="input__text">Device EUI</span>
            <input
              type="text"
              name="deviceEui"
              onChange={handleChange}
              placeholder="Write the Device EUI"
            />
          </div>

          <div className="btn" onClick={handleSubmit}>
            Submit
          </div>
          <div className="btn" onClick={() => closePopup()}>
            Cancel
          </div>
        </form>
      )}
    </>
  );
}

export default HomePopup;
