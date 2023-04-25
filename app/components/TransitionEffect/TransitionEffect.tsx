"use client";
import React from "react";
import styles from "./Transition.module.css";
import { easeInOut, motion } from "framer-motion";

type Props = {};

const TransitionEffect = (props: Props) => {
  return (
    <div>
      <motion.div
        className={`${styles.container} ${styles.one}`}
        initial={{ x: "100%", width: "100%" }}
        animate={{
          x: 0,
          width: "0%",
          transition: { duration: 0.8, ease: easeInOut },
        }}
      ></motion.div>
      <motion.div
        className={`${styles.container} ${styles.two}`}
        initial={{ x: "100%", width: "100%" }}
        animate={{
          x: 0,
          width: "0%",
          transition: { delay: 0.2, duration: 0.8, ease: easeInOut },
        }}
      ></motion.div>
      <motion.div
        className={`${styles.container} ${styles.three}`}
        initial={{ x: "100%", width: "100%" }}
        animate={{
          x: 0,
          width: "0%",
          transition: { delay: 0.4, duration: 0.8, ease: easeInOut },
        }}
      ></motion.div>
    </div>
  );
};

export default TransitionEffect;
