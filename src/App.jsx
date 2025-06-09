import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './App.css';

import MainPage from "./pages/MainPage";
import SupportPage from "./pages/SupportPage";
import NotFound from "./pages/404";
import ContactsPage from "./pages/ContactsPage";
import DeliveryPage from "./pages/DeliveryPage";
import BrandPage from "./pages/BrandPage";

function AnimatedRoutes() {
  const location = useLocation(); // Now properly imported
  const nodeRef = useRef(null);

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={300}
        nodeRef={nodeRef}
      >
        <div ref={nodeRef}>
          <Routes location={location}>
            <Route path="/" element={<MainPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/delivery" element={<DeliveryPage />} />
            <Route path="/brand/:brandId" element={<BrandPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
};

export default App;