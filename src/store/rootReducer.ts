import { combineReducers } from "redux";

import teams from "./teams/reducer";

export const rootReducer = combineReducers({
  teams,
});
