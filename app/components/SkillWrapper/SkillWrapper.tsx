"use client";
import React, { useEffect, useRef } from "react";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import styles from "./SkillWrapper.module.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

type Props = {
  children?: React.ReactNode;
  className?: string;
  x: string;
  y: string;
  title: string;
};

const SkillWrapper = ({ children, className, x, y, title }: Props) => {
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      tippy(divRef.current, {
        content: title,
        animation: "scale",
        delay: 0,
        duration: 200,
        arrow: true,
        placement: "auto-start",
      });
    }
  }, [title]);

  return (
    <motion.div
      initial={{ x: "100%", y: "50%", opacity: 0 }}
      whileInView={{ x: x, y: y, opacity: 1, transition: { duration: 0.25 } }}
      className={`${styles.wrapper} ${className}`}
      title={title}
      ref={divRef}
    >
      {children}
    </motion.div>
  );
};

export default SkillWrapper;
