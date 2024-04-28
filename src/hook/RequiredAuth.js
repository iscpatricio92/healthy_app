import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { useLocation } from "react-router-dom";
function RequiredAuth({ children }) {
  const location = useLocation();
  const { isLoggedIn } = useAuth();
  console.log("aaa", isLoggedIn);
  return isLoggedIn === true ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ path: location.pathname }} />
  );
}

export default RequiredAuth;
