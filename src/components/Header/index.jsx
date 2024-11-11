import { useState } from "react";
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
  {
    label: "Minha Lista",
    to: "/watchlist",
  },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1>MyMovies</h1>

        <nav className={styles.navDesktop}>
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

        <div className={styles.headerActions}>
          <DarkModeBtn />

          <button
            className={styles.menuBtn}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className={styles.navMobile}>
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
      )}
    </header>
  );
}
