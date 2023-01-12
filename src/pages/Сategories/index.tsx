import React, { FC, MouseEventHandler } from "react";

import styles from "./styles.module.scss";
import Header from "../../components/Header";
import { useDispatch } from "react-redux";
import { setWords } from "../../store/dictionary/reducer";
import { useNavigate } from "react-router-dom";
import { INTRO } from "../../constants/routes";
import { setWordsInGame } from "../../store/roundInfo/reducer";
import { category } from "../../constants/words";

const Categories: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickCategoryHandler = (name: string) => {
    const dict = category.find((item) => item.name === name);
    dispatch(setWords(dict ? dict.words : []));
    dispatch(setWordsInGame(dict ? dict.words : []));
    navigate(INTRO);
  };
  return (
    <div className={styles.container}>
      <Header nameOfPage="Categories" />
      <ul className={styles.categoriesList}>
        {category.map((item) => (
          <li
            onClick={() => onClickCategoryHandler(item.name)}
            className={styles.categoriesListMember}
            key={item.name}
          >
            <div>
              <h2 className={styles.title}>{item.name}</h2>
              <span className={styles.subtitle}>{item.lvl}</span>
            </div>
            <div className={styles.wordsNumber}>{item.words.length}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
