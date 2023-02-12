import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { TaskProvider } from "./hooks/useTask";
import { AppRoutes } from "./routes";

import "./styles/global.scss";

function App() {
  return (
    <BrowserRouter>
      <TaskProvider>
        <Header />
        <AppRoutes />
      </TaskProvider>
    </BrowserRouter>
  );
}

export default App;
