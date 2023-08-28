import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../../Page/HomePage";

export interface RouterProps {}

const Routers: React.FC<RouterProps> = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/seller" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default Routers;
