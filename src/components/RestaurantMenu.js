import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../utils/app.constants";
import MenuAccordionContainer from "./MenuAccordionContainer";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../utils/slices/CounterSlice";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const [restaurantDetails, menuCards] = useRestaurantMenu(restaurantId);
  const [visibleAccordion, setVisibleAccordion] = useState(0);
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

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
        <div className="block">
          <h4>Counter</h4>
          <button
            onClick={() => dispatch(increment(1))}
            className="block focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Increment by 1
          </button>
          <button
            onClick={() => dispatch(increment(5))}
            className="block focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Increment by 5
          </button>
          <button
            onClick={() => dispatch(decrement(1))}
            className="block focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Decrement by 1
          </button>
          <button
            onClick={() => dispatch(decrement(5))}
            className="block focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Decrement by 5
          </button>
          <h2>Counter: {counter}</h2>
        </div>
      </div>
      <div>
        <ul>
          {menuCards.map((menuCard, index) => (
            <li className="" key={menuCard.card.card.type}>
              <div className="p-2 m-2 ">
                <div
                  className="bg-orange-200"
                  onClick={() => setVisibleAccordion(index)}
                >
                  {menuCard.card.card.title}
                </div>
                {visibleAccordion === index && (
                  <MenuAccordionContainer menuCard={menuCard} />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
