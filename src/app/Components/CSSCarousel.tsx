"use client"; 

// components/CSSCarousel.tsx
import { useState } from 'react';
import styles from './CSSCarousel.module.css'; // Example CSS module
import s1 from "../image/carousel/1.jpg";
import s2 from "../image/carousel/2.jpg";
import s3 from "../image/carousel/3.jpg";
import s4 from "../image/carousel/4.jpg";
import s5 from "../image/carousel/5.jpg";

const CSSCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [s1, s2, s3, s4, s5];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.prev} onClick={handlePrev}>
        Previous
      </button>
      <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} className={styles.image} />
      <button className={styles.next} onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default CSSCarousel;
