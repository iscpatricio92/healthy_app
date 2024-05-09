import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth";
const PrivateRoutes = ({ children }) => {
  //TODO eliminar la linea 6 y traer la información
  const isLoggedIn = useAuth(); // Replace with your authentication logic
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
    return children;
  }, [isLoggedIn, navigate, children]);

  return <Outlet />;
};

export default PrivateRoutes;
