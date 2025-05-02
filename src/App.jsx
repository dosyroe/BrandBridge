import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import './App.css';

import MainPage from "./pages/MainPage";
import SupportPage from "./pages/SupportPage";
import NotFound from "./pages/404";

function AnimatedRoutes() {
  const location = useLocation();
  const nodeRef = useRef(null); // Создаём ссылку для DOM-узла

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={300}
        nodeRef={nodeRef} // Передаём ссылку в CSSTransition
      >
        <div ref={nodeRef}>
          <Routes location={location}>
            <Route path="/" element={<MainPage />} />
            <Route path="/support" element={<SupportPage />} />
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
}

export default App;