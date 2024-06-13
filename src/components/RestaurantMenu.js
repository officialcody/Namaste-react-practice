import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../utils/app.constants";
import MenuAccordionContainer from "./MenuAccordionContainer";
import Stars from "./Stars";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const [restaurantDetails, menuCards] = useRestaurantMenu(restaurantId);
  const [visibleAccordion, setVisibleAccordion] = useState(0);

  console.log(restaurantDetails);

  return !restaurantDetails ? (
    <Shimmer />
  ) : (
    // <div className="flex">
    //   <div>
    //     <ul>
    //       {menuCards.map((menuCard, index) => (
    //         <li className="" key={menuCard.card.card.type}>
    //           <div className="p-2 m-2 ">
    //             <div
    //               className="bg-orange-200"
    //               onClick={() => setVisibleAccordion(index)}
    //             >
    //               {menuCard.card.card.title}
    //             </div>
    //             {visibleAccordion === index && (
    //               <MenuAccordionContainer menuCard={menuCard} />
    //             )}
    //           </div>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full max-h-[600px] object-cover object-center rounded border border-gray-200"
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
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <div className="flex">
                <span className="mr-3 title-font font-bold">Cuisines: </span>
                <span className="leading-relaxed">
                  {restaurantDetails?.cuisines.join(", ")}
                </span>
              </div>
            </div>
            <div className="flex">
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
        </div>
      </div>
    </section>
  );
};

export default RestaurantMenu;
