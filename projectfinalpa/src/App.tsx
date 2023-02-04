import { ChakraProvider } from "@chakra-ui/react";
import { RoutesPages } from "./pages/routes";
import { BrowserRouter as Router, RouterProvider } from "react-router-dom";

export const App = () => (
  <ChakraProvider>
    <RouterProvider router={RoutesPages} />
  </ChakraProvider>
);
