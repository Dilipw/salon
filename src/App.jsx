import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CustomerDashboard from "./pages/CustomerDashboard";
import OwnerDashboard from "./pages/OwnerDashboard";
import Rohini from "./pages/Rohini";
import "./index.css"; // Tailwind styles

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customer" element={<CustomerDashboard />} />
        <Route path="/owner" element={<OwnerDashboard />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/rohini" element={<Rohini />} />
      </Routes>
    </Router>
  );
}

export default App;
