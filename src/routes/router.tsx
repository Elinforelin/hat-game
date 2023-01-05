import React from "react";
import { createBrowserRouter } from "react-router-dom";

import WelcomePage from "../pages/WelcomePage";
import SettingsPage from "../pages/SettingsPage";
import { SET_TEAMS, SETTINGS } from "../constants/routes";
import SetTeamsPage from "../pages/SetTeamsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: SETTINGS,
    element: <SettingsPage />,
  },
  {
    path: SET_TEAMS,
    element: <SetTeamsPage />,
  },
]);

export default router;
