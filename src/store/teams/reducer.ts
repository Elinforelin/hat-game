import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { InitialStateTeam } from "./types";

const initialState: InitialStateTeam[] = [
  {
    name: "Apples",
    totalScore: 0,
    roundScore: 0,
  },
  {
    name: "Orange",
    totalScore: 0,
    roundScore: 0,
  },
];

export const teamsSlice = createSlice<
  InitialStateTeam[],
  SliceCaseReducers<InitialStateTeam[]>
>({
  name: "teams",
  initialState,
  reducers: {
    setNewTeam: (state, action) => {
      return [...state, action.payload];
    },
    removeTeam: (state, action) => {
      return [...state.filter(({ name }) => name !== action.payload)];
    },
  },
});

export const { setNewTeam, removeTeam } = teamsSlice.actions;

export default teamsSlice.reducer;
