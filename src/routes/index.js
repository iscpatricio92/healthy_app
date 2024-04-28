import SignupPage from "../pages/Signup";
import LoginPage from "../pages/Login";
import RecoveryPage from "../pages/Recovery";
import DashboardPage from "../pages/admin-dashboard";
import RequiredAuth from "../hook/RequiredAuth";
const { BrowserRouter, Routes, Route, Navigate } = require("react-router-dom");

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <RequiredAuth>
              <DashboardPage />
            </RequiredAuth>
          }
        ></Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/recovery" element={<RecoveryPage />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RoutesComponent;
