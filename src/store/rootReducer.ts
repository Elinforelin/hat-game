import { combineReducers } from "redux";

import teams from "./teams/reducer";
import settings from "./settings/reducer";
import words from "./dictionary/reducer";
import roundInfo from "./roundInfo/reducer";

export const rootReducer = combineReducers({
  teams,
  settings,
  words,
  roundInfo,
});
