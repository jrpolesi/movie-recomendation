import {
  SessionProvider,
  TheMovieDBProvider,
  ToastErrorProvider,
} from "./contexts";
import { AppRoutes } from "./routes";
import "./styles/App.css";

function App() {
  return (
    <SessionProvider>
      <ToastErrorProvider>
        <TheMovieDBProvider>
          <AppRoutes />
        </TheMovieDBProvider>
      </ToastErrorProvider>
    </SessionProvider>
  );
}

export default App;
