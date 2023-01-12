import React, { FC, useState } from "react";

import GameHeader from "../../components/GameHeader";
import Button from "@mui/material/Button";
import styles from "./styles.module.scss";
import { selectRoundInfo } from "../../store/roundInfo/selector";
import { useSelector } from "react-redux";
import GameFooter from "../../components/GameFooter";

// function randomWord() {}

const GamePage: FC = () => {
  const [gameIsStart, setGameIsStart] = useState(false);

  const { wordsInGame } = useSelector(selectRoundInfo);
  console.log(wordsInGame);

  const onStartHandler = () => {
    // setGameIsStart(true);
    console.log();
  };

  const onPointerUp = () => {
    console.log("cv");
  };

  return (
    <div className={styles.container}>
      <GameHeader />

      <div className={styles.gameContainer}>
        {gameIsStart ? (
          <label htmlFor="word">
            <button onPointerUp={onPointerUp} id="word"></button>
          </label>
        ) : (
          <label className={styles.startButton} htmlFor="word">
            <button onClick={onStartHandler} id="word">
              Start
            </button>
          </label>
        )}
      </div>

      {/*<GameFooter />*/}
    </div>
  );
};

export default GamePage;
