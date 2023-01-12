import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { InitialStateSettings } from "./types";

const initialState: InitialStateSettings = {
  amountOfWords: 0,
  roundTime: 0,
  penaltyForSkipping: true,
  soundsInGame: true,
};

export const settingsSlice = createSlice<
  InitialStateSettings,
  SliceCaseReducers<InitialStateSettings>
>({
  name: "settings",
  initialState,
  reducers: {
    setSettings: (state, action) => {
      state.amountOfWords = action.payload.amountOfWords;
      state.roundTime = action.payload.roundTime;
      state.penaltyForSkipping = action.payload.penaltyForSkipping;
      state.soundsInGame = action.payload.soundsInGame;
    },
  },
});

export const { setSettings } = settingsSlice.actions;

export default settingsSlice.reducer;
