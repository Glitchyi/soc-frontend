import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Template from "./layout/Template";

import "./index.css";
import About from "./About";
import App from "./App";
import Guidelines from "./Guidelines";
import Maintainers from "./Maintainers";
import Repositories from "./Repositories";
import ComingSoon from "./ComingSoon";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Template>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/maintainers" element={<Maintainers />} />
          <Route path="/repositories" element={<Repositories />} />
          <Route path="/about" element={<About />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
        </Routes>
      </Router>
    </Template>
  </StrictMode>
);
