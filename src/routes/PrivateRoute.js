import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hook/useAuth";
const PrivateRoutes = () => {
  const isLoggedIn = useAuth(); // Replace with your authentication logic
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/"); //TODO dynamic  by user url
    } else {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return <Outlet />;
};

export default PrivateRoutes;
