import "./styles/App.css";
import { MovieBot, Header } from "./components";
import { TheMovieDBProvider } from "./contexts/TheMovieDB";
import { PopularTitles } from "./components/PopularTitles/PopularTitles";

function App() {
  return (
    <TheMovieDBProvider>
      <Header />

      <main className="container">
        <PopularTitles />
        <MovieBot />
      </main>
    </TheMovieDBProvider>
  );
}

export default App;
