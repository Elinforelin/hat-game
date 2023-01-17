import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import { InitialStateRoundInfo } from "./types";

const initialState: InitialStateRoundInfo = {
  teamInGame: {
    name: "Apples",
    totalScore: 0,
    roundScore: 0,
  },
  wordsInGame: [
    "cake",
    "call",
    "can",
    "candle",
    "cap",
    "car",
    "card",
    "care",
    "careful",
    "careless",
    "carry",
  ],
  guessedWords: [],
  unguessedWords: [],
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
    setGuessedWord: (state, action) => {
      state.guessedWords = [...state.guessedWords, action.payload];
      state.wordsInGame = state.wordsInGame.filter((w) => w !== action.payload);
    },
    setUnguessedWord: (state, action) => {
      state.guessedWords = [...state.unguessedWords, action.payload];
      state.wordsInGame = state.wordsInGame.filter((w) => w !== action.payload);
    },
  },
});

export const { setWordsInGame, setGuessedWord, setUnguessedWord } =
  roundInfoSlice.actions;

export default roundInfoSlice.reducer;
