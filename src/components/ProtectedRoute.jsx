import { Navigate } from "react-router-dom";

// Simulated authentication
const isAuthenticated = () => {
  return localStorage.getItem("auth") === "true"; // set localStorage "auth" to true to simulate login
};

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    alert("You must be logged in to access this page!");
    return <Navigate to="/" />;
  }
  return children;
}
