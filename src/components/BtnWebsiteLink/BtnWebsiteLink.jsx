import React from "react";

import css from "./BtnWebsiteLink.module.css";

const BtnWebsiteLink = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className={css.btnOutline}>
      Website link
    </a>
  );
};

export default BtnWebsiteLink;
