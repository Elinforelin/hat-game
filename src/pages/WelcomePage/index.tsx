import React, { FC } from "react";
import Button from "@mui/material/Button";

import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { SET_TEAMS } from "../../constants/routes";

const WelcomePage: FC = () => {
  const navigate = useNavigate();

  const onGoToSettingsPage = () => navigate(SET_TEAMS);

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <h1>The Hat</h1>
      </div>
      <div className={styles.buttonContainer}>
        <Button onClick={onGoToSettingsPage} variant="contained">
          New game
        </Button>
        <Button variant="contained">Rules</Button>
      </div>
    </div>
  );
};

export default WelcomePage;
