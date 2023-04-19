"use client";
import React from "react";
import styles from "./ScrollSpin.module.css";
import { motion, useScroll } from "framer-motion";

type Props = {
  referance: React.MutableRefObject<any>;
  class1: string;
  class2: string;
  class3: string;
  class4: string;
};

const ScrollSpin = ({ referance, class1, class2, class3, class4 }: Props) => {
  const { scrollYProgress } = useScroll({
    target: referance,
    offset: ["center end", "center center"],
  });
  return (
    <figure className={`${styles.spinnerCont} ${class1}`}>
      <svg width={75} height={75} viewBox="0 0 100 100">
        <circle
          cx={75}
          cy={50}
          r={20}
          className={`${styles.innerCircles} ${class2}`}
        />
        <motion.circle
          cx={75}
          cy={50}
          r={20}
          className={`${styles.innerCircles2} ${class3}`}
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx={75}
          cy={50}
          r={8}
          className={`${styles.innerCircles3} ${class4}`}
        />
      </svg>
    </figure>
  );
};

export default ScrollSpin;
