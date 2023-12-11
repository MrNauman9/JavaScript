import React, { useState } from "react";
import { useRoomAddMutation, useRoomUpdateMutation } from "../../redux/services/DZapi";
function RoomDetailPopup({ popup, setPopup,roomId, userId, setRoomId }) {
  const [addRoom] = useRoomAddMutation();
  const [updateRoom] = useRoomUpdateMutation();
  const [data, setData] = useState({
    isChecked: false,
    roomId: "",
    roomName: "",
    idealTemp: "",
    minTemp: "",
    maxTemp: "",
    idealHum: "",
    minHum: "",
    maxHum: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const closePopup = () => {
    setPopup(false);
    setRoomId(null);
    console.log("sdfs")
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const updateData = {
      roomProfileId: roomId,
      roomName: data.roomName,
      idealTemperature: data.idealTemp,
      isDefault: data.isChecked,
      idealHumidity: data.idealHum,
      limits: {
        "id": roomId,
        humidityMin: data.minHum,
        humidityMax: data.maxHum,
        temperatureMin: data.minTemp,
        temperatureMax: data.maxTemp,
      },
    }
    const addFormData = {
      roomProfileId: roomId,
      roomName: data.roomName,
      idealTemperature: data.idealTemp,
      isDefault: data.isChecked,
      idealHumidity: data.idealHum,
      limits: {
        humidityMin: data.minHum,
        humidityMax: data.maxHum,
        temperatureMin: data.minTemp,
        temperatureMax: data.maxTemp,
      },
    }
    const addData = {
      data: addFormData,
      userId: userId,
    }
    if(roomId){
      updateRoom(updateData)
    }else{
      addRoom(addData)
    }
    closePopup();
    setRoomId(null);
    console.log(roomId)
  };
  return (
    <>
      {popup && (
        <form className="edit__popup">
          <h1 className="small__title full__area">
            {roomId ? "Edit": "Add"}
            <span>Room</span>
          </h1>
          <div className="form__container">
            <div className="form">
              <div className="input__field checkbox__field full__area">
                <input
                  id="check"
                  name="isChecked"
                  type="checkbox"
                  checked={data.isChecked}
                  onChange={handleChange}
                />
                <label htmlFor="check">Is Checked</label>
              </div>

              <div className="input__field">
                <span className="input__text">Room Name</span>
                <input
                  type="text"
                  placeholder="Write the Room Name"
                  name="roomName"
                  value={data.roomName}
                  onChange={handleChange}
                />
              </div>

              <div className="input__field">
                <span className="input__text">Ideal Temperature</span>
                <input
                  type="number"
                  placeholder="Write the Ideal Temperature of Room"
                  name="idealTemp"
                  value={data.idealTemp}
                  onChange={handleChange}
                />
              </div>
              <div className="input__field">
                <span className="input__text">Min Temperature</span>
                <input
                  type="number"
                  name="minTemp"
                  placeholder="Write the Minimum Temperature of Room"
                  value={data.minTemp}
                  onChange={handleChange}
                />
              </div>
              <div className="input__field">
                <span className="input__text">Max Temperature</span>
                <input
                  name="maxTemp"
                  type="number"
                  placeholder="Write the Maximum Temperature of Room"
                  value={data.maxTemp}
                  onChange={handleChange}
                />
              </div>
              <div className="input__field">
                <span className="input__text">Ideal Humidity</span>
                <input
                  name="idealHum"
                  type="number"
                  placeholder="Write the Ideal Humidity of Room"
                  value={data.idealHum}
                  onChange={handleChange}
                />
              </div>
              <div className="input__field">
                <span className="input__text">Min Humidity</span>
                <input
                  name="minHum"
                  type="number"
                  placeholder="Write the Minimum Humidity of Room"
                  value={data.minHum}
                  onChange={handleChange}
                />
              </div>
              <div className="input__field">
                <span className="input__text">Max Humidity</span>
                <input
                  type="number"
                  placeholder="Write the Maximum Humidity of Room"
                  name="maxHum"
                  value={data.maxHum}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="seperator">
              <div className="btn " onClick={(e) => handleSubmit(e)}>
                Submit
              </div>
              <div className="btn " onClick={closePopup}>
                Cancle
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
}

export default RoomDetailPopup;
