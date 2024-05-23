import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/slices/CartSlice";

export default MenuAccordionContainer = ({ menuCard }) => {
  const dispatch = useDispatch();
  const handleAddItem = (itemid) => {
    dispatch(addItem(itemid));
  };
  return (
    <>
      <ul className="">
        {menuCard.card.card.itemCards.map((itemCard) => (
          <li className="bg-green-200" key={itemCard.card.info.id}>
            <span className="p-2 m-2">{itemCard.card.info.name}</span>
            <button
              onClick={() => handleAddItem(itemCard.card.info.id)}
              className="p-2 m-2 bg-purple-800 text-white rounded-xl"
            >
              Add
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
