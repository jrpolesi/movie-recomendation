import { NavLink } from "react-router-dom";
import { DarkModeBtn } from "../DarkModeBtn";
import styles from "./style.module.css";

const ROUTES = [
  {
    label: "Filmes",
    to: "/movies",
  },
  {
    label: "Séries",
    to: "/series",
  },
];

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1>MyMovies</h1>

        <nav>
          <ul className={styles.navList}>
            {ROUTES.map(({ label, to }) => (
              <li key={label}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : ""
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <DarkModeBtn />
      </div>
    </header>
  );
}
