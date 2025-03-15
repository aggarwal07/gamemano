"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const slideRefs = useRef([]);
  const intervalRef = useRef(null);

  const changeSlide = (index) => {
    setCurrent(index);
    resetAutoSlide();
  };

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2500);
  };

  const resetAutoSlide = () => {
    clearInterval(intervalRef.current);
    startAutoSlide();
  };

  useEffect(() => {
    gsap.to(slideRefs.current, { autoAlpha: 0, duration: 0.8 });
    gsap.to(slideRefs.current[current], { autoAlpha: 1, duration: 0.8 });
  }, [current]);

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, [slides.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          ref={(el) => (slideRefs.current[index] = el)}
          className="absolute inset-0 opacity-0"
        >
          {slide.slide}
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`cursor-pointer w-2 h-2 rounded-full transition-all duration-300 ${
              current === index
                ? "scale-125 bg-[var(--primary-hover-foreground)]"
                : "bg-white"
            }`}
            onClick={() => changeSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
