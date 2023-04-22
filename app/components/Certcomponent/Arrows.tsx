import React from "react";
import styles  from "./slider.module.css";
type Props={
    prevSlide:()=>void,
    nextSlide:()=>void
}

function Arrows({ prevSlide, nextSlide }:Props) {
  return (
    <div className={styles["arrows"]}>
      <span className={styles["prev"]} onClick={prevSlide}>
        &#10094;
      </span>
      <span className={styles["next"]} onClick={nextSlide}>
        &#10095;
      </span>
    </div>
  );
}

export default Arrows;