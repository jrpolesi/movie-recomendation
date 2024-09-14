import { DarkModeBtn } from "../DarkModeBtn";
import "./style.css";

export function Header() {
  return (
    <header>
      <div className="header-container">
        <h1>MyMovies</h1>

        <DarkModeBtn />
      </div>
    </header>
  );
}
