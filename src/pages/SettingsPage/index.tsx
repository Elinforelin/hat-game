import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";
import SetTime from "./SettingItem/SetTime";
import Header from "../../components/Header";
import { CATEGORIES } from "../../constants/routes";
import SoundsInGame from "./SettingItem/SoundsInGame";
import { setSettings } from "../../store/settings/reducer";
import SetAmountOfWords from "./SettingItem/SetAmountOfWords";
import PenaltyForSkipping from "./SettingItem/PenaltyForSkipping";

const SettingsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [roundTime, setRoundTime] = useState(60);
  const [amountOfWords, setAmountOfWords] = useState(60);
  const [penaltyForSkipping, setPenaltyForSkipping] = useState(true);
  const [soundsInGame, setSoundsInGame] = useState(true);

  const onNextPageHandler = () => {
    dispatch(
      setSettings({
        amountOfWords,
        roundTime,
        penaltyForSkipping,
        soundsInGame,
      })
    );
    navigate(CATEGORIES);
  };

  return (
    <div className={styles.container}>
      <Header nameOfPage="Settings" />
      <div className={styles.settingsContainer}>
        <SetTime roundTime={roundTime} setRoundTime={setRoundTime} />
        <SetAmountOfWords
          amountOfWords={amountOfWords}
          setAmountOfWords={setAmountOfWords}
        />
        <PenaltyForSkipping
          penaltyForSkipping={penaltyForSkipping}
          setPenaltyForSkipping={setPenaltyForSkipping}
        />
        <SoundsInGame setSoundsInGame={setSoundsInGame} />
      </div>
      <Button
        className={styles.nextButton}
        variant="contained"
        onClick={onNextPageHandler}
        color="success"
      >
        Next
      </Button>
    </div>
  );
};

export default SettingsPage;
