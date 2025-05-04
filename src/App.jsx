import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import MainPage from "./pages/MainPage";
import SupportPage from "./pages/SupportPage";
import NotFound from "./pages/404";
import ContactsPage from "./pages/ContactsPage";
import DeliveryPage from "./pages/DeliveryPage";
import VetementsPage from "./pages/VetementsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/vetements" element={<VetementsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;