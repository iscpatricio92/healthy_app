import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth";
const PrivateRoutes = ({ children }) => {
  const isLoggedIn = useAuth(); // Replace with your authentication logic
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
    return children;
  }, [isLoggedIn, navigate]);

  return <Outlet />;
};

export default PrivateRoutes;
