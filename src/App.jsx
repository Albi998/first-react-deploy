import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Home from "./home";
import Progetto from "./progetto";
import Gallery from "./gallery";
import TransitionOverlay from "./TransitionOverlay";
import ScrollToTop from "./ScrollToTop";
import "./index.css";
import "./style.css";
import "./grid.css";

function AppContent() {
  const location = useLocation();
  const [showTransition, setShowTransition] = useState(false);
  const [showRoutes, setShowRoutes] = useState(true);

  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    const { pathname } = location;
    const prevPath = prevPathRef.current;

    // Se il pathname è lo stesso, ignora (es. hash change)
    if (pathname === prevPath) {
      return;
    }

    // Cambio pagina: mostra transizione
    setShowTransition(true);
    setShowRoutes(false);

    const timeoutRoutes = setTimeout(() => {
      setShowRoutes(true);
    }, 300);

    const timeoutTransition = setTimeout(() => {
      setShowTransition(false);
    }, 600);

    prevPathRef.current = pathname;

    return () => {
      clearTimeout(timeoutRoutes);
      clearTimeout(timeoutTransition);
    };
  }, [location]);

  return (
    <>
      <TransitionOverlay isVisible={showTransition} />
      <ScrollToTop />
      {showRoutes && (
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/progetto/:id" element={<Progetto />} />
        </Routes>
      )}
    </>
  );
}

export default AppContent;
