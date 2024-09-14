import { Header, PopularPage } from "./components";
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
      </TheMovieDBProvider>
    </ToastErrorProvider>
  );
}

export default App;
