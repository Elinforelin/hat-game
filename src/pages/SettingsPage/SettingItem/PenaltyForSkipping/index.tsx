import React, { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

import styles from "./styles.module.scss";
import { Slider, Switch } from "@mui/material";

type PenaltyForSkippingProps = {
  penaltyForSkipping: boolean;
  setPenaltyForSkipping: Dispatch<SetStateAction<boolean>>;
};

const PenaltyForSkipping: FC<PenaltyForSkippingProps> = ({
  penaltyForSkipping,
  setPenaltyForSkipping,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPenaltyForSkipping(event.target.checked);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Penalty for skipping</h2>
      <Switch onChange={handleChange} />
    </div>
  );
};

export default PenaltyForSkipping;
