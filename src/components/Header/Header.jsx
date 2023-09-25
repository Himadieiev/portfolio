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
          href="https://www.linkedin.com/in/ruslan-himadieiev-32416b271/overlay/1635541764899/single-media-viewer/?profileId=ACoAAEJozgwB3ciXmG-8bIdBKmB5nD8S19DuB48"
          target="_blank"
          rel="noopener noreferrer"
          className={css.btn}
        >
          CV Link
        </a>
      </div>
    </header>
  );
};

export default Header;
