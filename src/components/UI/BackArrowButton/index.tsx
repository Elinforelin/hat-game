import React, { FC } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";

import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

const BackArrowButton: FC = () => {
  const navigate = useNavigate();

  const onGoBack = () => navigate(-1);

  return (
    <div className={styles.backArrowContainer}>
      <Button onClick={onGoBack}>
        <ArrowBackIcon color="action" fontSize="medium" />
      </Button>
    </div>
  );
};

export default BackArrowButton;
