import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Template from "./layout/Template";

import "./index.css";
import About from "./About";
import App from "./App";
import Guidelines from "./Guidelines";
import Maintainers from "./Maintainers";
import Repositories from "./Repositories";
import Dashboard from "./pages/dashboard/Dashboard";
import Sign_Up from "./pages/signup/SignUp";
import Finish from "./pages/finish/Finish";
// import ComingSoon from "./ComingSoon";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Template>
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/guidelines" element={<Guidelines />} />
            <Route path="/maintainers" element={<Maintainers />} />
            <Route path="/repositories" element={<Repositories />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sign_up" element={<Sign_Up />} />
            <Route path="/signup" element={<Sign_Up />} />
            {/* <Route path="/" element={<ComingSoon />} /> */}
          </Routes>
        </Router>
      </Template>
    </QueryClientProvider>
  </StrictMode>
);
