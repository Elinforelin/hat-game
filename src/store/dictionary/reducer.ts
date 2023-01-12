import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { InitialStateDictionary } from "./types";

const initialState: InitialStateDictionary = [];

export const dictionarySlice = createSlice<
  InitialStateDictionary,
  SliceCaseReducers<InitialStateDictionary>
>({
  name: "settings",
  initialState,
  reducers: {
    setWords: (state, action) => {
      return action.payload;
    },
  },
});

export const { setWords } = dictionarySlice.actions;

export default dictionarySlice.reducer;
