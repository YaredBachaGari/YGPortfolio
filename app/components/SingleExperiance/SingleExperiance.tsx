"use client";
import React, { useRef } from "react";
import styles from "./SingleExperiance.module.css";
import ScrollSpin from "../ScrollSpin/ScrollSpin";
import { motion } from "framer-motion";
type Props = {
  detail: {
    id: number;
    position: string;
    company: string;
    duration: {
      from?: string;
      to?: string | "Current";
    };
    city: string;
    country: string;
    kpi: {
      id: number;
      description: string;
    }[];
  };
};

const SingleExperiance = ({ detail }: Props) => {
  const { position, company, duration, city, country, kpi } = detail;
  const ref = useRef(null);

  return (
    <motion.li className={styles.singleexp} ref={ref}>
      <ScrollSpin
        referance={ref}
        class1={styles.class1}
        class2={styles.class2}
        class3={styles.class3}
        class4={styles.class4}
      />
      <div>
        <p className={styles.expheader}>
          <span className={styles.postion}>{position}&nbsp;</span>
          <span className={styles.atcompany}>@</span>
          <span className={styles.companyName}>{company}</span>
        </p>

        <p>
          {" "}
          <span className={styles.duration}>
            {duration?.from} - {duration?.to || "Current"}
          </span>{" "}
          | {city}, {country}
        </p>
        <ul className={styles.impactSummary}>
          {kpi?.map((impact) => (
            <li key={impact.id}>{impact.description}</li>
          ))}
        </ul>
      </div>
    </motion.li>
  );
};

export default SingleExperiance;
