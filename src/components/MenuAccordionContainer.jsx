import React from "react";
import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/app.constants";
import { addItem } from "../utils/slices/CartSlice";

export default MenuAccordionContainer = ({ menuCard, visible }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    console.log(item);
    dispatch(addItem(item));
  };

  return (
    <>
      <div
        className={
          visible
            ? "overflow-hidden transition-all duration-300 ease-in-out"
            : "h-0 overflow-hidden transition-all duration-300 ease-in-out"
        }
      >
        <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
          <ul className="w-full divide-gray-200 dark:divide-gray-700">
            {menuCard?.card?.card?.itemCards.map((itemCard) => {
              console.log(itemCard.card.info);
              return (
                <li key={itemCard.card.info.id} className="pb-3 sm:pb-4">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="flex-shrink-0">
                      <img
                        className="w-10 h-10 rounded-full"
                        src={IMG_CDN_URL + itemCard.card.info.imageId}
                        alt="Neil image"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncat">
                        {itemCard.card.info.name}
                      </p>
                      <p className="text-sm text-gray-500 flex-wrap">
                        {itemCard.card.info.description}
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900">
                      <div className="p-2 m-2">
                        ₹{itemCard.card.info.price / 100}.00
                      </div>
                      <button
                        onClick={() => handleAddItem(itemCard.card.info)}
                        className="p-2 m-2 bg-purple-800 text-white rounded-xl"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
