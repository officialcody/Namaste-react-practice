import { useEffect, useState } from "react";
import { SWIGGY_RESTAURANT_MENU_API } from "./app.constants";
import axios from "axios";
const useRestaurantMenu = (resId) => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const [menuCards, setMenuCards] = useState([]);

  const fetchData = async () => {
    const data = await axios.get(SWIGGY_RESTAURANT_MENU_API + resId);
    const cards =
      data?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    setRestaurantDetails({
      ...data?.data?.data?.cards[2]?.card?.card?.info,
      ...data?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[
        cards.length - 1
      ]?.card?.card,
    });
    setMenuCards(cards.slice(1, cards.length - 2));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return [restaurantDetails, menuCards];
};

export default useRestaurantMenu;
