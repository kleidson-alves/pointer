import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { AppRoutes } from "./routes";

import "./styles/global.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
