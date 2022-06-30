import { Route, Routes, Navigate } from "react-router-dom";
// import { Home } from "../pages/Home";

export const AuthenticatedRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/home" element={<Home />} /> */}
      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
