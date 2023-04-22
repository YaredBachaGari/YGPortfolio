import React from "react";
import styles from "./slider.module.css";
import { StaticImageData } from "next/image";
type Props = {
  activeIndex: number;
  onclick: (x: number) => void;
  sliderImage: { title: string; description: string; urls: string }[];
};

function Dots({ activeIndex, onclick, sliderImage }: Props) {
  return (
    <div className={styles["all-dots"]}>
      {sliderImage.map((slide, index) => (
        <span
          key={index}
          className={`${
            activeIndex === index ? styles["dot active-dot"] : styles["dot"]
          }`}
          onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  );
}

export default Dots;
