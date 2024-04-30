import { useAuth } from "../contexts/authContext";
import { lazy } from "react";
import NotFound from "../pages/NotFound";
const { BrowserRouter, Routes, Route, Navigate } = require("react-router-dom");

const LoginPage = lazy(() => import("../pages/Login"));
const RecoveryPage = lazy(() => import("../pages/Recovery"));
const DashboardPage = lazy(() => import("../pages/admin-dashboard"));
const SignupPage = lazy(() => import("../pages/Signup"));
const Layout = lazy(() => import("../containers/Layout"));

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<RecoveryPage />} />
        <Route
          path="/app/dashboard"
          element={<PrivateRoute element={<DashboardPage />} />}
        />
        {/*<Route path="*" element={<Navigate to="/login" />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
const PrivateRoute = ({ element }) => {
  const { isLoggedIn } = useAuth();
  console.log("PRIVATE", isLoggedIn);
  return isLoggedIn ? (
    <Layout element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};
export default RoutesComponent;
