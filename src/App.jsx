import "./styles/App.css";
import { MovieBot, Header } from "./components";

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <MovieBot />
      </main>
    </>
  );
}

export default App;
