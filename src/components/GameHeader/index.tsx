import React, { FC } from "react";

import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { selectTeams } from "../../store/teams/selector";
import { selectRoundInfo } from "../../store/roundInfo/selector";

const GameHeader: FC = () => {
  const teams = useSelector(selectTeams);
  const { wordsInGame } = useSelector(selectRoundInfo);

  return (
    <div className={styles.container}>
      <div className={styles.restOfWords}>
        <h2>Words in hat</h2>
        <p>{wordsInGame.length}</p>
      </div>
      <ul className={styles.teamsInfo}>
        {teams.map((team) => (
          <li key={team.name} className={styles.team}>
            <h2>{team.name}</h2>
            <p>{team.totalScore}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameHeader;
