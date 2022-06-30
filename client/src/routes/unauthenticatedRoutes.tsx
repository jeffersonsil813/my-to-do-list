import { Route, Routes, Navigate } from "react-router-dom";
import { Login } from "../pages/Login";
// import { Register } from "../pages/Register";

export const UnauthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {/* <Route path="/register" element={<Register />} /> */}
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
