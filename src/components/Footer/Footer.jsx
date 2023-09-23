import React from "react";

import css from "./Footer.module.css";
import gitHub from "./../../img/icons/gitHub.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className="container">
        <div className={css.footer__wrapper}>
          <ul className={css.social}>
            <li className={css.social__item}>
              <a
                href="https://github.com/Himadieiev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className={css.social__item}>
              <a
                href="https://www.linkedin.com/in/ruslan-himadieiev-32416b271/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedIn} alt="Link" />
              </a>
            </li>
          </ul>
          <div className={css.copyright}>
            <p>© 2023 Created by Himadieiev Ruslan</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
