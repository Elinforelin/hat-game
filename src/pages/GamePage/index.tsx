import React, { FC, TouchEvent, useEffect, useState } from "react";

import GameHeader from "../../components/GameHeader";
import styles from "./styles.module.scss";
import { selectRoundInfo } from "../../store/roundInfo/selector";
import { useDispatch, useSelector } from "react-redux";
import {
  setGuessedWord,
  setUnguessedWord,
} from "../../store/roundInfo/reducer";

function randomWord(arrayOfWords: string[]) {
  const randomIndex = Math.floor(Math.random() * arrayOfWords.length);

  return arrayOfWords[randomIndex];
}

const GamePage: FC = () => {
  const [gameIsStart, setGameIsStart] = useState(false);
  const [styledButton, setStyledButton] = useState("");
  const [wordInGame, setWordInGame] = useState("");
  const { wordsInGame } = useSelector(selectRoundInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    setWordInGame(randomWord(wordsInGame));
  }, []);

  const onStartHandler = () => {
    setGameIsStart(true);
  };

  const onTouchMove = (e: TouchEvent<HTMLButtonElement>) => {
    const location = { x: e.touches[0].clientX, y: e.touches[0].clientY };

    if (location.y < 443 && location.y > 0) {
      setStyledButton(styles.styleUp);
      // dispatch(setGuessedWord(wordInGame));
      // setWordInGame(randomWord(wordsInGame));
    } else if (location.y > 443 && location.y > 0)
      //   dispatch(setUnguessedWord(wordInGame));
      // setWordInGame(randomWord(wordsInGame));
      return setStyledButton(styles.styleDown);
  };

  const onTouchEnd = (e: TouchEvent<HTMLButtonElement>) => {
    const { name } = e.target as HTMLButtonElement;
    console.log(e);
  };

  return (
    <div className={styles.container}>
      <GameHeader />

      <div className={styles.gameContainer}>
        {gameIsStart ? (
          <label
            htmlFor="word"
            className={
              styledButton
                ? `${styledButton} ${styles.gameButton}`
                : styles.gameButton
            }
          >
            <button
              name={wordInGame}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              id="word"
            >
              {wordInGame}
            </button>
          </label>
        ) : (
          <label className={styles.gameButton} htmlFor="word">
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
