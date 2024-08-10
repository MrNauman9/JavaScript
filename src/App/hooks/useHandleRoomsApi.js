import { useEffect, useState, useCallback } from "react";
import { Config } from "../constant/Index";

export const useHandleRoomsApi = ({ initialAction = "GET", homeId }) => {
  const [allRooms, setAllRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  const baseUrl = `${Config.serverUrl}rooms`;

  const handleApiCall = useCallback(async (url, method, body = null) => {
    setIsLoading(true);
    setIsError(false);
    setError(null);
    try {
      const options = {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : null,
      };
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      setIsError(true);
      setError(error.message);
      console.error("API call error:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getRooms = useCallback(async () => {
    const url = homeId ? `${baseUrl}?home_id=${homeId}` : baseUrl;
    console.log(url, "url")
    const data = await handleApiCall(url, "GET");
    if (data) setAllRooms(data);
  }, [handleApiCall, homeId]);

  const addRoom = useCallback(
    async (newRoom) => {
      const roomWithHomeId = { ...newRoom, home_id: homeId };
      const data = await handleApiCall(baseUrl, "POST", roomWithHomeId);
      if (data) setAllRooms((prev) => [...prev, data]);
      return data;
    },
    [handleApiCall, homeId]
  );

  const updateRoom = useCallback(
    async (id, updatedRoom) => {
      const data = await handleApiCall(`${baseUrl}/${id}`, "PUT", updatedRoom);
      if (data) {
        setAllRooms((prev) =>
          prev.map((room) => (room.id === id ? data : room))
        );
      }
      return data;
    },
    [handleApiCall]
  );

  const deleteRoom = useCallback(
    async (id) => {
      const data = await handleApiCall(`${baseUrl}/${id}`, "DELETE");
      if (data) {
        setAllRooms((prev) => prev.filter((room) => room.id !== id));
      }
      return data;
    },
    [handleApiCall]
  );

  useEffect(() => {
    if (initialAction === "GET") {
      getRooms();
    }
  }, [initialAction, getRooms]);

  return {
    allRooms,
    isLoading,
    isError,
    error,
    getRooms,
    addRoom,
    updateRoom,
    deleteRoom,
  };
};

export default useHandleRoomsApi;
