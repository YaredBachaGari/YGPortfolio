"use client";
import styles from "./AnimatedHeader.module.css";
import { motion } from "framer-motion";

type Props = {
  text: string;
  className?: string;
  className2?: string;
};

const headeranime = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08, //this delays childrens of div where this animation applied by 0.07sec
    },
  },
};
const wordanime = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
    },
  },
};

const AnimatedHeader = ({ text, className = "", className2 = "" }: Props) => {
  return (
    <div className={className2}>
      <motion.h1
        className={`${styles.headeranime} ${className}`}
        variants={headeranime}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => {
          return (
            <motion.span
              key={`${word}_${index}`}
              className={styles.words}
              variants={wordanime}
            >
              {word}&nbsp;
            </motion.span>
          );
        })}
      </motion.h1>
    </div>
  );
};

export default AnimatedHeader;
