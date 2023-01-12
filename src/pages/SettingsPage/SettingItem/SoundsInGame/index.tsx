import React, { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

import styles from "./styles.module.scss";
import { Switch } from "@mui/material";

type PenaltyForSkippingProps = {
  setSoundsInGame: Dispatch<SetStateAction<boolean>>;
};

const SoundsInGame: FC<PenaltyForSkippingProps> = ({ setSoundsInGame }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSoundsInGame(event.target.checked);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Sounds in game</h2>
      <Switch onChange={handleChange} />
    </div>
  );
};

export default SoundsInGame;
