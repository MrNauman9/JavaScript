import React, { useEffect, useId, useState } from "react";
import "./home.css";
import HomeCard from "../../Component/HomeCard/HomeCard";
import { useGetAllUserHomesQuery } from "../../redux/services/DZapi";
import HomePopup from "../../Component/HomePopup/HomePopup";

function Home() {
  const [popup, setPopup] = useState(false)
  const [userId, setUserId] = useState(1);
  const [homeId, setHomeId] = useState();
  const {
    data: allUserHomes,
    isLoading,
    isError,
  } = useGetAllUserHomesQuery(userId);
  console.log(allUserHomes);
  useEffect(() => {
    if (isLoading) {
      console.log("Loading...");
    }

    if (isError) {
      console.error("Error fetching data");
    }

    if (allUserHomes) {
      console.log(allUserHomes);
    }
  }, [isLoading, isError, allUserHomes]);
  console.log(useId)
  return (
    <>
      <h1 className="title seperator">
        <span></span>
        Temperature Checker
        <div className="btn" onClick={() => setPopup(true)}> 
          Add
          <i className="ri-add-fill"></i>
        </div>
      </h1>
      <div className="cards__container">
        {allUserHomes &&
          allUserHomes.map((home) => ( 
            <HomeCard
              setPopup={setPopup}
              setHomeId={setHomeId}
              key={home.homeId}
              houseName={home.address || "Unnamed House"}
              hid={home.homeId}
              deviceName={home.deviceEui || "No Device"}
            />
          ))}
      </div>

      <HomePopup popup={popup} homeId={homeId} userId={userId} setHomeId={setHomeId} setPopup={setPopup} />

    </>
  );
} 

export default Home;