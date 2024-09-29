import styles from "./style.module.css";
import { useState } from "react";

export function DarkModeBtn() {
  const [isDarkMode, setIsDarkMode] = useState(
    document.body.getAttribute("data-theme") === "dark"
  );

  return (
    <button
      className={`${styles.darkModeBtn} material-symbols-outlined`}
      onClick={() => {
        setIsDarkMode((isDarkMode) => {
          if (isDarkMode) {
            document.body.removeAttribute("data-theme");
            return false;
          }

          document.body.setAttribute("data-theme", "dark");
          return true;
        });
      }}
    >
      {isDarkMode ? "dark_mode" : "light_mode"}
    </button>
  );
}
