import React from "react";

import css from "./BtnGitHub.module.css";

const BtnGitHub = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className={css.btnOutline}>
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
