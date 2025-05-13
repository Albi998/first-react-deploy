// src/Progetto.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import progetti from "./progetti";
import { motion, AnimatePresence } from "framer-motion";
import "./progetto.css";

function Progetto() {
  const { id } = useParams();
  const progetto = progetti.find((p) => p.id === id);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Gestione swipe e tastiera
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeModal();
    };

    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) nextImage(); // Swipe left
      if (touchEndX - touchStartX > 50) prevImage(); // Swipe right
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [selectedIndex]);

  if (!progetto) return <p>Progetto non trovato</p>;

  const closeModal = () => setSelectedIndex(null);
  const nextImage = () =>
    setSelectedIndex((prev) => (prev + 1) % progetto.immagini.length);
  const prevImage = () =>
    setSelectedIndex(
      (prev) => (prev - 1 + progetto.immagini.length) % progetto.immagini.length
    );

  return (
    <div className="pagina-prog">
      <Link to="/">
        <button className="back-button">&lt; Home</button>
      </Link>
      <div className="container-prog">
        <h2 className="titolo-progetto">{progetto.titolo}</h2>
        <p className="descrizione-p">{progetto.descrizione}</p>
        <div className="masonry">
          {progetto.immagini.map((img, index) => (
            <motion.div
              className="masonry-item-wrapper"
              key={index}
              onClick={() => setSelectedIndex(index)}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.03,
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1], // cubic-bezier easeInOut
              }}
            >
              <div className="image-wrapper">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="masonry-item"
                  loading="lazy"
                />
                <div className="image-overlay">Ingrandisci</div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="modal-content"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={progetto.immagini[selectedIndex].src}
                  alt={progetto.immagini[selectedIndex].alt}
                  className="modal-img"
                />
                <p className="caption">
                  {progetto.immagini[selectedIndex].alt}
                </p>
              </motion.div>

              <button
                className="modal-prev"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
              >
                &lt;
              </button>
              <button
                className="modal-next"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
              >
                &gt;
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Progetto;
