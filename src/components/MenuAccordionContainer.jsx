import React from "react";
import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/app.constants";
import { addItem } from "../utils/slices/CartSlice";

export default MenuAccordionContainer = ({ menuCard, visible }) => {
  console.log(menuCard);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const renderAsPerData = (data) => {
    if (data.itemCards) {
      return data.itemCards.map((itemCard) => {
        return (
          <li key={itemCard.card.info.id} className="pb-3 sm:pb-4">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="flex-shrink-0">
                <img
                  className="w-10 h-10 rounded-full"
                  src={IMG_CDN_URL + itemCard.card.info.imageId}
                  alt={itemCard.card.info.name}
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
                  ₹
                  {(itemCard.card.info.price ||
                    itemCard.card.info.defaultPrice) / 100}
                  .00
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
      });
    } else if (data.carousel) {
      return data.carousel.map((item) => {
        return (
          <li key={item.dish.info.id} className="pb-3 sm:pb-4">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="flex-shrink-0">
                <img
                  className="w-10 h-10 rounded-full"
                  src={IMG_CDN_URL + item.dish.info.imageId}
                  alt={item.dish.info.name}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncat">
                  {item.dish.info.name}
                </p>
                <p className="text-sm text-gray-500 flex-wrap">
                  {item.dish.info.description}
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900">
                <div className="p-2 m-2">
                  ₹{(item.dish.info.defaultPrice || item.dish.info.price) / 100}
                  .00
                </div>
                <button
                  onClick={() => handleAddItem(item.dish.info)}
                  className="p-2 m-2 bg-purple-800 text-white rounded-xl"
                >
                  Add
                </button>
              </div>
            </div>
          </li>
        );
      });
    } else if (data.categories) {
      return data.categories.map((category, index) => {
        return (
          <li key={category.title + index} className="pb-3 sm:pb-4">
            <h1 className="text-lg font-bold">{category.title}</h1>
            <ul className="w-full divide-gray-200 dark:divide-gray-700">
              {category.itemCards.map((categoryCard, catIndex) => {
                return (
                  <li key={categoryCard.card.info.id + catIndex + "-id"}>
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <div className="flex-shrink-0">
                        <img
                          className="w-10 h-10 rounded-full"
                          src={IMG_CDN_URL + categoryCard.card.info.imageId}
                          alt={categoryCard.card.info.name}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncat">
                          {categoryCard.card.info.name}
                        </p>
                        <p className="text-sm text-gray-500 flex-wrap">
                          {categoryCard.card.info.description}
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        <div className="p-2 m-2">
                          ₹
                          {(categoryCard.card.info.defaultPrice ||
                            categoryCard.card.info.price) / 100}
                          .00
                        </div>
                        <button
                          onClick={() => handleAddItem(categoryCard.card.info)}
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
          </li>
        );
      });
    }
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
            {renderAsPerData(menuCard?.card?.card)}
          </ul>
        </div>
      </div>
    </>
  );
};
