import React, { FC, useState } from "react";
import Button from "@mui/material/Button";

import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { SET_TEAMS } from "../../constants/routes";

const WelcomePage: FC = () => {
  const [animationActive, setAnimationActive] = useState(false);
  const navigate = useNavigate();

  const onGoToSettingsPage = () => {
    setAnimationActive(true);
    setTimeout(() => navigate(SET_TEAMS), 2000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <h1 className={animationActive ? styles.animatedTitle : ""}>The Hat</h1>
      </div>
      <div className={styles.buttonContainer}>
        <Button
          className={animationActive ? styles.btn1 : ""}
          onClick={onGoToSettingsPage}
          variant="contained"
          color="primary"
        >
          New game
        </Button>
        <Button
          className={animationActive ? styles.btn2 : ""}
          variant="contained"
        >
          Rules
        </Button>
      </div>
    </div>
  );
};

export default WelcomePage;
