import React from "react";
import styles from "./slider.module.css";
import Image from "next/image";
type Props = {
  activeIndex: number;
  sliderImage: { title: string; description: string; urls: string }[];
};
function SliderContent({ activeIndex, sliderImage }: Props) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={
            index === activeIndex ? styles["slides active"] : styles["inactive"]
          }
        >
          <Image
            className={styles["slide-image"]}
            src={slide.urls}
            alt="certificates"
            width={2000}
            height={2000}
          />
          {/* <h2 className={styles["slide-title"]}>{slide.title}</h2>
          <h3 className={styles["slide-text"]}>{slide.description}</h3> */}
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
