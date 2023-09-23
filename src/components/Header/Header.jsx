import React from "react";

import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.header__wrapper}>
        <h1 className={css.header__title}>
          <strong>
            Hi, my name is <em>Ruslan</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className={css.header__text}>
          <p>with passion for learning and creating.</p>
        </div>
        <a
          href="./../../img/Ruslan_Himadieiev_Junior Front-End Developer.pdf"
          download="Ruslan_Himadieiev_Junior_Front-End_Developer.pdf"
          className={css.btn}
        >
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
