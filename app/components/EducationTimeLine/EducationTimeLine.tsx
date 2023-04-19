"use client"
import React, { useRef } from "react";
import { MyEducation } from "../../../public/Alltext";
import SingleEducation from "../SingleEducation/SingleEducation";
import styles from "./EducationTimeLine.module.css";
import { motion, useScroll } from "framer-motion";

const EducationTimeLine = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className={styles.educationOuterContainer}>
      <motion.div
        style={{ scaleY: scrollYProgress }}
        className={styles.progressbar}
        ref={ref}
      />
      <div className={styles.educationwrapper}>
        <ul className={styles.fulllist}>
          {MyEducation?.map((education) => (
            <SingleEducation key={education.id} details={education} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EducationTimeLine;
