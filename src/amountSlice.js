import { createSlice } from "@reduxjs/toolkit";

export const amountSlice = createSlice({
  name: "balance",
  initialState: {
    value: 1000,
    items: [
      { name: "Item 1", cost: 100 },
      { name: "Item 2", cost: 200 },
      { name: "Item 3", cost: 300 },
    ],
  },
  reducers: {
    deposit: (state, action) => {
      state.value += action.payload;
    },
    withdraw: (state, action) => {
      state.value -= action.payload;
    },
    purchaseItem: (state, action) => {
      const item = state.items.find((item) => item.name === action.payload);
      if (state.value >= item.cost) {
        state.value -= item.cost;
      }
    },
  },
});

export const { deposit, withdraw, purchaseItem } = amountSlice.actions;

export default amountSlice.reducer;
