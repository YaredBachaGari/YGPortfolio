"use client";
import React, { useRef } from "react";
import styles from "./ExpTimeLine.module.css";
import SingleExperiance from "../SingleExperiance/SingleExperiance";
import { ListOfMyExp } from "../../../public/Alltext";
import { motion, useScroll, useTransform, MotionValue, useViewportScroll } from "framer-motion";

type Props = {};

const ExperianceTimeLine = (props: Props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className={styles.ExperianceListContainer}>
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className={styles.progressbar}
        ref={ref}
      />
      <div className={styles.fullListContainer}>
        <ul className={styles.fulllist}>
          {ListOfMyExp?.map((exp) => (
            <SingleExperiance detail={exp} key={exp.id} ref={ref}/>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperianceTimeLine;
