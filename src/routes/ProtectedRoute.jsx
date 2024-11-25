import { Navigate } from "react-router-dom";
import { useSessionContext } from "../contexts";

export function ProtectedRoute({ children }) {
  const { session } = useSessionContext();

  if (!session?.id) {
    return <Navigate to="/" />;
  }

  return children;
}
