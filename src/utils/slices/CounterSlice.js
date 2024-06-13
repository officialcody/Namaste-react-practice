import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: "counter",
  initialState: {
    value: 1,
  },
  reducers: {
    increment: (state, action) => {
      console.log(action);
      state.value += action.payload;
    },
    decrement: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { increment, decrement } = counter.actions;

export default counter.reducer;
