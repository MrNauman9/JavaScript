import React, { useState } from 'react'

function RoomDetailPopup({popup, setPopup}) {
    const [data, setData] = useState({
        roomId: "",
        isChecked: false,
        roomName: "",
        idealTemperature: "",
        actualTemperature: "",
        minTesperature: "",
        maxTemperature: "",
      });
    const handleChange = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value,
        });
      };
      const closePopup = () => {
        setPopup(false);
        // setHomeId(null);
      };

  return (
   <>
   {popup && <form className="edit__popup">
    <h1 className="small__title full__area">
      Edit
      <span>Room</span>
    </h1>
    <div className="input__field checkbox__field full__area">
      <input id="check" type="checkbox" />
      <label htmlFor="check">Is Checked</label>
    </div>
    <div className="input__field">
      <span className="input__text">Room Name</span>
      <input type="text" placeholder="Write the Room Name" />
    </div>
    <div className="input__field">
      <span className="input__text">Ideal Temperature</span>
      <input
        type="text"
        placeholder="Write the Ideal Temperature of Room"
      />
    </div>
    <div className="input__field">
      <span className="input__text">Min Temperature</span>
      <input
        type="text"
        placeholder="Write the Minimum Temperature of Room"
      />
    </div>
    <div className="input__field">
      <span className="input__text">Max Temperature</span>
      <input
        type="text"
        placeholder="Write the Maximum Temperature of Room"
      />
    </div>
    <div className="input__field">
      <span className="input__text">Ideal Humanity</span>
      <input type="text" placeholder="Write the Ideal Humanity of Room" />
    </div>
    <div className="input__field">
      <span className="input__text">Min Humanity</span>
      <input type="text" placeholder="Write the Minimum Humanity of Room" />
    </div>
    <div className="input__field">
      <span className="input__text">Max Humanity</span>
      <input type="text" placeholder="Write the Maximum Humanity of Room" />
    </div>
    <a href="$" className="btn full__area">
      Submit
    </a>
  </form>}
   </>
  )
}

export default RoomDetailPopup