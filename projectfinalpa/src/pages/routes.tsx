import { createBrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Team from "./Team/Team";

export const RoutesPages = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "temeGerado",
        element: <Team />,
      },
    ],
  },
]);
