import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { InitialStateTeams } from "./types";

const initialState: InitialStateTeams = [
  {
    id: 1,
    name: "Apples",
    totalScore: 0,
    roundScore: 0,
  },
  {
    id: 2,
    name: "Orange",
    totalScore: 0,
    roundScore: 0,
  },
  {
    id: 3,
    name: "Cucumber",
    totalScore: 0,
    roundScore: 0,
  },
];

export const teamsSlice = createSlice<
  InitialStateTeams,
  SliceCaseReducers<InitialStateTeams>
>({
  name: "teams",
  initialState,
  reducers: {
    setNewTeam: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { setNewTeam } = teamsSlice.actions;

export default teamsSlice.reducer;
