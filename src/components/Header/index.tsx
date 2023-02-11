import React from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./styles.module.scss";

export const Header: React.FC = () => {
  const location = useLocation();

  return (
    <div className={styles.header}>
      <nav>
        <ul>
          <Link to="/">
            <li
              className={location.pathname === "/" ? styles.active : undefined}
            >
              Registro
            </li>
          </Link>
          <Link to="/history">
            <li
              className={
                location.pathname === "/history" ? styles.active : undefined
              }
            >
              Histórico
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
