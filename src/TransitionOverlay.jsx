// src/TransitionOverlay.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./transition.css";
import logo from "./assets/IVI-fav.png"; // ✅ usa import

const TransitionOverlay = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="transition-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.05 }}
        >
          <motion.img
            src={logo}
            alt="Logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="logo-transition"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TransitionOverlay;
