import { createSlice } from "@reduxjs/toolkit";

// Part1: Define Slice (including reducers and actions)
const likeItems = [];
const shippingAddress = {};
const price = {};
const paymentMethod = "Google";
const initialState = { likeItems, shippingAddress, paymentMethod, price };
const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    addLikeItems: (state, action) => {
      const item = action.payload;
      const product = state.likeItems.find((x) => x.id === item.id);
      if (!!product) {
        const likeItems = state.likeItems.map((x) =>
          x.id === product.id ? item : x
        );
        state.likeItems = likeItems;
      } else {
        state.likeItems = [...state.likeItems, item];
      }
    },
    removeLikeItems: (state, action) => {
      state.likeItems = state.likeItems.filter((x) => x.id !== action.payload);
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
    savePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
    savePrice: (state, action) => {
      state.price = action.payload;
    },
  },
});

// export state to global
export const selectLikeItems = (state) => state.like.likeItems;
export const selectShippingAddress = (state) => state.like.shippingAddress;
export const selectPaymentMethod = (state) => state.like.paymentMethod;
export const selectPrice = (state) => state.like.price;

// export actions to global
export const {
  addLikeItems,
  removeLikeItems,
  saveShippingAddress,
  savePaymentMethod,
  savePrice,
} = likeSlice.actions;

// export reducer to global
export default likeSlice.reducer;
