import { useEffect, useState } from "react";
import { SWIGGY_RESTAURANT_MENU_API } from "./app.constants";
import axios from "axios";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const fetchData = async () => {
    const data = await axios.get(SWIGGY_RESTAURANT_MENU_API + resId);
    setResInfo(data.data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return resInfo;
};

export default useRestaurantMenu;
