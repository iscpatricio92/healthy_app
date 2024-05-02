import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hook/useAuth";
const AnonymousRoute = () => {
  const isLoggedIn = useAuth();
  return isLoggedIn ? <Navigate to="/" replace /> : <Outlet />;
};

export default AnonymousRoute;
