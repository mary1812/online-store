import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBarMenu from "./components/NavBarMenu";
import AppRouter from "./components/AppRouter";

const App = () => {
  return (
    <BrowserRouter>
      <NavBarMenu />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
