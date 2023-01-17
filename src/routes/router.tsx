import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";

import WelcomePage from "../pages/WelcomePage";
import SettingsPage from "../pages/SettingsPage";
import {
  CATEGORIES,
  GAME,
  INTRO,
  SET_TEAMS,
  SETTINGS,
} from "../constants/routes";
import SetTeamsPage from "../pages/SetTeamsPage";
import Categories from "../pages/Сategories";
import GameHeader from "../components/GameHeader";
import Intro from "../pages/Intro";
import GamePage from "../pages/GamePage";

const HeaderLayout = () => (
  <>
    <WelcomePage />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderLayout />,
    children: [
      {
        path: SETTINGS,
        element: <SettingsPage />,
      },
      {
        path: SET_TEAMS,
        element: <SetTeamsPage />,
      },
      {
        path: CATEGORIES,
        element: <Categories />,
      },
      {
        path: INTRO,
        element: <Intro />,
      },
      {
        path: GAME,
        element: <GamePage />,
      },
    ],
  },
]);

export default router;
