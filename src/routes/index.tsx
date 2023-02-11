import React from "react";

import { Route, Routes } from "react-router-dom";
import { History } from "../pages/History";
import { Registry } from "../pages/Registry";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Registry />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
};
