import React, { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

import styles from "./styles.module.scss";
import { Slider } from "@mui/material";

type SetTimeProps = {
  roundTime: number;
  setRoundTime: Dispatch<SetStateAction<number>>;
};

const SetTime: FC<SetTimeProps> = ({ roundTime, setRoundTime }) => {
  const onChangeSliderHandler = (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    setRoundTime(+value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.timeContainer}>
        <h2 className={styles.title}>Time of round</h2>
        <span className={styles.roundTime}>{roundTime}</span>
      </div>
      <Slider
        max={120}
        min={10}
        className={styles.slider}
        step={5}
        value={roundTime}
        onChange={onChangeSliderHandler}
      />
    </div>
  );
};

export default SetTime;
