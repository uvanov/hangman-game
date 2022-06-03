// Import modules
import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  words: ['Food', 'Water', 'Example'],
  currentWord: '',
  spoileredCurrentWord: ''
};

// Create Slice
export const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    changeCurrentWord(state) {
      const random = Math.floor(Math.random() * state.words.length);
      state.currentWord = state.words[random];
    }
  }
});

// Exports reducer
export default wordSlice.reducer;