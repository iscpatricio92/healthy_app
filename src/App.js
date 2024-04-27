import { useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Sigup from "./pages/Signup";

function App() {
  return (
    <div className="h-[100vh] wfull">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Sigup />} />
      </Routes>
    </div>
  );
}

export default App;
