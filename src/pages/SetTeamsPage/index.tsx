import React, { ChangeEvent, FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";

import styles from "./styles.module.scss";
import { selectTeams } from "../../store/teams/selector";
import Header from "../../components/Header";
import { setNewTeam } from "../../store/teams/reducer";

const SetTeamsPage: FC = () => {
  const teams = useSelector(selectTeams);
  const id = uuidv4();
  const [isAddingNewTeam, setIsAddingNewTeam] = useState(false);
  const [teamName, setTeamName] = useState("");

  const dispatch = useDispatch();

  const onChangeTeamName = (event: ChangeEvent<HTMLInputElement>) =>
    setTeamName(event.target.value);

  const addNewCommand = () => {
    setIsAddingNewTeam(true);
  };

  const onDeclineTeam = () => setIsAddingNewTeam(false);

  const confirmNewTeam = () => {
    dispatch(
      setNewTeam({
        name: teamName,
        id,
        totalScore: 0,
        roundScore: 0,
      })
    );
    setIsAddingNewTeam(false);
  };
  console.log(isAddingNewTeam);
  return (
    <div className={styles.container}>
      <Header nameOfPage="Teams" />
      <ul className={styles.teamList}>
        {teams.map((t) => (
          <li className={styles.teamsListMember} key={t.name}>
            {t.name}
          </li>
        ))}
      </ul>
      {isAddingNewTeam && (
        <input
          type="text"
          className={styles.inputListMember}
          onChange={onChangeTeamName}
        />
      )}
      {isAddingNewTeam ? (
        <div className={styles.operationButton}>
          <Button
            className={styles.acceptTeamButton}
            variant="contained"
            onClick={confirmNewTeam}
            disabled={!teamName.length}
          >
            Accept
          </Button>
          <Button
            className={styles.declineTeamButton}
            variant="contained"
            onClick={onDeclineTeam}
          >
            Decline
          </Button>
        </div>
      ) : (
        <Button
          className={styles.addTeamButton}
          variant="contained"
          onClick={addNewCommand}
        >
          Add Team
        </Button>
      )}
    </div>
  );
};

export default SetTeamsPage;
