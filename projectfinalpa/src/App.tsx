import { ChakraProvider } from "@chakra-ui/react";
import { RoutesPages } from "./pages/routes";
import { BrowserRouter as Router } from "react-router-dom";

export const App = () => (
  <ChakraProvider>
    <Router>
      <RoutesPages />
    </Router>
  </ChakraProvider>
);
