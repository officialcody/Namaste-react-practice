import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import useRestaurantMenu from "../utils/useRestaurantMenu";

import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../utils/app.constants";
import MenuAccordionContainer from "./MenuAccordionContainer";
import Stars from "./Stars";
import GoogleMaps from "./GoogleMaps";
import { FaMinus, FaPlus } from "react-icons/fa6";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const [restaurantDetails, menuCards] = useRestaurantMenu(restaurantId);
  const [visibleAccordion, setVisibleAccordion] = useState(0);

  const getClosingTime = () => {
    return formatTimeFromTimestamp(
      new Date(restaurantDetails?.availability?.nextCloseTime).getTime()
    );
  };

  function formatTimeFromTimestamp(timestamp) {
    // Convert timestamp to Date object
    const date = new Date(timestamp);

    // Extract hours, minutes, and seconds
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // Format the time (HH:MM:SS)
    const formattedTime = `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    return formattedTime;
  }

  return !restaurantDetails ? (
    <Shimmer />
  ) : (
    <>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-8 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full max-h-[300px] object-cover object-center rounded border border-gray-200"
              src={IMG_CDN_URL + restaurantDetails?.cloudinaryImageId}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                RESTAURANT NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {restaurantDetails?.name}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <Stars totalStars={5} stars={restaurantDetails?.avgRating} />
                  <span className="text-gray-600 ml-3">
                    {restaurantDetails?.totalRatingsString}
                  </span>
                </span>
              </div>
              <p className="leading-relaxed">
                <span className="title-font font-bold">Address:</span>{" "}
                {restaurantDetails?.areaName},{" "}
                {restaurantDetails?.completeAddress}, {restaurantDetails?.city}
              </p>
              <div className="mt-6 items-center pb-3 border-b-2 border-gray-200 mb-5">
                <div className="flex">
                  <span className="mr-3 title-font font-bold">Cuisines: </span>
                  <span className="leading-relaxed">
                    {restaurantDetails?.cuisines.join(", ")}
                  </span>
                </div>
                <div className="flex flex-row leading-relaxed mt-2">
                  <GoDotFill
                    className={
                      restaurantDetails?.availability.opened
                        ? "text-green-500 text-2xl"
                        : "text-red-500 text-2xl"
                    }
                  />
                  <span className="font-bold leading-relaxed">
                    {restaurantDetails?.availability.opened
                      ? "Opened"
                      : "Closed"}
                  </span>
                  {restaurantDetails?.availability.opened && (
                    <span className="font-bold leading-relaxed pl-6">
                      Closes at: {getClosingTime()}
                    </span>
                  )}
                </div>
                <div className="flex flex-row leading-relaxed mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 pb-8 mx-auto">
          <ul className="lg:w-4/5 mx-auto">
            {menuCards.map((menuCard, index) => (
              <li key={menuCard.card.card.type}>
                <div
                  className="relative mb-3"
                  onClick={() => setVisibleAccordion(index)}
                >
                  <h6 className="mb-0">
                    <button className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500">
                      <span>{menuCard.card.card.title}</span>
                      {visibleAccordion === index ? (
                        <FaMinus className="absolute right-0 pt-1" />
                      ) : (
                        <FaPlus className="absolute right-0 pt-1" />
                      )}
                    </button>
                  </h6>
                  {visibleAccordion === index && (
                    <MenuAccordionContainer
                      visible={visibleAccordion === index}
                      menuCard={menuCard}
                    />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className="flex mx-auto justify-center">
        <GoogleMaps
          latitude={restaurantDetails?.latLong.split(",")[0]}
          longitude={restaurantDetails?.latLong.split(",")[1]}
        />
      </div>
    </>
  );
};

export default RestaurantMenu;
