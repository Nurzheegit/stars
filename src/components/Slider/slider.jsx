import React, { useState, useEffect } from "react";
import "./slider.css";

export default function Slider() {
  const slideImg = [
    "./ais1.jpg",
    "./ais2.jpg",
    "./ais3.jpg",
    "./ais4.png",
    "./ais5.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const isLastSlide = currentIndex === slideImg.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goToNextSlide();
    }, 2000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="slider-container">
      <div
        className="slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slideImg.map((image, index) => (
          <div className="slide" key={index}>
            <img className="slider_img" src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
