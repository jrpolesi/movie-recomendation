import { Navigate } from "react-router-dom";
import { useSessionContext } from "../contexts";

export function PublicRoute({ children }) {
  const { session } = useSessionContext();

  if (session?.id) {
    return <Navigate to="/movies" replace={true} />;
  }

  return children;
}
