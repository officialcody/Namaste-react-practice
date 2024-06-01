import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  if (cartItems.length === 0) {
    return (
      <h4 className="p-2 m-2 text-3xl">No items added to the cart yet.</h4>
    );
  }

  return (
    <div className="flex">
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Cart;
