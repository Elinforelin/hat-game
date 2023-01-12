import { InitialStateTeam } from "../teams/types";

export type InitialStateRoundInfo = {
  teamInGame: InitialStateTeam;
  wordsInGame: string[];
  wordsOutOfGame: string[];
  numberOfRound: number;
};
