import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { SWIGGY_RESTAURANT_MENU_API } from "../app.constants";

const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState([]);
  const params = useParams();
  console.log(params);
  useEffect(() => {
    fetchRestaurantMenu();
  }, []);
  const fetchRestaurantMenu = async () => {
    const data = await axios.get(
      SWIGGY_RESTAURANT_MENU_API + params.restaurantId
    );
    setRestaurantInfo(
      data?.data?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[3]
        ?.card?.card?.itemCards
    );
  };

  return (
    <div>
      {console.log(restaurantInfo)}
      {restaurantInfo?.map((restaurant, index) => {
        return (
          <ul>
            <li>
              {restaurant?.card?.info?.name} - {restaurant?.card?.info?.price}
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
