import SignupPage from "../pages/Signup";
import LoginPage from "../pages/Login";
import RecoveryPage from "../pages/Recovery";
const { BrowserRouter, Routes, Route } = require("react-router-dom");
const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/recovery" element={<RecoveryPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RoutesComponent;
