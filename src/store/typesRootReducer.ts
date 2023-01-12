import { InitialStateTeam } from "./teams/types";
import { InitialStateSettings } from "./settings/types";
import { InitialStateRoundInfo } from "./roundInfo/types";

export type typesRootReducer = {
  teams: InitialStateTeam[];
  settings: InitialStateSettings;
  roundInfo: InitialStateRoundInfo;
};
