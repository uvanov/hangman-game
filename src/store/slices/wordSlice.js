// Import modules
import { createSlice } from "@reduxjs/toolkit";
import { getRandomFromArray, getRandomNumberFromRange } from "../../utils/utils";

// Initial state
const initialState = {
  words: ['Food', 'Water', 'Example', 'Mom', 'Keyboard', 'Magic'],
  currentWord: '',
};

// Create Slice
export const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    changeCurrentWord(state) {
      const randomWord = getRandomFromArray(state.words)
      state.currentWord = randomWord;
    }
  }
});

// Exports reducer
export default wordSlice.reducer;