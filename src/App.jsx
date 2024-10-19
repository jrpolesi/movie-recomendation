import { TheMovieDBProvider, ToastErrorProvider } from "./contexts";
import { AppRoutes } from "./routes";
import "./styles/App.css";

function App() {
  return (
    <ToastErrorProvider>
      <TheMovieDBProvider>
        <AppRoutes />
      </TheMovieDBProvider>
    </ToastErrorProvider>
  );
}

export default App;
