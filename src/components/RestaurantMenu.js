import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../utils/app.constants";
import MenuAccordionContainer from "./MenuAccordionContainer";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const [restaurantDetails, menuCards] = useRestaurantMenu(restaurantId);
  const [visibleAccordion, setVisibleAccordion] = useState(0);

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
