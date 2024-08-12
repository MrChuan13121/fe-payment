"use client"; 
import React, { useState } from 'react';
import styles from "./Rating.module.css"

export default function Rating() {
  const [rating, setRating] = useState<number>(0);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  return (
    <div className={styles.ratingContainer}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? styles.filled : ""}
          onClick={() => handleRating(star)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
}