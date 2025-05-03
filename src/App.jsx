import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import './App.css';

import MainPage from "./pages/MainPage";
import SupportPage from "./pages/SupportPage";
import NotFound from "./pages/404";
import ContactsPage from "./pages/ContactsPage";

function AnimatedRoutes() {
  const location = useLocation();
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
      <Routes location={location}>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>

    
  );
}

export default App;