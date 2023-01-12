import React, { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

import styles from "./styles.module.scss";
import { Slider } from "@mui/material";

type SetTimeProps = {
  amountOfWords: number;
  setAmountOfWords: Dispatch<SetStateAction<number>>;
};

const SetAmountOfWords: FC<SetTimeProps> = ({
  amountOfWords,
  setAmountOfWords,
}) => {
  const onChangeSliderHandler = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    setAmountOfWords(+value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wordsContainer}>
        <h2 className={styles.title}>Amount of words</h2>
        <span className={styles.amount}>{amountOfWords}</span>
      </div>
      <Slider
        max={200}
        min={10}
        className={styles.slider}
        step={5}
        value={amountOfWords}
        onChange={onChangeSliderHandler}
      />
    </div>
  );
};

export default SetAmountOfWords;
