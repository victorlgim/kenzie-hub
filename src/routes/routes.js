import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const RoutesMain = () => {
  return (

    <Routes>

      <Route path="/" element={<Login />} />

      <Route path="/login" element={<Login />} />

      <Route path="/cadastro" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="*" element={<Login />} />

    </Routes>
    
  );
};

export default RoutesMain;
