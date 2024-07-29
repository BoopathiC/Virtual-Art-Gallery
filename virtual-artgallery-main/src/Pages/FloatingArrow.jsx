import React from "react";
import './FloatingArrow.css';
export const FloatingArrow = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="floating-arrow" onClick={scrollToTop}>
      <i className="fas fa-arrow-up" />
    </div>
  );
};