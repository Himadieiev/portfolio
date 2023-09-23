import React from "react";
import { NavLink } from "react-router-dom";

import css from "./Navbar.module.css";
import BtnDarkMode from "../BtnDarkMode/BtnDarkMode";

const Navbar = () => {
  const activeLink = `${css["navList__link"]} ${css["navList__link_active"]}`;
  const normalLink = css.navList__link;

  return (
    <nav className={css.nav}>
      <div className="container">
        <div className={css.navRow}>
          <NavLink to="/" className={css.logo}>
            <strong>My</strong> portfolio
          </NavLink>
          <BtnDarkMode />
          <ul className={css.navList}>
            <li className={css.navList__item}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Home
              </NavLink>
            </li>
            <li className={css.navList__item}>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
