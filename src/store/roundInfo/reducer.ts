import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { InitialStateRoundInfo } from "./types";

const initialState: InitialStateRoundInfo = {
  teamInGame: {
    name: "Apples",
    totalScore: 0,
    roundScore: 0,
  },
  wordsInGame: [],
  wordsOutOfGame: [],
  numberOfRound: 1,
};

export const roundInfoSlice = createSlice<
  InitialStateRoundInfo,
  SliceCaseReducers<InitialStateRoundInfo>
>({
  name: "roundInfo",
  initialState,
  reducers: {
    setWordsInGame: (state, action) => {
      state.wordsInGame = action.payload;
    },
  },
});

export const { setWordsInGame } = roundInfoSlice.actions;

export default roundInfoSlice.reducer;
