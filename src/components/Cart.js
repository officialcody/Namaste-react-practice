import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../utils/slices/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const getTotalPrice = () => {
    return cartItems.reduce((acc, curr) => acc + curr.price, 0);
  };

  if (cartItems.length === 0) {
    return (
      <h4 className="p-2 m-2 text-3xl">No items added to the cart yet.</h4>
    );
  }

  return (
    <div className="flex flex-col text-center">
      <div>
        <h1 className="text-4xl font-bold p-2 m-2">Cart</h1>
        <button
          className="btn rounded-lg bg-red-500 p-2 m-2 text-white"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      <ul className="max-w-md divide-y py-auto mx-auto divide-gray-200 dark:divide-gray-700">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </ul>
      <div className="border-b border-t border-bold text-bold p-4 m-4">
        <h1 className="text-4xl p-2 m-2">
          Total Price: ₹{getTotalPrice() / 100}.00
        </h1>
      </div>
    </div>
  );
};

export default Cart;
