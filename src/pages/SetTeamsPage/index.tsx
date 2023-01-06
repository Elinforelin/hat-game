import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";

import styles from "./styles.module.scss";
import { selectTeams } from "../../store/teams/selector";
import Header from "../../components/Header";
import { removeTeam, setNewTeam } from "../../store/teams/reducer";
import { useNavigate } from "react-router-dom";
import { SETTINGS } from "../../constants/routes";

const teamsNames = [
  "The",
  "milkman",
  "brought",
  "donuts",
  "cheese",
  "along",
  "with",
  "milk",
  "and",
  "a",
  "bottle",
  "of",
  "whiskey",
  "to",
  "10",
  "houses",
];

const SetTeamsPage: FC = () => {
  const teams = useSelector(selectTeams);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addNewCommand = () => {
    const existingTeamsNames: string[] = [];

    teams.forEach((t) => {
      existingTeamsNames.push(t.name);
    });

    teamsNames.some((name) =>
      !existingTeamsNames.includes(name)
        ? dispatch(setNewTeam({ name, totalScore: 0 }))
        : null
    );
  };

  const onDoubleClickHandler = (name: string) => {
    console.log(name);
  };

  const removeTeamHandler = (name: string) => dispatch(removeTeam(name));

  const onNextPageHandler = () => {
    navigate(SETTINGS);
  };

  return (
    <div className={styles.container}>
      <Header nameOfPage="Teams" />
      <ul className={styles.teamList}>
        {teams.map((t) => (
          <li
            className={styles.teamsListMember}
            key={t.name}
            onDoubleClick={() => onDoubleClickHandler(t.name)}
          >
            {t.name}
            {teams.length > 2 && (
              <Button onClick={() => removeTeamHandler(t.name)}>
                <ClearIcon />
              </Button>
            )}
          </li>
        ))}
      </ul>
      <Button
        className={styles.addTeamButton}
        variant="contained"
        onClick={addNewCommand}
      >
        <AddIcon fontSize="medium" />
      </Button>
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

export default SetTeamsPage;
