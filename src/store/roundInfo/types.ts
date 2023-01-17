import { InitialStateTeam } from "../teams/types";

export type InitialStateRoundInfo = {
  teamInGame: InitialStateTeam;
  wordsInGame: string[];
  guessedWords: string[];
  unguessedWords: string[];
  numberOfRound: number;
};
