import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    alert("You must be logged in to access this page!");
    return <Navigate to="/" />;
  }

  return children;
}
