import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  let resInfo = useRestaurantMenu(restaurantId);
  resInfo =
    resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;
  return (
    <div>
      {resInfo?.map((restaurant, index) => {
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
