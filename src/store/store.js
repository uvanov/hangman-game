import { configureStore } from "@reduxjs/toolkit";
import wordSlice from "./slices/wordSlice";

// Create Store
export const store = configureStore({
  reducer: {
    word: wordSlice
  }
});