import { Header, MovieBotButton, PopularPage } from "./components";
import { TheMovieDBProvider, ToastErrorProvider } from "./contexts";
import "./styles/App.css";

function App() {
  return (
    <ToastErrorProvider>
      <TheMovieDBProvider>
        <Header />

        <main className="container">
          <PopularPage />
        </main>

        <MovieBotButton />
      </TheMovieDBProvider>
    </ToastErrorProvider>
  );
}

export default App;
