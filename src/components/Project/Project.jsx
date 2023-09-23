import React from "react";
import { NavLink } from "react-router-dom";

import css from "./Project.module.css";

const Project = ({ title, img, index }) => {
  return (
    <NavLink to={`/project/${index}`}>
      <li className={css.project}>
        <img src={img} alt={title} className={css.project__img} />
        <h3 className={css.project__title}>{title}</h3>
      </li>
    </NavLink>
  );
};

export default Project;
