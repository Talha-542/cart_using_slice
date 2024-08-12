import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./amountSlice";

export default configureStore({
  reducer: {
    pokemons: balanceReducer,
  },
});
