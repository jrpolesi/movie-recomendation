import { Header } from "./components";
import { PopularMovies } from "./components/PopularMovies";
import { TheMovieDBProvider, ToastErrorProvider } from "./contexts";
import "./styles/App.css";

function App() {
  return (
    <ToastErrorProvider>
      <TheMovieDBProvider>
        <Header />

        <main className="container">
          <PopularMovies />
          {/* <MovieBot /> */}
        </main>
      </TheMovieDBProvider>
    </ToastErrorProvider>
  );
}

export default App;
