import React, { FC } from "react";

import styles from "./styles.module.scss";
import BackArrowButton from "../UI/BackArrowButton";

type HeaderProps = {
  nameOfPage: string;
};

const Header: FC<HeaderProps> = ({ nameOfPage }) => {
  return (
    <div className={styles.container}>
      <BackArrowButton />
      <h2 className={styles.title}>{nameOfPage}</h2>
    </div>
  );
};

export default Header;
