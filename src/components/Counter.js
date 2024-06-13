import React from "react";
import { decrement, increment } from "../utils/slices/CounterSlice";
import { useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
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
  );
};

export default Counter;
