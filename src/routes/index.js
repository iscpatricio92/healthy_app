import NotFound from "../pages/NotFound";
import DashboardPage from "../pages/admin-dashboard";
import LoginPage from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import AnonymousRoute from "./AnonymousRoute";

import Layout from "../containers/Layout";

const { Routes, Route } = require("react-router-dom");

const RoutesComponent = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Layout element={<DashboardPage />} />} />
      </Route>
      <Route element={<AnonymousRoute />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
      {/*<Route path="*" element={<Navigate to="/login" />} /> */}
    </Routes>
  );
};

export default RoutesComponent;
