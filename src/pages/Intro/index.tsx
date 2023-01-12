import React, { FC } from "react";

import GameHeader from "../../components/GameHeader";
import Button from "@mui/material/Button";
import styles from "./styles.module.scss";
import { selectRoundInfo } from "../../store/roundInfo/selector";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GAME } from "../../constants/routes";

const Intro: FC = () => {
  const roundInfo = useSelector(selectRoundInfo);

  const navigate = useNavigate();

  const goToGamePage = () => navigate(GAME);

  return (
    <div className={styles.container}>
      <GameHeader />

      <div className={styles.roundInfo}>
        <p>Round {roundInfo.numberOfRound}</p>
        <p>
          Preparing for game{" "}
          <span className={styles.teamName}>{roundInfo.teamInGame.name}</span>
        </p>
      </div>

      <Button
        onClick={goToGamePage}
        className={styles.nextButton}
        variant="contained"
        color="success"
      >
        Let`s alias it!
      </Button>
    </div>
  );
};

export default Intro;
