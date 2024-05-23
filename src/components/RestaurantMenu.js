import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { addItem } from "../utils/slices/CartSlice";
import { useDispatch } from "react-redux";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../utils/app.constants";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();

  let [restaurantDetails, menuCards] = useRestaurantMenu(restaurantId);

  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem("grapes"));
  };
  console.log(menuCards);
  return !restaurantDetails ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div>
        <h2>Restaurant Name - {restaurantDetails?.name}</h2>
        <img
          className="rounded-full h-96 w-60s"
          src={IMG_CDN_URL + restaurantDetails?.cloudinaryImageId}
        />
        <h3>
          Address - {restaurantDetails?.areaName},{" "}
          {restaurantDetails.completeAddress}, {restaurantDetails?.city}
        </h3>
        <h3>Star Rating - {restaurantDetails?.avgRating}</h3>
        <h3>Total Ratings - {restaurantDetails.totalRatingsString} </h3>
        {/* <button
          onClick={() => handleAddItem()}
          className="p-2 m-5 bg-green-100"
        >
          Add Item
        </button> */}
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {menuCards.map((menuCard) => (
            <li key={menuCard.card.card.type}>
              <div className="p-2 m-2 ">
                <div className="bg-orange-200">{menuCard.card.card.title}</div>
                <ul>
                  {menuCard.card.card.itemCards.map((itemCard) => (
                    <li key={itemCard.card.info.id}>
                      <div className="bg-green-200">
                        {itemCard.card.info.name}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
