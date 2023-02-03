import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Team from "./Team/Team";

export const RoutesPages = () => {
  return (
    <Routes>
      <Route path="/"  element={<HomePage />} />
      <Route path="/temeGerado"  element={<Team />} />
    </Routes>
  );
};
