import React, { FC } from "react";

import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { selectTeams } from "../../store/teams/selector";
import { selectRoundInfo } from "../../store/roundInfo/selector";

const GameFooter: FC = () => {
  const teams = useSelector(selectTeams);
  const { wordsInGame } = useSelector(selectRoundInfo);

  return <div className={styles.container}></div>;
};

export default GameFooter;
